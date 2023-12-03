<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Autentikasi
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);


Route::prefix('products')->group(function () {

    // Rute CRUD produk hanya bisa diakses oleh admin
    Route::post('/create', [ProductController::class, 'store']); // Endpoint untuk membuat produk baru
    Route::put('/edit/{product}', [ProductController::class, 'update']); // Endpoint untuk mengupdate produk
    Route::delete('/delete/{product}', [ProductController::class, 'destroy']); // Endpoint untuk menghapus produk

    Route::get('/', [ProductController::class, 'index']); // Endpoint untuk mendapatkan semua produk
    Route::get('/product/{slug}', [ProductController::class, 'show']); // Endpoint untuk mendapatkan detail produk
    Route::get('/search', [ProductController::class, 'search']); // Endpoint untuk mencari produk berdasarkan nama
    Route::get('/latest', [ProductController::class, 'getLatestProduct']); // Endpoint untuk mendapatkan produk terbaru
    Route::get('/random-six-product', [ProductController::class, 'getSixProduct']); // Endpoint untuk mendapatkan 6 produk secara acak
    Route::get('/random-three-product', [ProductController::class, 'getThreeProduct']); // Endpoint untuk mendapatkan 3 produk secara acak
    Route::get('/filter', [ProductController::class, 'filterProduct']); // Endpoint untuk melakukan filter produk
    Route::get('/categories', [ProductController::class, 'getCategories']); // Endpoint untuk mendapatkan category
});
