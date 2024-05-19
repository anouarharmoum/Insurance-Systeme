<?php

namespace App\Http\Controllers;

use App\Models\Statu;
use App\Http\Requests\StoreStatuRequest;
use App\Http\Requests\UpdateStatuRequest;
use App\Models\Client;


class StatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Fetch all statuses with their associated clients
        $query= Statu::with('client');

        // Apply the assure filter if present
    if (request()->has("assure")) {
        $query->whereHas('client', function ($q) {
            $q->where("assure", "like", "%" . request("assure") . "%");
        });
    }
        if (request("status")) {
            $query->where("status", request("status"));
        }
        $statuses=$query->paginate(10)->appends(request()->query());;

        // ->onEachSide(1);        
        return inertia('Status/Index', [
            'status' => $statuses,
            'queryParams' => request()->query() ?: null,
            
            ]);
           
    }
    // 'links' => $statuses->links()->toArray(),

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
    public function store(StoreStatuRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Statu $statu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Statu $statu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStatuRequest $request, Statu $statu)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Statu $statu)
    {
        //
    }
}
