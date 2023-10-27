<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
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
    public function show($slug)
    {
        $productTitle = Product::where('slug', $slug)->first();

        if ($productTitle) {
            return new ProductResource(true, 'product', $productTitle);
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
        ], [
            'title.required' => 'Judul harus diisi.',
            'title.max' => 'Judul tidak boleh melebihi 255 karakter.',
            'category.required' => 'Kategori harus diisi.',
            'category.max' => 'Kategori tidak boleh melebihi 255 karakter.',
            'description.required' => 'Deskripsi harus diisi.',
            'price.required' => 'Harga harus diisi.',
            'price.numeric' => 'Harga harus berupa angka.',
            'image.image' => 'File yang diunggah harus berupa gambar.',
            'image.mimes' => 'Format gambar tidak valid. Gunakan format jpeg, png, jpg, atau gif.',
            'image.max' => 'Ukuran gambar tidak boleh melebihi 2MB.',
        ]);

        // make slug
        $slug =  Str::slug($data['title']) . '-' . Str::random(10);
        $data['slug'] = $slug;

        // store data
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
            'slug' => 'required',
            'category' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Batasan ukuran maksimal 2MB
        ], [
            'title.required' => 'Judul harus diisi.',
            'title.max' => 'Judul tidak boleh melebihi 255 karakter.',
            'category.required' => 'Kategori harus diisi.',
            'category.max' => 'Kategori tidak boleh melebihi 255 karakter.',
            'description.required' => 'Deskripsi harus diisi.',
            'price.required' => 'Harga harus diisi.',
            'price.numeric' => 'Harga harus berupa angka.',
            'image.image' => 'File yang diunggah harus berupa gambar.',
            'image.mimes' => 'Format gambar tidak valid. Gunakan format jpeg, png, jpg, atau gif.',
            'image.max' => 'Ukuran gambar tidak boleh melebihi 2MB.',
        ]);

        if (!$data) {
            return response()->json($data->errors(), 422);
        }

        // find product by ID
        $product = Product::find($id);


        // make new slug
        $slug = Str::slug($data['title']) . '-' . Str::random(10);

        // hapus slug lama
        if (file_exists(public_path($product->slug))) {
            unlink(public_path($product->slug));
        }

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
                'slug' => $slug,
                'category' => $request->category,
                'description' => $request->description,
                'price' => $request->price,
            ]);
        }

        return new ProductResource(true, 'success update', $product);
    }
}
