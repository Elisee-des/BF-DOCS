<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DepartementController;
use App\Http\Controllers\Api\FiliereController;
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

    #UNIVERSITES#
    Route::ApiResource('universites',UniversiteController::class);

    #DEPARTEMENTS#
    Route::ApiResource('departements',DepartementController::class);
    Route::get('departements/liste/{idU}',[DepartementController::class,'departementsListe']);
    Route::post('departements/ajout/{idU}',[DepartementController::class,'departementsAjout']);
    Route::get('departements/detail/{idU}',[DepartementController::class,'departementsDetail']);
    Route::put('departements/edition/{idD}/{idU}',[DepartementController::class,'departementsEdition']);
    Route::delete('departements/suppression/{idD}/{idU}',[DepartementController::class,'departementsSuppression']);

    #FILIERES#
    Route::ApiResource('filieres', FiliereController::class);
    Route::get('filieres/liste/{idD}',[FiliereController::class,'filieresListe']);
    Route::post('filieres/ajout/{idD}',[FiliereController::class,'filieresAjout']);
    Route::put('filieres/edition/{idF}/{idD}',[FiliereController::class,'filieresEdition']);
    Route::delete('filieres/suppression/{idF}/{idD}',[FiliereController::class,'filieresSuppression']);

});
