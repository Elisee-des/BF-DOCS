<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Filiere extends Model
{
    use HasFactory, Uuids;

    protected $table='filieres';

    protected $fillable = [
        'departement_id',
        'nom',
        'abreviation',
        'logo'
    ];

    public function departement()
    {
        return $this->belongsTo(Departement::class);
    }
}
