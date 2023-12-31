<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Str;
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

        // upload image
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = $image->hashName(); // Menggunakan hash name untuk nama unik gambar
            $imagePath = 'images/' . $imageName;

            // Menyimpan gambar ke penyimpanan (storage)
            Storage::putFileAs('public', $image, $imagePath);

            $validatedData['image'] = $imageName;
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
            $imagePath = 'public/images/' . $imageName;

            // Simpan gambar baru
            Storage::putFileAs('public/images', $image, $imageName);

            // Hapus gambar lama jika ada
            if ($product->image) {
                Storage::delete('public/images/' . $product->image);
            }

            $validatedData['image'] = $imageName;
        }

        // Update slug hanya jika 'title' disediakan dalam request
        if ($request->has('title')) {
            $validatedData['slug'] = Str::slug($validatedData['title']) . '-' . Str::random(10);
        }

        $product->update($validatedData);

        return new ProductResource($product, 'Success', true);
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

    // get latest product
    public function getLatestProduct()
    {
        $latestProduct = Product::latest('created_at')->first();
        if ($latestProduct) {
            return new ProductResource(true, 'latest product', $latestProduct);
        } else {
            return new ProductResource(false, 'product not found', null);
        }
    }

    // get 6 data product
    public function getSixProduct()
    {
        $cacheKey = 'random_six_product';

        $lastRandomTime = Cache::get($cacheKey . '_time');

        // Jika waktu terakhir belum ada atau sudah lebih dari 12 jam
        if (
            !$lastRandomTime || Carbon::parse($lastRandomTime)->addHours(12)->lte(Carbon::now())
        ) {
            $sixProduct = Product::inRandomOrder()->take(6)->get();

            if ($sixProduct->isNotEmpty()) {
                // Simpan hasil pengacakan dan waktu terakhir
                Cache::put($cacheKey, $sixProduct, now()->addHours(12));
                Cache::put($cacheKey . '_time', now(), now()->addHours(12));

                return new ProductResource(true, 'random six product', $sixProduct);
            }
        } else {
            // Jika waktu terakhir belum mencapai 12 jam, kembalikan hasil pengacakan sebelumnya
            $lastRandomProducts = Cache::get($cacheKey);

            return new ProductResource(true, 'last random six product', $lastRandomProducts);
        }

        return new ProductResource(false, 'not eligible for random six product', null);
    }

    // get 3 data product
    public function getThreeProduct()
    {
        $cacheKey = 'random_three_product';

        $lastRandomTime = Cache::get($cacheKey . '_time');

        // Jika waktu terakhir belum ada atau sudah lebih dari 12 jam
        if (
            !$lastRandomTime || Carbon::parse($lastRandomTime)->addHours(12)->lte(Carbon::now())
        ) {
            $threeProduct = Product::inRandomOrder()->take(3)->get();

            if ($threeProduct->isNotEmpty()) {
                // Simpan hasil pengacakan dan waktu terakhir
                Cache::put($cacheKey, $threeProduct, now()->addHours(12));
                Cache::put($cacheKey . '_time', now(), now()->addHours(12));

                return new ProductResource(true, 'random three product', $threeProduct);
            }
        } else {
            // Jika waktu terakhir belum mencapai 12 jam, kembalikan hasil pengacakan sebelumnya
            $lastRandomProducts = Cache::get($cacheKey);

            return new ProductResource(true, 'last random three product', $lastRandomProducts);
        }

        return new ProductResource(false, 'not eligible for random three product', null);
    }

    // get data category
    public function getCategories()
    {
        $products = Product::all(); // Gantilah ini dengan query yang sesuai untuk mendapatkan produk Anda
        $categories = $products->pluck('category')->unique()->values()->toArray();

        $result = ['category' => $categories];
        return new ProductResource(true, 'list category', $result);
    }

    // filter product base category
    public function filterProduct(ProductRequest $request)
    {
        $query = Product::query();

        // Filtering on the server
        if ($request->has('category')) {
            $query->where('category', $request->input('category'));
        }
        $productFilter = $query->get();
        if ($productFilter->isNotEmpty()) {
            return new ProductResource(true, 'product with category', $productFilter);
        } else {
            return new ProductResource(false, 'product not found', null);
        }
    }

    public function search(ProductRequest $request)
    {
        $query = Str::slug($request->input('q')); // Mengonversi nama produk menjadi slug
        $products = Product::where('slug', 'like', "%$query%")->get();

        // Mengembalikan hasil pencarian dalam format yang diinginkan
        return response()->json([
            'data' => $products,
            'url' => "q=$query"
        ]);
    }
}
