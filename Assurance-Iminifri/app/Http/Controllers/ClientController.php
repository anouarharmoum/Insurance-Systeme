<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreClientRequest;
use App\Http\Resources\ClientResource;
// use App\Http\Resources\TaskResource;
use App\Models\Client;
use App\Http\Requests\UpdateClientRequest;
use Carbon\Carbon;

// use Illuminate\Support\Facades\Auth;
// use Illuminate\Support\Facades\Storage;
// use Illuminate\Support\Str;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Client::query();

        $sortField =request("sort_field" ,'created_at');
        $sortDirection = request("sort_direction","desc");
        if (request("assure")) {
            $query->where("assure", "like", "%" . request("assure") . "%");
        }
        if (request("Observation")) {
            $query->where("Observation", request("Observation"));
        }



        $clients = $query->orderBy($sortField,$sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia("Client/Index", [
            "clients" => ClientResource::collection($clients),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Client/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClientRequest $request)
    {
        $data = $request->validated();
        $client = Client::create($data);
        // Determine the status based on the rest
        $status = $client->rest == 0 ? 'completed' : 'pending';
        // add the client to the duree table if the condition is true 
        if ($client->ended_at <= now()) {
            $client->duree()->create();
        }
        // Create a new status record associated with the client
        $client->status()->create(['status' => $status]);
        $name = $client->assure;
        return to_route('client.index')->with('success', "Assuré \"$name\" etait creé");
    }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        return inertia('Client/Edit', [
            'client' => $client,
        ]);
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClientRequest $request, Client $client)
    {
        //
        $client->update($request->validated());
        return to_route('client.index')->with('success', "Assuré \"$client->name\" etait modifié");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        $name = $client->assure;
        $client->delete();
        return to_route('client.index')->with('success', "Assuré \"$name\" etait supprimer");
    }
}

