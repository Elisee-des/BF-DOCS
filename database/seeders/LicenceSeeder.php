<?php

namespace Database\Seeders;

use App\Models\Filiere;
use App\Models\Licence;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LicenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $idURecent = Filiere::latest()->first()->id;
        $idUAncien = Filiere::oldest()->first()->id;

        Licence::create([
            'nom' => 'Licence 1',
            'abreviation' => 'L1',
            'filiere_id' => $idURecent,
        ]);

        Licence::create([
            'nom' => 'Licence 2',
            'abreviation' => 'L2',
            'filiere_id' => $idURecent,
        ]);

        Licence::create([
            'nom' => 'Licence 3',
            'abreviation' => 'L3',
            'filiere_id' => $idUAncien,
        ]);
    }
}
