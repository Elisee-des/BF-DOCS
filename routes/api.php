<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DepartementController;
use App\Http\Controllers\Api\UniversiteController;
use Illuminate\Support\Facades\Route;

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
Route::post('inscription',[AuthController::class,'register'])->middleware(['api-login','throttle']);
Route::post('connexion',[AuthController::class,'login'])->middleware(['api-login','throttle']);

Route::middleware(['auth:api'])->group(function () {
    Route::ApiResource('universites',UniversiteController::class);
    Route::ApiResource('departements',DepartementController::class);
});
