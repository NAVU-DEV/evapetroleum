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
        Schema::create('home_contents', function (Blueprint $table) {
            $table->id();
            $table->string('hero_title');
            $table->string('hero_description');
            $table->string('left_card_image');
            $table->string('left_card_title');
            $table->string('left_card_description');
            $table->string('center_card_image');
            $table->string('center_card_title');
            $table->string('center_card_description');
            $table->string('right_card_image');
            $table->string('right_card_title');
            $table->string('right_card_description');
            $table->string('about_us');
            $table->string('email');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('home_contents');
    }
};
