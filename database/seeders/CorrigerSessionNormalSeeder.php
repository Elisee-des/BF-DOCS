<?php

namespace Database\Seeders;

use App\Models\CorrigeNormal;
use App\Models\ExamenNormal;
use App\Models\Module;
use App\Models\User;
use Illuminate\Database\Seeder;

class CorrigerSessionNormalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $idURecent = Module::latest()->first()->id;
        $idUAncien = Module::oldest()->first()->id;

        CorrigeNormal::create([
            'nom' => 'Session Normal',
            'taille_fichier' => '390k',
            'remarque' => 'Pas de remarque',
            'fichier' => 'Null',
            'module_id' => $idURecent,
        ]);

        CorrigeNormal::create([
            'nom' => 'Session de Rattrapage',
            'taille_fichier' => '1200k',
            'remarque' => 'aucune',
            'fichier' => 'Null',
            'module_id' => $idUAncien,
        ]);

        CorrigeNormal::create([
            'nom' => 'Session de Rattrapage',
            'taille_fichier' => '190k',
            'remarque' => 'Il y\'a une correction au niveau du sujet 2',
            'fichier' => 'Null',
            'module_id' => $idURecent,
        ]);

        CorrigeNormal::create([
            'nom' => 'Session Normal',
            'taille_fichier' => '390k',
            'remarque' => 'Pas de remarque',
            'fichier' => 'Null',
            'module_id' => $idURecent,
        ]);
    }
}
