<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ShipLease;

class ShipLeaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ShipLease::factory()->count(7)->sequence(
            [
                'image' => '1.jpg',
                'name' => 'GSL Kalliopi',
                'built' => 'August 12, 2017',
                'yard' => 'Ford',
                'lwt' => '53200',
            ],
            [
                'image' => '2.jpg',
                'name' => 'GSL Nimbo',
                'built' => 'September 9, 2009',
                'yard' => 'Samsung',
                'lwt' => '54000',
            ],
            [
                'image' => '3.jpg',
                'name' => 'CMA CGM Jamaica',
                'built' => 'November 23, 2011',
                'yard' => 'Hyundai',
                'lwt' => '49300',
            ],
            [
                'image' => '4.jpg',
                'name' => 'GSL Christen',
                'built' => 'August 17, 2014',
                'yard' => 'Samsung',
                'lwt' => '54300',
            ],
            [
                'image' => '5.jpg',
                'name' => 'Nimitz Class, USA',
                'built' => 'September 9, 2009',
                'yard' => 'Nimitz',
                'lwt' => '75300',
            ],
            [
                'image' => '6.jpg',
                'name' => 'Nampan Class, INA',
                'built' => 'August 17, 1721',
                'yard' => 'Zhejiang Ouhua',
                'lwt' => '51100',
            ],
            [
                'image' => '7.jpg',
                'name' => 'Nampan Class, INA',
                'built' => 'August 17, 1721',
                'yard' => 'Hyundai',
                'lwt' => '53000',
            ]
        )->create();
    }
}
