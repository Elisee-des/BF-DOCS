<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            UniversiteSeeder::class,
            DepartementSeeder::class,
            FiliereSeeder::class,
            MasterSeeder::class,
            LicenceSeeder::class,
            OptionSeeder::class,
            AnneeSeeder::class,
            ModuleSeeder::class,
            ExamenSessionNormalSeeder::class,
        ]);
    }
}
