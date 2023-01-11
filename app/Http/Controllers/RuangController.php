<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\RuangCollection;
use Inertia\Inertia;
use App\Models\Ruang;

class RuangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ruang = new RuangCollection(Ruang::orderByDesc('updated_at')->paginate(6));
        return Inertia::render('Ruangan', [
            'ruang' => $ruang,  
            'pages' => 'ruangan',
            'title' => 'Ruangan',
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
            'kode' => 'required',
            'nama' => 'required',
            'keterangan' => 'required',
        ]);

        $pegawai = new Ruang();
        $pegawai->kode = $validateData['kode'];
        $pegawai->nama = $validateData['nama'];
        $pegawai->keterangan = $validateData['keterangan'];
        $pegawai->save();
        return redirect()->back()->with('message', 'Data ruangan berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Ruang $ruang, Request $request)
    {
        return Inertia::render('EditRuangan', [
            'ruang' => $ruang->find($request->id),
            'pages' => 'ruangan',
            'title' => 'Edit Data Ruang'
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
            'kode' => 'required',
            'nama' => 'required',
            'keterangan' => 'required',
        ]);

        Ruang::where('id', $request->id)->update($validateData);
        return to_route('ruangan')->with('message', 'Data ruang berhasil di update!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $ruang = Ruang::find($request->id);
        $ruang->delete();
        return redirect()->back()->with('message', 'Data ruangan berhasil dihapus'); 
    }
}
