<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $product = Product::all();
        if ($product) {
            return new ProductResource(true, 'data product', $product);
        } else {
            return new ProductResource(false, 'data product', null);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {
        $validatedData = $request->validated();
        $validatedData['slug'] = Str::slug($validatedData['title']) . '-' . Str::random(10);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = $image->hashName();
            $image->storeAs('public/images', $imageName);
        }

        // create data
        $product = Product::create($validatedData);

        if ($product) {
            return new ProductResource(true, 'success', $product);
        } else {
            return new ProductResource(false, 'failed', null);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $slug = Product::where('slug', $slug)->first();

        if ($slug) {
            return new ProductResource(true, 'product', $slug);
        } else {
            return response()->json(['message' => 'not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(ProductRequest $request, Product $product)
    {
        $validatedData = $request->validated();

        if ($request->hasFile('image')) {
            // Upload image
            $image = $request->file('image');
            $imageName = $image->hashName();
            $image->storeAs('public/images', $imageName);

            // Delete old image if exists
            Storage::delete('public/images/' . basename($product->image));
            $validatedData['image'] = $imageName;
        }

        // Update the slug only if 'title' is provided in the request
        if ($request->has('title')) {
            $validatedData['slug'] = Str::slug($validatedData['title']) . '-' . Str::random(10);
        }

        $product->update($validatedData);

        return new ProductResource(true, 'success', $product);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($slug)
    {
        $product = Product::where('slug', $slug)->first();
        Storage::delete('public/images/' . basename($product->image));

        $product->delete();

        if ($product) {
            return new ProductResource(true, 'success', null);
        } else {
            return new ProductResource(true, 'failed', null);
        }
    }
}
