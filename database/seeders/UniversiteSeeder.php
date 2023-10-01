<?php

namespace Database\Seeders;

use App\Models\Universite;
use App\Models\Ville;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UniversiteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $idURecent = Ville::latest()->first()->id;

        Universite::create([
            'nom' => 'Universite Norbert Zongo',
            'abreviation' => 'UNZ',
            'adresse' => 'Ouagadougou rue 127',
            'date_creation' => '19/02/2015',
            'telephone'=> '78564365',
            'president_nom'=> '78564365',
            'president_prenom'=> '78564365',
            'annee'=> '78564365',
            'ville_id' => $idURecent,
        ]);

        Universite::create([
            'nom' => 'Universite Joseph Ki Zongo',
            'abreviation' => 'UJKZ',
            'adresse' => 'koudougou rue 101',
            'telephone'=> '78564365',
            'date_creation' => '19/02/2003', 
            'ville_id' => $idURecent,
        ]);
        Universite::create([
            'nom' => 'Universite Nazi Boni',
            'abreviation' => 'UNB',
            'adresse' => 'Bobo rue 103',
            'telephone'=> '78564365',
            'date_creation' => '2018',
            'ville_id' => $idURecent,
        ]);

    }
}
