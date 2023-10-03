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
        Schema::create('universites', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('nom');
            $table->string('abreviation')->nullable();
            $table->string('date_creation')->nullable();
            $table->mediumText('logo')->nullable();
            $table->string('telephone')->nullable();
            $table->string('adresse')->nullable();
            $table->mediumText('logo_cover')->nullable();
            $table->mediumText('petit_decription')->nullable();
            $table->string('annee')->nullable();
            $table->string('president_nom')->nullable();
            $table->string('president_prenom')->nullable();
            $table->foreignUuid('ville_id')->references('id')->on('villes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('universites');
    }
};
