<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Licence extends Model
{
    use HasFactory, Uuids;

    protected $table='licences';

    protected $fillable = [
        'filiere_id',
        'nom',
        'abreviation',
    ];

    public function filiere()
    {
        return $this->belongsTo(Filiere::class);
    }
}
