<?php

namespace Database\Seeders;

use App\Models\ExamenNormal;
use App\Models\ExamenRattrapage;
use App\Models\Module;
use Illuminate\Database\Seeder;

class ExamenSessionRattrapageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $idURecent = Module::latest()->first()->id;
        $idUAncien = Module::oldest()->first()->id;

        ExamenRattrapage::create([
            'nom' => 'Session Normal',
            'taille_fichier' => '330k',
            'remarque' => 'Pas de remarque',
            'fichier' => 'Null',
            'module_id' => $idURecent,
        ]);

        ExamenRattrapage::create([
            'nom' => 'Session de Rattrapage',
            'taille_fichier' => '2300k',
            'remarque' => 'aucune',
            'fichier' => 'Null',
            'module_id' => $idUAncien,
        ]);

        ExamenRattrapage::create([
            'nom' => 'Session de Rattrapage',
            'taille_fichier' => '150k',
            'remarque' => 'Il y\'a une correction au niveau du sujet 2',
            'fichier' => 'Null',
            'module_id' => $idURecent,
        ]);
    }
}
