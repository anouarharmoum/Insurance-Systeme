<?php

namespace App\Http\Controllers;

use App\Models\Duree;
use App\Http\Requests\StoreDureeRequest;
use App\Http\Requests\UpdateDureeRequest;
use Carbon\Carbon;

class DureeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query=Duree::with('client');
        

        if (request()->has("assure")) {
            $query->whereHas('client', function ($q) {
                $q->where("assure", "like", "%" . request("assure") . "%");
            });
        }
        // Filter by date range
        if (request('start_date') && request('end_date')) {
            $startDate = Carbon::parse(request('start_date'))->startOfDay();
            $endDate = Carbon::parse(request('end_date'))->endOfDay();
    
            $query->whereHas('client', function ($query) use ($startDate, $endDate) {
                $query->whereDate('ended_at', '>=', $startDate)
                      ->whereDate('ended_at', '<=', $endDate);
            });
        }
    


    $durees=$query
    ->paginate(10)
    ->onEachside(1);
        
        return Inertia('Duree/Index',[
            'durees'=> $durees,
            'queryParams' => request()->query() ?: null,
        ]);
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
    public function store(StoreDureeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Duree $duree)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Duree $duree)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDureeRequest $request, Duree $duree)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Duree $duree)
    {
        //
    }
}
