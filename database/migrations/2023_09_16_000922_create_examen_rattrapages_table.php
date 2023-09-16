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
        Schema::create('examen_rattrapages', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('nom');
            $table->string('taille_fichier')->nullable();
            $table->string('remarque')->nullable();
            $table->string('fichier')->nullable();
            $table->string('user_id')->nullable();
            $table->foreignUuid('module_id')->references('id')->on('modules');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('examen_rattrapages');
    }
};
