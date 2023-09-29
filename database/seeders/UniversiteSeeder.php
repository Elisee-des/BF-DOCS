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
            'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint accusamus earum rem velit! Qui aliquid iure dicta natus illo?', 
            'ville_id' => $idURecent,
        ]);

        Universite::create([
            'nom' => 'Universite Joseph Ki Zongo',
            'abreviation' => 'UJKZ',
            'adresse' => 'koudougou rue 101',
            'telephone'=> '78564365',
            'date_creation' => '19/02/2003', 
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil exercitationem perferendis delectus?',
            'ville_id' => $idURecent,
        ]);
        Universite::create([
            'nom' => 'Universite Nazi Boni',
            'abreviation' => 'UNB',
            'adresse' => 'Bobo rue 103',
            'telephone'=> '78564365',
            'date_creation' => '2018',
            'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus ratione minus impedit, tempore enim! Voluptas quibusdam nemo aspernatur culpa. Accusantium excepturi asperiores quos impedit similique aspernatur eveniet quasi modi dolor id nobis facilis reiciendis earum, facere nulla recusandae aut.',
            'ville_id' => $idURecent,
        ]);

    }
}
