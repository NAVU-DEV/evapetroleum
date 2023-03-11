<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::factory()->count(7)->sequence(
            [
                'product_name' => 'GAS OIL 10 PPM SULPHUR',
                'product_code' => 'EP.W.GO.II.01',
                'product_image' => 'table1.png'
            ],
            [
                'product_name' => 'GAS OIL 50 PPM SULPHUR',
                'product_code' => 'EP.W.GO.II.02',
                'product_image' => 'table2.png'
            ],
            [
                'product_name' => 'GAS OIL 500 PPM',
                'product_code' => 'EP.W.GO.II.05',
                'product_image' => 'table3.png'
            ],
            [
                'product_name' => 'GAS SPEED DIESEL',
                'product_code' => 'EP.W.GO.II.06',
                'product_image' => 'table4.png'
            ],
            [
                'product_name' => 'FUEL OIL 180 CST',
                'product_code' => 'EP.B.FO.I.01',
                'product_image' => 'table5.png'
            ],
            [
                'product_name' => 'FUEL OIL 280 CST',
                'product_code' => 'EP.B.FO.I.02',
                'product_image' => 'table6.png'
            ],
            [
                'product_name' => 'FUEL OIL 380 CST',
                'product_code' => 'EP.B.FO.I.03',
                'product_image' => 'table7.png'
            ]
        )->create();
    }
}
