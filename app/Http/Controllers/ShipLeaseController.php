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
            'document' => 'required|mimes:pdf,doc,docx|max:2048',
            'ship_id' => 'required',
            'company' => 'required',
            'email' => 'required',
            'document' => 'required'
        ]);

        // File upload
        $document = $request->file('document');
        $destinationPath = 'files/';
        $filename = date('YmdHis') . 'df.' . $document->getClientOriginalExtension();
        $document->move($destinationPath, $filename);

        // Insert data with batch insert
        $data = [
            [
                'ship_id' => $request->input('ship_id'),
                'company' => $request->input('company'),
                'email' => $request->input('email'),
                'document' => $filename,
                'book_status' => 'Booking',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ];
        LeaseBook::insert($data);

        return response()->json(['message' => 'berhasil mengirim booking request']);
    }

    public function addShips(Request $request)
    {
        $input = $request->validate([
            'name' => 'required',
            'built' => 'required',
            'yard' => 'required',
            'lwt' => 'required',
            'rate' => 'required'
        ]);

        $image = $request->file('image');
        $destinationPath = 'images/';
        $fileName = Date('YmdHis') . 'sp.' . $image->getClientOriginalExtension();
        $image->move($destinationPath, $fileName);
        $input['image'] = $fileName;
        $input['status'] = 'Ready';

        ShipLease::create($input);

        return response()->json(['message' => 'berhasil menambahkan kapal baru!']);
    }

    public function deleteShip($data)
    {
        ShipLease::where('id', $data)->delete();

        return response()->json(['message' => 'berhasil menghapus kapal dari database!']);
    }

    public function updateShip(Request $request, $shipId)
    {
        $data = $request->validate([
            'name' => 'required:string',
            'built' => 'required:string',
            'yard' => 'required:string',
            'lwt' => 'required:string',
            'rate' => 'required:string',
            'image' => 'nullable:image'
        ]);
        
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $path = 'images/';
            $filename = date('YmdHis') . '.' . $image->getClientOriginalExtension();
            $image->move($path, $filename);
            $data['image'] = $filename;
        }

        return ShipLease::where('id', $shipId)->update($data);
    }

    public function markAsDone(string $id) {

        LeaseBook::where('ship_id', $id)->update([
            'book_status' => 'Done'
        ]);

        return ShipLease::where('id', $id)->update([
            'status' => 'Ready'
        ]);
    }
}