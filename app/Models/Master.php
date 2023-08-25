<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Master extends Model
{
    use HasFactory, Uuids;

    protected $table='masters';

    protected $fillable = [
        'departement_id',
        'nom',
        'abreviation',
    ];

    public function departement()
    {
        return $this->belongsTo(Departement::class);
    }

    public function annees()
    {
        return $this->hasMany(Annee::class);
    }
}
