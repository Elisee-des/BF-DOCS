<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->uuid("id")->primary();
            $table->string('nom');
            $table->string('prenom');
            $table->string('telephone');
            $table->string('ine')->unique();
            $table->string('departement');
            $table->string('filiere');
            $table->string('licence');
            $table->string('promotion');
            $table->string('email')->unique();
            $table->enum('role',['admin','delegue','user'])->default('user');
            $table->string('photo')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->foreignUuid('universite_id')->references('id')->on('universites');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
