<?php

namespace Database\Seeders;

use App\Models\Universite;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UniversiteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Universite::create([
            'nom' => 'Universite Norbert Zongo',
            'abreviation' => 'UNZ',
            'date_creation' => '19/02/2015',
            'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint accusamus earum rem velit! Qui aliquid iure dicta natus illo?', 
            'localisation' => 'Koudougou',
        ]);

        Universite::create([
            'nom' => 'Universite Joseph Ki Zongo',
            'abreviation' => 'UJKZ',
            'date_creation' => 'UJKZ', 
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil exercitationem perferendis delectus?',
            'localisation' => 'Ouagadougou',
        ]);
        Universite::create([
            'nom' => 'Universite Thoma Sankara',
            'abreviation' => 'UTS',
            'date_creation' => 'UNZ',
            'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus ratione minus impedit, tempore enim! Voluptas quibusdam nemo aspernatur culpa. Accusantium excepturi asperiores quos impedit similique aspernatur eveniet quasi modi dolor id nobis facilis reiciendis earum, facere nulla recusandae aut.',
            'localisation' => 'Sapaner',
        ]);

    }
}
