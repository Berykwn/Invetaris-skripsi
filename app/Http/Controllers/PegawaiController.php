<?php

namespace App\Http\Controllers;

use App\Http\Resources\PegawaiCollection;
use App\Models\Pegawai;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PegawaiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pegawai = new PegawaiCollection(Pegawai::orderByDesc('updated_at')->paginate(6));
        return Inertia::render('Pegawai', [
            'pegawai' => $pegawai,       
            'pages' => 'Pegawai',
            'title' => 'Pegawai',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
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
            'nip' => 'required|numeric',
            'nama' => 'required',
            'status' => 'required',
            'alamat' => 'required',
            'nohp' => 'required|numeric'
        ]);

        $pegawai = new Pegawai();
        $pegawai->nip = $validateData['nip'];
        $pegawai->nama = $validateData['nama'];
        $pegawai->status = $validateData['status'];
        $pegawai->alamat = $validateData['alamat'];
        $pegawai->nohp = $validateData['nohp'];
        $pegawai->save();
        return redirect()->back()->with('message', 'Data pegawai berhasil ditambahkan');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Pegawai $pegawai)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Pegawai $pegawai, Request $request)
    {
        return Inertia::render('EditPegawai', [
            'pegawai' => $pegawai->find($request->id),
            'pages' => 'Pegawai',
            'title' => 'Edit Data Pegawai'
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
            'nip' => 'required|numeric',
            'nama' => 'required',
            'status' => 'required',
            'alamat' => 'required',
            'nohp' => 'required|numeric'
        ]);

        Pegawai::where('id', $request->id)->update($validateData);
        return to_route('Pegawai')->with('message', 'Data pegawai berhasil di update!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $pegawai = Pegawai::find($request->id);
        $pegawai->delete();
        return redirect()->back()->with('message', 'Data pegawai berhasil dihapus'); 
    }
}
