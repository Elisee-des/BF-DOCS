<?php

namespace Database\Seeders;

use App\Models\Annee;
use App\Models\Master;
use App\Models\Option;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AnneeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $idURecent = Option::latest()->first()->id;
        $idUAncien = Master::oldest()->first()->id;

        Annee::create([
            'nom' => '2018',
            'option_id' => $idURecent,
        ]);

        Annee::create([
            'nom' => '2023',
            'master_id' => $idUAncien,
        ]);

        Annee::create([
            'nom' => '2019',
            'option_id' => $idURecent,
        ]);

        Annee::create([
            'nom' => '2020',
            'master_id' => $idUAncien,
        ]);
    }
}
