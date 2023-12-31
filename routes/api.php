<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DepartementController;
use App\Http\Controllers\Api\FiliereController;
use App\Http\Controllers\Api\LicenceController;
use App\Http\Controllers\Api\Private\AnneeController;
use App\Http\Controllers\Api\Private\ExamenNormalController;
use App\Http\Controllers\Api\Private\MasterController;
use App\Http\Controllers\Api\Private\MatiereController;
use App\Http\Controllers\Api\Private\ModulesController;
use App\Http\Controllers\Api\Private\OptionController;
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

Route::post('inscription', [AuthController::class, 'register'])->middleware(['api-login', 'throttle']);
Route::post('connexion', [AuthController::class, 'login'])->middleware(['api-login', 'throttle']);

Route::middleware(['auth:api'])->group(function () {
    Route::prefix('admin')->group(function () {
        #UNIVERSITES#
        Route::ApiResource('universites', UniversiteController::class);

        #DEPARTEMENTS# #idU=idUniversite# #idD=idDepartement#
        Route::ApiResource('departements', DepartementController::class);
        Route::get('departements/liste/{idU}', [DepartementController::class, 'departementsListe']);
        Route::post('departements/ajout/{idU}', [DepartementController::class, 'departementsAjout']);
        Route::get('departements/detail/{idU}', [DepartementController::class, 'departementsDetail']);
        Route::put('departements/edition/{idU}/{idD}', [DepartementController::class, 'departementsEdition']);
        Route::delete('departements/suppression/{idU}/{idD}', [DepartementController::class, 'departementsSuppression']);

        #FILIERES# #idD=idDepartement# #idF=idFiliere#
        Route::ApiResource('filieres', FiliereController::class);
        Route::get('filieres/liste/{idD}', [FiliereController::class, 'filieresListe']);
        Route::get('filieres/detail/{idD}', [FiliereController::class, 'filieresDetail']);
        Route::post('filieres/ajout/{idD}', [FiliereController::class, 'filieresAjout']);
        Route::put('filieres/edition/{idD}/{idF}', [FiliereController::class, 'filieresEdition']);
        Route::delete('filieres/suppression/{idD}/{idF}', [FiliereController::class, 'filieresSuppression']);

        #Licence# #idF=idFiliere# #idF=idLicence#
        Route::ApiResource('licences', LicenceController::class);
        Route::get('licences/liste/{idF}', [LicenceController::class, 'licencesListe']);
        Route::get('licences/detail/{idF}', [LicenceController::class, 'licencesDetail']);
        Route::post('licences/ajout/{idF}', [LicenceController::class, 'licencesAjout']);
        Route::put('licences/edition/{idF}/{idL}', [LicenceController::class, 'licencesEdition']);
        Route::delete('licences/suppression/{idF}/{idL}', [LicenceController::class, 'licencesSuppression']);

        #Master# #idM=idMaster# #idD=idDepartement#
        Route::ApiResource('masters', MasterController::class);
        Route::get('masters/liste/{idD}', [MasterController::class, 'mastersListe']);
        Route::get('masters/detail/{idD}', [MasterController::class, 'mastersDetail']);
        Route::post('masters/ajout/{idD}', [MasterController::class, 'mastersAjout']);
        Route::put('masters/edition/{idD}/{idM}', [MasterController::class, 'mastersEdition']);
        Route::delete('masters/suppression/{idD}/{idM}', [MasterController::class, 'mastersSuppression']);

        #Option# #idL=idLicence# #idO=idOption#
        Route::ApiResource('options', OptionController::class);
        Route::get('options/liste/{idL}', [OptionController::class, 'optionsListe']);
        Route::get('options/detail/{idO}', [OptionController::class, 'optionsDetail']);
        Route::post('options/ajout/{idL}', [OptionController::class, 'optionsAjout']);
        Route::put('options/edition/{idL}/{idO}', [OptionController::class, 'optionsEdition']);
        Route::delete('options/suppression/{idL}/{idO}', [OptionController::class, 'optionsSuppression']);

        #Annee# #idA=idAnnee# #idO=idOption# #idM=idMaster#
        Route::ApiResource('annees', AnneeController::class);
        Route::get('annees-master/{idL}', [AnneeController::class, 'anneesMasterListe']);
        Route::get('annees-option/{idO}', [AnneeController::class, 'anneesOptionListe']);
        Route::post('annees-master/ajout/{idM}', [AnneeController::class, 'anneesMasterAjout']);
        Route::post('annees-option/ajout/{idO}', [AnneeController::class, 'anneesOptionAjout']);
        Route::put('annees-master/edition/{idM}/{idA}', [AnneeController::class, 'anneesMasterEdition']);
        Route::put('annees-option/edition/{idO}/{idA}', [AnneeController::class, 'anneesOptionEdition']);
        Route::delete('annees-master/suppression/{idM}/{idA}', [AnneeController::class, 'anneesMasterSuppression']);
        Route::delete('annees-option/suppression/{idO}/{idA}', [AnneeController::class, 'anneesOptionSuppression']);

        #Matiere# #idM=Matiere# #idA=idAnnee#
        Route::ApiResource('matieres', MatiereController::class);
        Route::get('matieres/liste/{idA}', [MatiereController::class, 'matieresListe']);
        Route::post('matieres/ajout/{idA}', [MatiereController::class, 'matieresAjout']);
        Route::put('matieres/edition/{idA}/{idM}', [MatiereController::class, 'matieresEdition']);
        Route::get('matieres/detail/{idA}', [MatiereController::class, 'matieresDetail']);
        Route::delete('matieres/suppression/{idA}/{idM}', [MatiereController::class, 'matieresSuppression']);


        #ExamenNormal# #idEN=idExamenNormal# #idMo=idModule#
        Route::ApiResource('examen-session-normals', ExamenNormalController::class);
        Route::get('examen-session-normals/liste/{idMo}', [ExamenNormalController::class, 'examenSessionNormalListe']);
        Route::post('examen-session-normals/ajout/{idMo}', [ExamenNormalController::class, 'examenSessionNormalnAjout']);
        Route::put('examen-session-normals/edition/{idMo}/{idEN}', [ExamenNormalController::class, 'examenSessionNormalEdition']);
        Route::delete('examen-session-normals/suppression/{idMo}/{idEN}', [ExamenNormalController::class, 'examenSessionNormalSuppression']);
    });
});
