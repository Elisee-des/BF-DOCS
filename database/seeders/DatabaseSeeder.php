<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Universite;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            VilleSeeder::class,
            UniversiteSeeder::class,
            PresidentSeeder::class,
            UserSeeder::class,
            DepartementSeeder::class,
            FiliereSeeder::class,
            MasterSeeder::class,
            LicenceSeeder::class,
            OptionSeeder::class,
            AnneeSeeder::class,
            ModuleSeeder::class,
            ExamenSessionNormalSeeder::class,
            ExamenSessionRattrapageSeeder::class,
            CorrigerSessionNormalSeeder::class,
            CorrigerSessionRattrapageSeeder::class,
        ]);
    }
}
