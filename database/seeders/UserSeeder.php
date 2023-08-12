<?php

namespace Database\Seeders;

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
        $users=[
            array('nom' => 'admin','prenom' => 'admin', 'ine'=>'N00290420121','email' => 'admin@gmail.com','email_verified_at' => now(),'password' => bcrypt('password'),'telephone' => '56882237','role'=>'Admin', 'remember_token' => Str::random(10)),
            array('nom' => 'user','prenom' => 'user', 'ine'=>'N00280420131','email' => 'user@gmail.com','email_verified_at' => now(),'password' => bcrypt('password'),'telephone' => '55885737','role'=>'User', 'remember_token' => Str::random(10)),
            array('nom' => 'delegue','prenom' => 'delegue', 'ine'=>'N00210420191','email' => 'delegue@gmail.com','email_verified_at' => now(),'password' => bcrypt('password'),'telephone' => '58884237','role'=>'Delegue', 'remember_token' => Str::random(10)),
            ];

        foreach ($users as $user) {
            $user=User::create($user);
            
            
        }
    }
}
