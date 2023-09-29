<?php

namespace Database\Seeders;

use App\Models\President;
use App\Models\Universite;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PresidentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $idURecent = Universite::latest()->first()->id;

        President::create([
            'nom' => 'Ouedraogo',
            'prenom' => 'Alex',
            'annee' => '2023',
            'universite_id' => $idURecent,
        ]);

        President::create([
            'nom' => 'Sawadogo',
            'prenom' => 'Alain',
            'annee' => '2020',
            'universite_id' => $idURecent,
        ]);

        President::create([
            'nom' => 'Zongo',
            'prenom' => 'Alex',
            'annee' => '2018',
            'universite_id' => $idURecent,
        ]);
    }
}
