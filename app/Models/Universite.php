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
        'localisation',
        'logo_cover',
    ];

    public function departements()
    {
        return $this->hasMany(Departement::class);
    }
}
