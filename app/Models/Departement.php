<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Departement extends Model
{
    use HasFactory, Uuids;

    protected $table='departements';

    protected $fillable = [
        'nom',
        'abreviation',
        'logo',
        'universite_id',
    ];

    public function universite()
    {
        return $this->belongsTo(Universite::class);
    }

    public function filieres()
    {
        return $this->hasMany(Filiere::class);
    }
}
