<?php

namespace Database\Seeders;

use App\Models\ExamenNormal;
use App\Models\Module;
use Illuminate\Database\Seeder;

class ExamenSessionNormalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $idURecent = Module::latest()->first()->id;
        $idUAncien = Module::oldest()->first()->id;

        ExamenNormal::create([
            'nom' => 'Session Normal',
            'taile_fichier' => '300k',
            'remarque' => 'Pas de remarque',
            'fichier' => 'Null',
            'module_id' => $idURecent,
        ]);

        ExamenNormal::create([
            'nom' => 'Session de Rattrapage',
            'taile_fichier' => '2200k',
            'remarque' => 'aucune',
            'fichier' => 'Null',
            'module_id' => $idUAncien,
        ]);

        ExamenNormal::create([
            'nom' => 'Session de Rattrapage',
            'taile_fichier' => '100k',
            'remarque' => 'Il y\'a une correction au niveau du sujet 2',
            'fichier' => 'Null',
            'module_id' => $idURecent,
        ]);
    }
}
