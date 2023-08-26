<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    use HasFactory, Uuids;

    protected $table='options';

    protected $fillable = [
        'licence_id',
        'nom',
        'abreviation',
    ];
    
    public function licence()
    {
        return $this->belongsTo(Licence::class);
    }

    public function annees()
    {
        return $this->hasMany(Annee::class);
    }
}
