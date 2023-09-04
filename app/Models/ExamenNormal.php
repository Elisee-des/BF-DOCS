<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamenNormal extends Model
{
    use HasFactory, Uuids;

    protected $table='examen_normals';

    protected $fillable = [
        'module_id',
        'nom',
        'taille_fichier',
        'remarque',
        'fichier',
    ];

    public function module()
    {
        return $this->belongsTo(Module::class);
    }
}
