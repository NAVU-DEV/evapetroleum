<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInboxRequest;
use App\Http\Requests\UpdateInboxRequest;
use Illuminate\Http\Request;
use App\Models\Inbox;

class InboxController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function getInboxes(Request $request)
    {
        return response()->json(
            Inbox::select('*')
                ->where('name', 'LIKE', '%'.$request->get('find').'%')
                ->orderBy('created_at', 'DESC')
                ->paginate(20)
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInboxRequest $request)
    {
        $input = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'subject' => 'required',
            'message' => 'required',
        ]);

        Inbox::create($input);

        return response()->json(['message' => 'berhasil mengirim pesan']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Inbox $inbox)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Inbox $inbox)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInboxRequest $request, Inbox $inbox)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Inbox $inbox)
    {
        //
    }
}
