<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Departement;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

class DepartementController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(['departements' => $this->departements()], 'Liste des departements');
    }

    public function departementsListe($idU)
    {
        return $this->sendResponse(['departements' => Departement::where('universite_id', $idU)->get()], 'Liste des departements');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function departementsAjout(Request $request, $idU)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nom' => 'required',
                'abreviation' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
            }

            $departement = new Departement();
            $departement->nom = $request->nom;
            $departement->abreviation = $request->abreviation;
            $departement->universite_id = $idU;

            if ($request->logo != null) {

                $photo_64 = $request->logo; //your base64 encoded data
                // $extension = explode('/', explode(':', substr($pdf_64, 0, strpos($pdf_64, ';')))[1])[1];   // .jpg .png .pdf
                $replace = substr($photo_64, 0, strpos($photo_64, ',') + 1);
                $file = str_replace($replace, '', $photo_64);
                $myImage = str_replace(' ', '+', $file);
                $filename = Str::slug($request->nom . $request->abreviation) . '.png';

                Storage::disk('public')->put('uploads/departements/images/' . $filename, base64_decode($myImage));
                $path = 'uploads/departements/images/' . $filename;

                $departement->logo = $path;
            }

            $departement->save();

            return $this->sendResponse(
                ['departements' => Departement::where('universite_id', $idU)->get()],
                'Un departement a été ajouté avec success. Retour de la liste des departements'
            );
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function departementsDetail($idD)
    {
        try {
            $departement = Departement::with(['filieres', 'masters', 'universite'])->findOrFail($idD);
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
    public function departementsEdition(Request $request, $idU, $idD)
    {
        try {
            $departement = Departement::findOrFail($idD);

            if ($departement) {

                $validator = Validator::make($request->all(), [
                    'nom' => 'required',
                    'abreviation' => 'required',
                ]);

                if ($validator->fails()) {
                    return $this->sendError('Erreur de validation des champs.', $validator->errors(), 400);
                }

                $departement->nom = $request->nom;
                $departement->abreviation = $request->abreviation;
                $departement->universite_id = $idU;

                if ($request->logo != null) {

                    $photo_64 = $request->logo; //your base64 encoded data
                    // $extension = explode('/', explode(':', substr($pdf_64, 0, strpos($pdf_64, ';')))[1])[1];   // .jpg .png .pdf
                    $replace = substr($photo_64, 0, strpos($photo_64, ',') + 1);
                    $file = str_replace($replace, '', $photo_64);
                    $myImage = str_replace(' ', '+', $file);
                    $filename = Str::slug($request->nom . $request->abreviation) . '.png';

                    Storage::disk('public')->put('uploads/departements/images/' . $filename, base64_decode($myImage));
                    $path = 'uploads/departements/images/' . $filename;

                    $departement->logo = $path;
                }

                $departement->save();

                return $this->sendResponse(
                    ['departements' => Departement::where('universite_id', $idU)->get()],
                    'departement edité avec succes. Retour de la liste des departements'
                );
            } else {
                return $this->sendError('Cet departement n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function departementsSuppression($idU, $idD)
    {
        try {
            $departement = Departement::findOrFail($idD);

            if ($departement) {
                $path = $departement->logo;
                
                if (Storage::disk('public')->exists($path)) {
                    Storage::disk('public')->delete($path);
                }
                $departement->delete();

                return $this->sendResponse(['departements' => Departement::where('universite_id', $idU)->get()], 'departement supprimer avec succes. Retour de la liste des departements');
            } else {
                return $this->sendError('Cet departement n\'existe pas', 401);
            }
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function departements()
    {
        $departements = Departement::with(['filieres', 'masters', 'universite'])->orderBy('created_at', 'desc')->get();
        return $departements;
    }
}
