<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\President;
use App\Models\Universite;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class UniversiteController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(['universites' => $this->universites()], 'Liste des universités');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nom' => 'required',
                'abreviation' => 'required',
                'ville_id' => 'required',
                'president_nom' => 'required',
                'president_prenom' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
            }

            $universite = new Universite();
            $universite->nom = $request->nom;
            $universite->abreviation = $request->abreviation;
            $universite->telephone = $request->telephone;
            $universite->date_creation = $request->date_creation;
            $universite->ville_id = $request->ville_id;
            $universite->adresse = $request->adresse;
            $universite->save();

            $president = new President();
            $president->nom = $request->president_nom;
            $president->prenom = $request->president_prenom;
            $president->universite_id = $universite->id;
            $president->annee = Carbon::now()->year;
            $president->save();


            if ($request->logo != null) {

                $photo_64 = $request->logo; //your base64 encoded data
                // $extension = explode('/', explode(':', substr($pdf_64, 0, strpos($pdf_64, ';')))[1])[1];   // .jpg .png .pdf
                $replace = substr($photo_64, 0, strpos($photo_64, ',') + 1);
                $file = str_replace($replace, '', $photo_64);
                $myImage = str_replace(' ', '+', $file);
                $filename = Str::slug($request->nom . $request->abreviation) . '.png';

                Storage::disk('public')->put('uploads/universites/images/' . $filename, base64_decode($myImage));
                $path = 'uploads/universites/images/' . $filename;

                $universite->logo = $path;
            }

            if ($request->logo_cover != null) {

                $photo_64 = $request->logo_cover; //your base64 encoded data
                // $extension = explode('/', explode(':', substr($pdf_64, 0, strpos($pdf_64, ';')))[1])[1];   // .jpg .png .pdf
                $replace = substr($photo_64, 0, strpos($photo_64, ',') + 1);
                $file = str_replace($replace, '', $photo_64);
                $myImage = str_replace(' ', '+', $file);
                $filename = Str::slug($request->nom . $request->abreviation) . '.png';

                Storage::disk('public')->put('uploads/universites/images/' . $filename, base64_decode($myImage));
                $path = 'uploads/universites/images/' . $filename;

                $universite->logo_cover = $path;
            }

            $universite->save();

            return $this->sendResponse(
                ['universites' => $this->universites()],
                'Université ajoutée avec succès.'
            );
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($idU)
    {
        try {
            $universite = Universite::with(['departements', 'users'])->findOrFail($idU);

            if ($universite) {
                return $this->sendResponse(['universite' => $universite], 'Detail de l\'université');
            } else {
                return $this->sendError('Cette université n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Universite $universite)
    {
        try {
            if ($universite) {

                $validator = Validator::make($request->all(), [
                    'nom' => 'required',
                    'abreviation' => 'required',
                ]);

                if ($validator->fails()) {
                    return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
                }

                $universite->nom = $request->nom;
                $universite->abreviation = $request->abreviation;
                $universite->logo_cover = $request->logo_cover;
                $universite->date_creation = $request->date_creation;
                $universite->adresse = $request->adresse;
                $universite->localisation = $request->localisation;

                if ($request->logo != null) {

                    $photo_64 = $request->logo; //your base64 encoded data
                    // $extension = explode('/', explode(':', substr($pdf_64, 0, strpos($pdf_64, ';')))[1])[1];   // .jpg .png .pdf
                    $replace = substr($photo_64, 0, strpos($photo_64, ',') + 1);
                    $file = str_replace($replace, '', $photo_64);
                    $myImage = str_replace(' ', '+', $file);
                    $filename = Str::slug($request->nom . $request->abreviation) . '.png';
                    
                    Storage::disk('public')->put('uploads/universites/images/' . $filename, base64_decode($myImage));
                    $path = 'uploads/universites/images/' . $filename;

                    $universite->logo = $path;
                }

                if ($request->logo_cover != null) {

                    $photo_64 = $request->logo_cover; //your base64 encoded data
                    // $extension = explode('/', explode(':', substr($pdf_64, 0, strpos($pdf_64, ';')))[1])[1];   // .jpg .png .pdf
                    $replace = substr($photo_64, 0, strpos($photo_64, ',') + 1);
                    $file = str_replace($replace, '', $photo_64);
                    $myImage = str_replace(' ', '+', $file);
                    $filename = Str::slug($request->nom . $request->abreviation) . '.png';
    
                    Storage::disk('public')->put('uploads/universites/images/' . $filename, base64_decode($myImage));
                    $path = 'uploads/universites/images/' . $filename;
    
                    $universite->logo_cover = $path;
                }

                $universite->save();

                return $this->sendResponse(
                    ['universites' => $this->universites()],
                    'Université editée avec succès.'
                );
            } else {
                return $this->sendError('Cette université n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($idU)
    {
        try {
            $universite = Universite::findOrFail($idU);
            if ($universite->departements->count() != 0) {
                return $this->sendError('Impossible de Supprimer car elle est liée a des departements. Veuillez supprimer tous ses departements puis réssayez.');
            }

            if ($universite) {
                $path = $universite->logo;
                
                if (Storage::disk('public')->exists($path)) {
                    Storage::disk('public')->delete($path);
                }
                $universite->delete();

                return $this->sendResponse(['universites' => $this->universites()], 'Université supprimée avec succès.');
            } else {
                return $this->sendError('Cette université n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function universites()
    {
        $universites = Universite::with(['departements', 'presidents', 'ville'])->orderBy('created_at', 'desc')->get();
        return $universites;
    }
}
