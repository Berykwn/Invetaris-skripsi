import { Inertia } from "@inertiajs/inertia"
import React, { useState } from "react"

const TambahPegawaiModal = ({ validateError, isNotif }) => {
    const [nip, setNip] = useState('')
    const [nama, setNama] = useState('')
    const [status, setStatus] = useState('')
    const [alamat, setAlamat] = useState('')
    const [nohp, setNohp] = useState('')

    const handleSubmit = () => {
        const data = {
            nip, nama, status, alamat, nohp
        }
        Inertia.post('/adminDashboard/tambahpegawai', data)
        setNip('')
        setNama('')
        setStatus('')
        setAlamat('')
        setNohp('')
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Form Tambah Data Pegawai</h3>
                    <p className="py-4">Tekan tombol <span className="font-bold"> X </span>pojok kanan atas untuk keluar form dan <br /> Pastikan anda mengisi semua data dengan benar!!!</p>
                    {isNotif ?
                        <div className="alert alert-success shadow-sm rounded-md mt-1 mb-3 border-0">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 text-slate-50" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className='text-base text-slate-50'>{isNotif}</span>
                            </div>
                        </div> : <></>}
                    <div className="form-control">
                        <input type="text" placeholder="NIP" className="input input-bordered w-full" onChange={(nip) => setNip(nip.target.value)} value={nip} />
                        {validateError.nip && <span className="text-base text-red-600">{validateError.nip}</span>}
                        <input type="text" placeholder="Nama" className="input input-bordered w-full mt-2" onChange={(nama) => setNama(nama.target.value)} value={nama} />
                        {validateError.nama && <span className="text-base text-red-600">{validateError.nama}</span>}
                        <input type="text" placeholder="Status" className="input input-bordered w-full mt-2" onChange={(status) => setStatus(status.target.value)} value={status} />
                        {validateError.status && <span className="text-base text-red-600">{validateError.status}</span>}
                        <input type="text" placeholder="Alamat" className="input input-bordered w-full mt-2" onChange={(alamat) => setAlamat(alamat.target.value)} value={alamat} />
                        {validateError.alamat && <span className="text-base text-red-600">{validateError.alamat}</span>}
                        <input type="text" placeholder="No Hp" className="input input-bordered w-full mt-2" onChange={(nohp) => setNohp(nohp.target.value)} value={nohp} />
                        {validateError.nohp && <span className="text-base text-red-600">{validateError.nohp}</span>}
                    </div>
                    <div className="flex justify-end">
                        <button className="text-base font-semibold text-white bg-indigo-500 py-3 px-4 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out mt-3" onClick={() => handleSubmit()}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default TambahPegawaiModal