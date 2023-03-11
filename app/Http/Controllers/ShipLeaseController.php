<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreShipLeaseRequest;
use App\Http\Requests\UpdateShipLeaseRequest;
use Illuminate\Http\Request;
use App\Models\ShipLease;
use App\Models\LeaseBook;

class ShipLeaseController extends Controller
{
    public function getShips(Request $request)
    {
        return response()->json(
            ShipLease::select('*')
                ->where('status', 'Ready')
                ->where('name', 'LIKE', '%'.$request->get('find').'%')
                ->paginate(10)
        );
    }

    public function getShipingShips() 
    {
        return response()->json(
            ShipLease::join('lease_books', 'lease_books.ship_id', '=', 'ship_leases.id')
                ->where('book_status', 'Accepted')
                ->paginate(10)
        );
    }

    public function sendBooking(Request $request)
    {
        $input = $request->validate([
            'ship_id' => 'required',
            'company' => 'required',
            'email' => 'required',
            'document' => 'required'
        ]);

        // import document to public path 'files/'
        $document = $request->file('document');
        $destinationPath = 'files/';
        $filename = Date('YmdHis') . 'df.' . $document->getClientOriginalExtension();
        $document->move($destinationPath, $filename);
        $input['document'] = $filename;

        // setting booking status
        $input['book_status'] = 'Booking';

        LeaseBook::create($input);

        return response()->json(['message' => 'berhasil mengirim booking request']);
    }
}
