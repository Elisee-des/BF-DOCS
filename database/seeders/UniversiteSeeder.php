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
        ]);

        Universite::create([
            'nom' => 'Universite Joseph Ki Zongo',
            'abreviation' => 'UJKZ',
        ]);

        Universite::create([
            'nom' => 'Universite Thoma Sankara',
            'abreviation' => 'UTS',
        ]);

    }
}
