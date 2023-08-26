<?php

namespace Database\Seeders;

use App\Models\Licence;
use App\Models\Option;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $idURecent = Licence::latest()->first()->id;
        $idUAncien = Licence::oldest()->first()->id;

        Option::create([
            'nom' => 'Mathemeatiques',
            'abreviation' => 'Maths',
            'licence_id' => $idURecent,
        ]);

        Option::create([
            'nom' => 'Informatique',
            'abreviation' => 'Info',
            'licence_id' => $idUAncien,
        ]);
    }
}
