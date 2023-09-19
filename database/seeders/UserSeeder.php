<?php

namespace Database\Seeders;

use App\Models\Universite;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $idU = Universite::oldest()->first()->id;

        $users=[
            array('nom' => 'admin','prenom' => 'admin', 'ine'=>'N00290420121', 'departement' => 'Science Technologie', 'licence'=>'Licence 1', 'universite_id' => $idU, 'filiere'=>'MPCI','email' => 'admin@gmail.com','email_verified_at' => now(),'password' => bcrypt('password'),'promotion' => '2018' ,'telephone' => '56882237','role'=>'Admin', 'remember_token' => Str::random(10)),
            array('nom' => 'user','prenom' => 'user', 'ine'=>'N00280420131','departement'=> 'Science Technologie', 'licence'=>'Licence 2','universite_id' => $idU, 'filiere'=>'MPCI','email' => 'user@gmail.com','email_verified_at' => now(),'password' => bcrypt('password'),'promotion' => '2019' ,'telephone' => '55885737','role'=>'User', 'remember_token' => Str::random(10)),
            array('nom' => 'delegue','prenom' => 'delegue', 'ine'=>'N00210420191','departement'=> 'Science Technologie', 'licence'=>'Licence 3', 'universite_id' => $idU, 'filiere'=>'Science Economie de Gestion','email' => 'delegue@gmail.com','email_verified_at' => now(),'password' => bcrypt('password'),'promotion' => '2017' ,'telephone' => '58884237','role'=>'Delegue', 'remember_token' => Str::random(10)),
            ];

        foreach ($users as $user) {
            $user=User::create($user);
            
            
        }
    }
}
