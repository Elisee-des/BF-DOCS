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
            'nom' => 'Science Technologie',
            'abreviation' => 'UNZ',
            'universite_id' => $idURecent,
        ]);

        Departement::create([
            'nom' => 'Literrateur Science Historique',
            'abreviation' => 'UNZ',
            'universite_id' => $idURecent,
        ]);

        Departement::create([
            'nom' => 'Literrateur Science Historique',
            'abreviation' => 'UNZ',
            'universite_id' => $idUAncien,
        ]);

        Departement::create([
            'nom' => 'Science Exate Appliquer',
            'abreviation' => 'UNZ',
            'universite_id' => $idUAncien,
        ]);
    }
}
