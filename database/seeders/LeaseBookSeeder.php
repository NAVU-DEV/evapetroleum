<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\LeaseBook;

class LeaseBookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        LeaseBook::factory()->count(50)->sequence(
            [
                'ship_id' => 1,
                'company' => 'PT. X',
                'document' => 'lorem-ipsum.pdf',
                'booked_until' => now()
            ],
            [
                'ship_id' => 1,
                'company' => 'PT. Y',
                'document' => 'lorem-ipsum.pdf',
                'booked_until' => now()
            ],
            [
                'ship_id' => 1,
                'company' => 'PT. Z',
                'document' => 'lorem-ipsum.pdf',
                'booked_until' => now()
            ],
        )->create();
    }
}
