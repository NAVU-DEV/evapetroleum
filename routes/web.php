<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\BackendController;
use App\Http\Controllers\InboxController;
use App\Http\Controllers\LeaseBookController;
use App\Http\Controllers\ShipLeaseController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Frontends
Route::get('/', [FrontendController::class, 'index'])->name('frontend-home');
Route::get('/product', [FrontendController::class, 'frontend_product'])->name('frontend-product');
Route::get('/aboutus', [FrontendController::class, 'frontend_aboutus'])->name('frontend-aboutus');
Route::get('/shiplease', [FrontendController::class, 'frontend_shiplease'])->name('frontend-shiplease');

// Get Data
Route::get('/testimony', [FrontendController::class, 'getTestimony'])->name('get-testimony');
Route::get('/products', [FrontendController::class, 'getProducts'])->name('get-product');
Route::get('/shipleases', [FrontendController::class, 'getShips'])->name('get-ship');

// Post Data
Route::post('/sendmessage', [InboxController::class, 'store'])->name('send-message');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    // Backends
    Route::get('/inbox', [BackendController::class, 'inbox'])->name('backend-inbox');
    Route::get('/leasebook', [BackendController::class, 'leasebook'])->name('backend-leasebook');
    Route::get('/ships', [BackendController::class, 'ships'])->name('backend-ships');

    // Admin Get Data
    Route::get('/inboxes', [InboxController::class, 'getInboxes'])->name('get-inbox');
    Route::get('/leasebooks', [LeaseBookController::class, 'getLeasebooks'])->name('get-leasebooks');
    Route::get('/getDocument', [LeaseBookController::class, 'getDocument'])->name('get-document');
    Route::get('/getships', [ShipLeaseController::class, 'getShips'])->name('get-ships');
    Route::get('/getshipingships', [ShipLeaseController::class, 'getShipingShips'])->name('get-shipping-ships');

    // Admin Post Data
    Route::post('/acceptbook', [LeaseBookController::class, 'acceptBook'])->name('accept-book');
    Route::post('/sendbooking', [ShipLeaseController::class, 'sendBooking'])->name('send-booking');

    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
