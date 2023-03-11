<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\LeaseBook>
 */
class LeaseBookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'ship_id' => fake()->randomNumber(2, true),
            'company' => fake()->name(),
            'email' => fake()->email(),
            'document' => fake()->name() . '.pdf',
            'book_status' => 'Booking'
        ];
    }
}
