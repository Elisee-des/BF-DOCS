<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CorrigeNormal extends Model
{
    use HasFactory, Uuids;

    protected $table='corrige_normals';

    protected $fillable = [
        'module_id',
        'user_id',
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
