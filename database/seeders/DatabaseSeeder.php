<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            TestimonySeeder::class,
            ProductSeeder::class,
            ShipLeaseSeeder::class,
            InboxSeeder::class,
            UserSeeder::class,
            LeaseBookSeeder::class,
            HomeContentSeeder::class
        ]);
    }
}
