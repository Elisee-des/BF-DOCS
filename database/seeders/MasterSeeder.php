<?php

namespace Database\Seeders;

use App\Models\Departement;
use App\Models\Master;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MasterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $idURecent = Departement::latest()->first()->id;
        $idUAncien = Departement::oldest()->first()->id;

        Master::create([
            'nom' => 'Master 1',
            'abreviation' => 'M1',
            'departement_id' => $idURecent,
        ]);

        Master::create([
            'nom' => 'Master 2',
            'abreviation' => 'M2',
            'departement_id' => $idUAncien,
        ]);
    }
}
