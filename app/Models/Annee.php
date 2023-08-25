<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Annee extends Model
{
    use HasFactory, Uuids;

    protected $table='annees';

    protected $fillable = [
        'master_id',
        'nom',
    ];

    public function master()
    {
        return $this->belongsTo(Master::class);
    }
}
