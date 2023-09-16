<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory, Uuids;

    protected $table='modules';

    protected $fillable = [
        'annee_id',
        'nom',
    ];
    
    public function annee()
    {
        return $this->belongsTo(Annee::class);
    }

    public function examen_normals()
    {
        return $this->hasMany(ExamenNormal::class);
    }

    public function examens_session_rattrapages()
    {
        return $this->hasMany(ExamenRattrapage::class);
    }

    public function corriges_session_normals()
    {
        return $this->hasMany(CorrigeNormal::class);
    }

    public function corriges_session_rattrapages()
    {
        return $this->hasMany(CorrigeRattrapage::class);
    }

}
