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
}
