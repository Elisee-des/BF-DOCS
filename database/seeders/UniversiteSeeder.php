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
            'president_nom'=> 'Ouedraogo',
            'president_prenom'=> 'Alassane',
            'petit_decription' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem esse ex omnis, reiciendis eaque dignissimos, debitis autem totam quae dolorum dolores, fugiat impedit architecto at eos ipsum corporis quasi adipisci?' ,
            'annee'=> '78564365',
            'ville_id' => $idURecent,
        ]);

        Universite::create([
            'nom' => 'Universite Joseph Ki Zongo',
            'abreviation' => 'UJKZ',
            'adresse' => 'koudougou rue 101',
            'telephone'=> '78564365',
            'petit_decription' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem esse ex omnis, reiciendis eaque dignissimos, debitis autem totam quae dolorum dolores, fugiat impedit architecto at eos ipsum corporis quasi adipisci?' ,
            'date_creation' => '19/02/2003', 
            'president_nom'=> 'Tapsoba',
            'president_prenom'=> 'Timothé',
            'ville_id' => $idURecent,
        ]);
        Universite::create([
            'nom' => 'Universite Nazi Boni',
            'abreviation' => 'UNB',
            'adresse' => 'Bobo rue 103',
            'telephone'=> '78564365',
            'petit_decription' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem esse ex omnis, reiciendis eaque dignissimos, debitis autem totam quae dolorum dolores, fugiat impedit architecto at eos ipsum corporis quasi adipisci?' ,
            'date_creation' => '2018',
            'president_nom'=> 'Zongo',
            'president_prenom'=> 'Aichatou',
            'ville_id' => $idURecent,
        ]);

    }
}
