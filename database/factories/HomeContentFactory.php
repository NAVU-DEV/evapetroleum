<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HomeContent>
 */
class HomeContentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'hero_title' => fake()->name(),
            'hero_description' => fake()->name(),
            'left_card_image' => fake()->imageUrl(720, 680, 'card content', true),
            'left_card_title' => fake()->sentence(),
            'left_card_description' => fake()->paragraph(1, true),
            'center_card_image' => fake()->imageUrl(720, 680, 'card content', true),
            'center_card_title' => fake()->sentence(),
            'center_card_description' => fake()->paragraph(1, true),
            'right_card_image' => fake()->imageUrl(720, 680, 'card content', true),
            'right_card_title' => fake()->sentence(),
            'right_card_description' => fake()->paragraph(1, true),
            'about_us' => fake()->text(),
            'email' => fake()->email(),
        ];
    }
}
