import { Inertia } from "@inertiajs/inertia"
import React, { useState } from "react"

const TambahInventarisModal = ({ validateError, isNotif }) => {
    const [nama, setNama] = useState('')
    const [kondisi, setKondisi] = useState('')
    const [keterangan, setKeterangan] = useState('')
    const [jumlah, setJumlah] = useState('')
    const [kode, setKode] = useState('')

    const handleSubmit = () => {
        const data = {
            nama, kondisi, keterangan, jumlah, kode
        }
        Inertia.post('/adminDashboard/tambahinventaris', data)
        setNama('')
        setKondisi('')
        setKeterangan('')
        setJumlah('')
        setKode('')
    }
    return (
        <div>
            <input type="checkbox" id="tambahInventaris" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="tambahInventaris" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Form tambah data barang inventaris</h3>
                    <p className="py-4">Tekan tombol <span className="font-bold"> X </span>pojok kanan atas untuk keluar form dan <br /> Pastikan anda mengisi semua data dengan benar!!!</p>
                    {isNotif ?
                        <div className="alert alert-success shadow-sm rounded-md mt-1 mb-3 border-0">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 text-slate-50" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className='text-base text-slate-50'>{isNotif}</span>
                            </div>
                        </div> : <></>}
                    <div className="form-control">
                        <input type="text" placeholder="Nama barang" className="input input-bordered w-full mt-2" onChange={(nama) => setNama(nama.target.value)} value={nama} />
                        {validateError.nama && <span className="text-base text-red-600">{validateError.nama}</span>}
                        <input type="text" placeholder="Kondisi barang" className="input input-bordered w-full mt-2" onChange={(kondisi) => setKondisi(kondisi.target.value)} value={kondisi} />
                        {validateError.kondisi && <span className="text-base text-red-600">{validateError.kondisi}</span>}
                        <input type="text" placeholder="Keterangan" className="input input-bordered w-full mt-2" onChange={(keterangan) => setKeterangan(keterangan.target.value)} value={keterangan} />
                        {validateError.keterangan && <span className="text-base text-red-600">{validateError.keterangan}</span>}
                        <input type="text" placeholder="Jumlah barang" className="input input-bordered w-full mt-2" onChange={(jumlah) => setJumlah(jumlah.target.value)} value={jumlah} />
                        {validateError.jumlah && <span className="text-base text-red-600">{validateError.jumlah}</span>}
                        <input type="text" placeholder="Kode barang" className="input input-bordered w-full mt-2" onChange={(kode) => setKode(kode.target.value)} value={kode} />
                        {validateError.kode && <span className="text-base text-red-600">{validateError.kode}</span>}

                        
                    </div>
                    <div className="flex justify-end">
                        <button className="text-base font-semibold text-white bg-indigo-500 py-3 px-4 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out mt-3" onClick={() => handleSubmit()}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TambahInventarisModal