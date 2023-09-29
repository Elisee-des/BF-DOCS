<?php

namespace Database\Seeders;

use App\Models\Ville;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VilleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Ville::create([
            'nom' => 'Ouagadougou',
        ]);

        Ville::create([
            'nom' => 'Koudougou',
        ]);

        Ville::create([
            'nom' => 'Bobo',
        ]);

        Ville::create([
            'nom' => 'Manga',
        ]);
    }
}
