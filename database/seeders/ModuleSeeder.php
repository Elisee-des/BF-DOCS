<?php

namespace Database\Seeders;

use App\Models\Annee;
use App\Models\Module;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $idURecent = Annee::latest()->first()->id;
        $idUAncien = Annee::oldest()->first()->id;

        Module::create([
            'nom' => 'Base de donnée',
            'annee_id' => $idURecent,
        ]);

        Module::create([
            'nom' => 'Electromagnetisme',
            'annee_id' => $idUAncien,
        ]);
    }
}
