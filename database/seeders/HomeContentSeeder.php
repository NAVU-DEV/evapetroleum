<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\HomeContent;

class HomeContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HomeContent::factory()->count(1)->sequence(
            [
                'hero_title' => 'International Oil & Gas Supply',
                'hero_description' => 'Eva Petroleum Limited conducts its business activities in International Oil and Gas suppliers, provide oil products of Crude Oil, Fuel Oil, Diesel, Gasoline, Naphtha and other specification of oil.',
                'left_card_image' => 'storegetank.jpg',
                'left_card_title' => 'Storage Tank',
                'left_card_description' => 'Storage tank provide company in Sharjah UAE, Fujairah UAE and storage tanks in Tanjung Balai Karimun, Indonesia.',
                'center_card_image' => 'vesselchartering.jpg',
                'center_card_title' => 'Vessel Chartering',
                'center_card_description' => 'Storage tank provide company in Sharjah UAE, Fujairah UAE and storage tanks in Tanjung Balai Karimun, Indonesia.',
                'right_card_image' => 'quality.jpg',
                'right_card_title' => 'Quality of Product',
                'right_card_description' => 'Crude Oil, Fuel Oil, Diesel, Gasoline, Naphtha and others Oil specifications, also provide oil mix tank facilities ask customer requests.',
                'about_us' => 'Eva Petroleum, Limited is International Oil and Gas Supplier Company, domiciled in Dubai and Indonesia, offered through the support of a company partner.',
                'email' => 'info@evapetroleum.com',
            ]
        )->create();
    }
}
