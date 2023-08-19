<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Departement;
use App\Models\Filiere;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class FiliereController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(['filieres' => $this->filieres()], 'Liste des filieres');
    }

    public function filieresListe($idD)
    {
        return $this->sendResponse(['filieres' => Filiere::where('departement_id', $idD)->get()], 'Liste des filieres');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function filieresAjout(Request $request, $idD)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nom' => 'required',
                'abreviation' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
            }

            $filiere = new Filiere();
            $filiere->nom = $request->nom;
            $filiere->abreviation = $request->abreviation;
            $filiere->departement_id = $idD;

            if ($request->logo != null) {

                $photo_64 = $request->logo; //your base64 encoded data
                // $extension = explode('/', explode(':', substr($pdf_64, 0, strpos($pdf_64, ';')))[1])[1];   // .jpg .png .pdf
                $replace = substr($photo_64, 0, strpos($photo_64, ',') + 1);
                $file = str_replace($replace, '', $photo_64);
                $myImage = str_replace(' ', '+', $file);
                $filename = Str::slug($request->nom . $request->abreviation) . '.png';

                Storage::disk('public')->put('uploads/filieres/images/' . $filename, base64_decode($myImage));
                $path = 'uploads/filieres/images/' . $filename;

                $filiere->logo = $path;
            }

            $filiere->save();

            return $this->sendResponse(
                ['filieres' => Filiere::where('departement_id', $idD)->get()],
                'Une filiere a été ajouté avec success. Retour de la liste des filieres'
            );
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($idD)
    {
        try {
            $departement = Departement::findOrFail($idD);

            if ($departement) {
                return $this->sendResponse(['departement' => $departement], 'Detail de l\'departement');
            } else {
                return $this->sendError('Cet departement n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function filieresEdition(Request $request, $idF, $idD)
    {
        try {
            $filiere = Filiere::findOrFail($idF);

            if ($filiere) {

                $validator = Validator::make($request->all(), [
                    'nom' => 'required',
                    'abreviation' => 'required',
                ]);

                if ($validator->fails()) {
                    return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
                }

                $filiere->nom = $request->nom;
                $filiere->abreviation = $request->abreviation;
                $filiere->departement_id = $idD;

                if ($request->logo != null) {

                    $photo_64 = $request->logo; //your base64 encoded data
                    // $extension = explode('/', explode(':', substr($pdf_64, 0, strpos($pdf_64, ';')))[1])[1];   // .jpg .png .pdf
                    $replace = substr($photo_64, 0, strpos($photo_64, ',') + 1);
                    $file = str_replace($replace, '', $photo_64);
                    $myImage = str_replace(' ', '+', $file);
                    $filename = Str::slug($request->nom . $request->abreviation) . '.png';

                    Storage::disk('public')->put('uploads/filieres/images/' . $filename, base64_decode($myImage));
                    $path = 'uploads/filieres/images/' . $filename;

                    $filiere->logo = $path;
                }

                $filiere->save();

                return $this->sendResponse(
                    ['filieres' => Filiere::where('departement_id', $idD)->get()],
                    'filiere edité avec succes. Retour de la liste des filieres'
                );
            } else {
                return $this->sendError('Cette filieres n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function filieresSuppression($idF, $idD)
    {
        try {
            $filiere = Filiere::findOrFail($idF);

            if ($filiere) {
                $path = $filiere->logo;
                if (Storage::disk('public')->exists($path)) {
                    Storage::disk('public')->delete($path);
                }
                $filiere->delete();

                return $this->sendResponse(['filieres' => Filiere::where('departement_id', $idD)->get()], 'filiere supprimer avec succes. Retour de la liste des filieres');
            } else {
                return $this->sendError('Cette filiere n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function filieres()
    {
        $filieres = Filiere::orderBy('created_at', 'desc')->get();
        return $filieres;
    }
}
