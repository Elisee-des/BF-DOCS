<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class President extends Model
{
    use HasFactory, Uuids;

    protected $fillable = [
        'nom',
        'prenom',
        'annee',
    ];

    public function universite()
    {
        return $this->belongsTo(Universite::class);
    }
}
