<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamenRattrapage extends Model
{
    use HasFactory, Uuids;

    protected $table='examen_rattrapages';

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
