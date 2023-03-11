<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Testimony;

class TestimonySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Testimony::factory()->count(7)->sequence(
            [
                'company' => 'SKT Oil Trading SDN BHD',
                'country' => 'Malaysia',
                'person' => 'Dato Tanga SK Tangakaliswarah',
            ],
            [
                'company' => 'Doltech Marine Services PTE LTD',
                'country' => 'Singapore',
                'person' => 'Mr Edison',
            ],
            [
                'company' => 'Kulu kilir SDN BHD',
                'country' => 'Malaysia',
                'person' => 'Dzulkifli bin Abdul Kudus',
            ],
            [
                'company' => 'Global Energy procurement SDN BHD',
                'country' => 'Malaysia',
                'person' => 'Mr Graham Broad',
            ],
            [
                'company' => 'Nusa Marine Services PTE LTD',
                'country' => 'Singapore',
                'person' => 'Mr Irman',
            ],
            [
                'company' => 'Khalifa Energy PTE LTD',
                'country' => 'Singapore',
                'person' => 'Mr Jason',
            ],
            [
                'company' => 'Simfoni Kapital SDN BHD',
                'country' => 'Malaysia',
                'person' => 'Datuk Ahmad Khairudin',
            ],
        )->create();
    }
}
