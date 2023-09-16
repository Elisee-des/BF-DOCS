<?php

namespace Database\Seeders;

use App\Models\CorrigeRattrapage;
use App\Models\ExamenNormal;
use App\Models\ExamenRattrapage;
use App\Models\Module;
use App\Models\User;
use Illuminate\Database\Seeder;

class CorrigerSessionRattrapageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $idURecent = Module::latest()->first()->id;
        $idUAncien = Module::oldest()->first()->id;

        CorrigeRattrapage::create([
            'nom' => 'Session Normal',
            'taille_fichier' => '330k',
            'remarque' => 'Pas de remarque',
            'fichier' => 'Null',
            'module_id' => $idUAncien,
        ]);

        CorrigeRattrapage::create([
            'nom' => 'Session de Rattrapage',
            'taille_fichier' => '5300k',
            'remarque' => 'aucune',
            'fichier' => 'Null',
            'module_id' => $idUAncien,
        ]);


        CorrigeRattrapage::create([
            'nom' => 'Session Normal',
            'taille_fichier' => '330k',
            'remarque' => 'Pas de remarque',
            'fichier' => 'Null',
            'module_id' => $idUAncien,
        ]);

        CorrigeRattrapage::create([
            'nom' => 'Session de Rattrapage',
            'taille_fichier' => '850k',
            'remarque' => 'Il y\'a une correction au niveau du sujet 2',
            'fichier' => 'Null',
            'module_id' => $idURecent,
        ]);
    }
}
