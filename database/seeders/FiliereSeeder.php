<?php

namespace Database\Seeders;

use App\Models\Departement;
use App\Models\Filiere;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FiliereSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $idURecent = Departement::latest()->first()->id;
        $idUAncien = Departement::oldest()->first()->id;

        Filiere::create([
            'nom' => 'Math Phisique Chimique',
            'abreviation' => 'MPCI',
            'departement_id' => $idURecent,
        ]);

        Filiere::create([
            'nom' => 'Literrateur Science Historique',
            'abreviation' => 'MPCI',
            'departement_id' => $idURecent,
        ]);

        Filiere::create([
            'nom' => 'Histoire Archeologie',
            'abreviation' => 'MPCI',
            'departement_id' => $idUAncien,
        ]);
    }
}
