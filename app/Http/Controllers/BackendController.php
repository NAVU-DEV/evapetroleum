<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BackendController extends Controller
{
    public function inbox()
    {
        return Inertia::render('Backends/Inbox');
    }

    public function leasebook()
    {
        return Inertia::render('Backends/LeaseBook');
    }

    public function ships()
    {
        return Inertia::render('Backends/Ships');
    }

    public function contentManager()
    {
        return Inertia::render('Backends/ContentManager');
    }
}
