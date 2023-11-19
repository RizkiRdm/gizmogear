<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(AuthRequest $request)
    {
        $validatedData = $request->validated();

        // Jika 'role' tidak diisi, tetapkan nilai default ke 'user'
        $validatedData['role'] = $validatedData['role'] ?? 'user';

        // Hashing password
        $validatedData['password'] = Hash::make($validatedData['password']);

        $user = User::create($validatedData);

        // create token
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['access_token' => $token, 'token_type' => 'Bearer', 'data' => $user]);
    }


    public function login(AuthRequest $request)
    {
        if (Auth::attempt($request->only('username', 'password'))) {
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;
            // Sertakan informasi role pengguna dalam respons
            return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
                'username' => $user->username, // Sertakan username pengguna dalam respons
                'role' => $user->role, // Sertakan role pengguna dalam respons
            ]);
        }
        return response()->json(['error' => 'unathorized'], 401);
    }

    public function logout(AuthRequest $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out']);
    }
}
