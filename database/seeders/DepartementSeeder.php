<?php

namespace Database\Seeders;

use App\Models\Departement;
use App\Models\Universite;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $idURecent = Universite::latest()->first()->id;
        $idUAncien = Universite::oldest()->first()->id;

        Departement::create([
            'nom' => 'ST',
            'universite_id' => $idURecent,
        ]);

        Departement::create([
            'nom' => 'LSH',
            'universite_id' => $idURecent,
        ]);

        Departement::create([
            'nom' => 'LSH',
            'universite_id' => $idUAncien,
        ]);

        Departement::create([
            'nom' => 'SEA',
            'universite_id' => $idUAncien,
        ]);
    }
}
