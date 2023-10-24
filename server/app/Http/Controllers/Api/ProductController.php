<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        // get all data
        $products = Product::all();
        return new ProductResource(true, 'list products', $products);
    }

    // create data
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required',
            'category' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Batasan ukuran maksimal 2MB
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->extension();
            $image->move(public_path('images'), $imageName);
            $data['image'] = $imageName;
        }

        $product = Product::create($data);

        if ($product) {
            return new ProductResource(true, 'success', $product);
        } else {
            return response()->json(['message' => 'failed create data']);
        }
    }
}
