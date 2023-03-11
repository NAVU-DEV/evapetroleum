<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLeaseBookRequest;
use App\Http\Requests\UpdateLeaseBookRequest;
use Illuminate\Http\Request;
use App\Models\LeaseBook;
use App\Models\ShipLease;

class LeaseBookController extends Controller
{
    public function getLeasebooks(Request $request)
    {
        return response()->json(
            ShipLease::join('lease_books', 'lease_books.ship_id', '=', 'ship_leases.id')
                ->where('book_status', '=', 'Booking')
                ->where(function ($query) use ($request) {
                    $query->where('name', 'LIKE', '%'.$request->get('find').'%')
                        ->orWhere('email', 'LIKE', '%'.$request->get('find').'%');
                })
                ->paginate(15)
        );
    }

    public function acceptBook(Request $request)
    {
        // update ship status
        $ship = LeaseBook::join('ship_leases', 'lease_books.ship_id', '=', 'ship_leases.id')
            ->where('lease_books.ship_id', $request->get('ship_id'))
            ->get();
        if ($ship[0]->status == 'Ready') {
            ShipLease::where('id', $ship[0]->id)->update(['status' => 'Shipping']);

            // update lease book status
            $leasebook = LeaseBook::select('id')->where('id', $request->get('id'))->get();
            LeaseBook::where('id', $leasebook[0]->id)->update(['book_status' => 'Accepted']);

            // reject other booking request on same ship
            ShipLease::join('lease_books', 'ship_leases.id', '=', 'lease_books.ship_id')
                ->where('ship_leases.id', $request->get('ship_id'))
                ->where('lease_books.book_status', 'Booking')
                ->update(['book_status' => 'Rejected']);

            return response()->json(['message' => 'berhasil update data']);
        } else {
            return response()->json(['message' => 'Kapal sudah dipakai']);
        }
    }

    public function getDocument(Request $request)
    {
        return response()->download(public_path('files/' . $request->get('name')));
    }
}
