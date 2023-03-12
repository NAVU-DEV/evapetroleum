<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreHomeContentRequest;
use App\Http\Requests\UpdateHomeContentRequest;
use Illuminate\Http\Request;
use App\Models\HomeContent;

class HomeContentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function getHomeContent()
    {
        return response()->json(
            HomeContent::all()
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreHomeContentRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(HomeContent $homeContent)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(HomeContent $homeContent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHomeContentRequest $request, HomeContent $homeContent)
    {
        dd($request->get('homeContent'));
    }

    public function updateContent(Request $request)
    {
        $update = $request->validate([
            'hero_title' => 'required',
            'hero_description' => 'required',
            'left_card_title' => 'required',
            'left_card_description' => 'required',
            'center_card_title' => 'required',
            'center_card_description' => 'required',
            'right_card_title' => 'required',
            'right_card_description' => 'required',
            'about_us' => 'required',
            'email' => 'required',
        ]);

        if ($request->hasFile('left_card_image')) {
            $image = $request->file('left_card_image');
            $destinationPath = './images';
            $file = Date('YmdHis') . 'lci.' . $image->getClientOriginalExtension();
            $image->move($destinationPath, $file);
            $update['left_card_image'] = $file;
        }

        if ($request->hasFile('center_card_image')) {
            $image = $request->file('center_card_image');
            $destinationPath = './images';
            $file = Date('YmdHis') . 'cci.' . $image->getClientOriginalExtension();
            $image->move($destinationPath, $file);
            $update['center_card_image'] = $file;
        }

        if ($request->hasFile('right_card_image')) {
            $image = $request->file('right_card_image');
            $destinationPath = './images';
            $file = Date('YmdHis') . 'rci.' . $image->getClientOriginalExtension();
            $image->move($destinationPath, $file);
            $update['right_card_image'] = $file;
        }

        HomeContent::where('id', 1)->update($update);

        return response()->json(['message' => 'content updated!']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HomeContent $homeContent)
    {
        //
    }
}
