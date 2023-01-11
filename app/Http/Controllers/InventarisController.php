<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\InventarisCollection;
use Inertia\Inertia;
use App\Models\Inventaris;

class InventarisController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $inventaris = new InventarisCollection(Inventaris::orderByDesc('updated_at')->paginate(6));
        return Inertia::render('Inventaris', [
            'inventaris' => $inventaris,
            'pages' => 'inventaris',
            'title' => 'Inventaris',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'nama' => 'required',
            'kondisi' => 'required',
            'jumlah' => 'required|numeric',
            'keterangan' => 'required',
            'kode' => 'required',
        ]);

        $inventaris = new Inventaris();
        $inventaris->nama = $validateData['nama'];
        $inventaris->kondisi = $validateData['kondisi'];
        $inventaris->jumlah = $validateData['jumlah'];
        $inventaris->kode = $validateData['kode'];
        $inventaris->keterangan = $validateData['keterangan'];
        $inventaris->save();
        return redirect()->back()->with('message', 'Data inventaris berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Inventaris $inventaris, Request $request)
    {
        return Inertia::render('DetailInventaris', [
            'inventaris' => $inventaris->find($request->id),
            'pages' => 'inventaris',
            'title' => 'Detail Data Inventaris'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Inventaris $inventaris, Request $request)
    {
        return Inertia::render('EditInventaris', [
            'inventaris' => $inventaris->find($request->id),
            'pages' => 'inventaris',
            'title' => 'Edit Data Inventaris'
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validateData = $request->validate([
            'nama' => 'required',
            'kondisi' => 'required',
            'jumlah' => 'required|numeric',
            'keterangan' => 'required',
            'kode' => 'required',
        ]);

        Inventaris::where('id', $request->id)->update($validateData);
        return to_route('inventaris')->with('message', 'Data Barang berhasil di update!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $inventaris = Inventaris::find($request->id);
        $inventaris->delete();
        return redirect()->back()->with('message', 'Data inventaris berhasil dihapus'); 
    }
}
