<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
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

// Rute CRUD produk hanya bisa diakses oleh admin
// Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
// });
// Route::apiResource('/products', ProductController::class)->except('search');
// // search product
// Route::get('/products/search', 'ProductController@search');

Route::prefix('products')->group(function () {
    Route::get('/', [ProductController::class, 'index']); // Endpoint untuk mendapatkan semua produk
    Route::post('/', [ProductController::class, 'store']); // Endpoint untuk membuat produk baru
    Route::put('/{product}', [ProductController::class, 'update']); // Endpoint untuk mengupdate produk
    Route::delete('/{product}', [ProductController::class, 'destroy']); // Endpoint untuk menghapus produk
    Route::get('/search', [ProductController::class, 'search']); // Endpoint untuk mencari produk berdasarkan nama
});
