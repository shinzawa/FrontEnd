<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController; // コントローラーをインポート

Route::prefix('api')->middleware('api')->group(function () {
    // 認証不要のルート
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);

    Route::apiResource('/products', ProductController::class);
    // 認証が必要なルート
    Route::middleware('auth:sanctum')->group(function () {

        Route::get('/user', function (Request $request) {
            return $request->user();
        });
        Route::post('/logout', [AuthController::class, 'logout']);
    });
});

Route::view('/', 'welcome');
