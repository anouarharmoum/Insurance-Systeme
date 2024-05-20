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
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('num_dossier');
            $table->string('assure');
            $table->decimal('prime', 8, 2);
            $table->decimal('avance', 8, 2);
            $table->decimal('rest', 8, 2);
            $table->datetime('cree_on');
            $table->string('duree');
            $table->datetime('ended_at');
            $table->string('Observation');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
       
    }
};

   //    $table->string('duration_unit')->nullable();