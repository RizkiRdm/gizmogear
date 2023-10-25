<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        // get all data
        $products = Product::all();
        return new ProductResource(true, 'list products', $products);
    }

    // GET data by ID
    public function show($id)
    {
        $productId = Product::findOrFail($id);

        if ($productId) {
            return new ProductResource(true, 'product', $productId);
        } else {
            return response()->json(['message' => 'not found'], 404);
        }
    }

    // POST data
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
            $imageName = $image->hashName();
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

    /**
     * PUT data
     *
     * @param  mixed $request
     * @param  mixed $product
     * @return void
     */
    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'title' => 'required',
            'category' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Batasan ukuran maksimal 2MB
        ]);

        if (!$data) {
            return response()->json($data->errors(), 422);
        }

        // find product by ID
        $product = Product::find($id);

        if ($request->hasFile('image')) {

            // upload image
            $image = $request->file('image');
            $imageName = time() . '.' . $image->extension();
            $image->move(public_path('images'), $imageName);
            $data['image'] = $imageName;

            // delete old image
            Storage::delete('public/images' . basename($product->image));
            $product->update($data);
        } else {
            $product->update([
                'title' => $request->title,
                'category' => $request->category,
                'description' => $request->description,
                'price' => $request->price,
            ]);
        }

        return new ProductResource(true, 'success update', $product);
    }
}
