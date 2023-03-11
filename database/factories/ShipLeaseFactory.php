<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ShipLease>
 */
class ShipLeaseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'image' => fake()->name(),
            'name' => fake()->name(),
            'built' => fake()->name(),
            'yard' => fake()->name(),
            'lwt' => fake()->name(),
            'rate' => fake()->randomNumber(5, true),
            'status' => 'Ready'
        ];
    }
}
