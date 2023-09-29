<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Universite extends Model
{
    use HasFactory, Uuids;

    protected $table='universites';

    protected $fillable = [
        'nom',
        'logo',
        'abreviation',
        'date_creation',
        'description',
        'adresse',
        'localisation',
        'logo_cover',
        'ville_id',
        'telephone',
    ];

    public function departements()
    {
        return $this->hasMany(Departement::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function presidents()
    {
        return $this->hasMany(President::class);
    }
}
