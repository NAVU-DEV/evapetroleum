<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Testimony;
use App\Models\Product;
use App\Models\ShipLease;

class FrontendController extends Controller
{
    public function index() {
        return Inertia::render('Frontends/Home');
    }

    public function frontend_product() {
        return Inertia::render('Frontends/Product');
    }

    public function frontend_aboutus() {
        return Inertia::render('Frontends/Aboutus');
    }

    public function frontend_shiplease() {
        return Inertia::render('Frontends/Shiplease');
    }

    public function getTestimony()
    {
        return response()->json(
            Testimony::select('*')
                ->paginate(3)
        );
    }

    public function getProducts()
    {
        return response()->json(
            Product::all());
    }

    public function getShips()
    {
        return response()->json(
            ShipLease::all());
    }
}
