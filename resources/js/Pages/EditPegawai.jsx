import { Head, Link } from '@inertiajs/inertia-react';
import { useState, useEffect } from 'react';
import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Admin/Sidebar';
import Footer from '@/Components/Admin/Footer';
import { Inertia } from '@inertiajs/inertia';
import BreadEditPages from '@/Components/Breadcrumbs/BreadEditPages';

const EditPegawai = (props) => {
    const [nip, setNip] = useState('')
    const [nama, setNama] = useState('')
    const [status, setStatus] = useState('')
    const [alamat, setAlamat] = useState('')
    const [nohp, setNohp] = useState('')

    useEffect(() => {
        setNip(props.pegawai.nip)
        setNama(props.pegawai.nama)
        setStatus(props.pegawai.status)
        setAlamat(props.pegawai.alamat)
        setNohp(props.pegawai.nohp)
    }, [])

    const handleSubmit = () => {
        const data = {
            id: props.pegawai.id, nip, nama, status, alamat, nohp
        }
        Inertia.post('/adminDashboard/updatepegawai', data)
        setNip('')
        setNama('')
        setStatus('')
        setAlamat('')
        setNohp('')
    }

    return (
        <div className='min-h-screen bg-slate-50'>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex">
                <div><Sidebar /></div>
                <div className='lg:px-4 md:px-2 py-3'>
                    <div className="ml-2 lg:ml-0 md:ml-0">
                        <BreadEditPages title={props.title} pages={props.pages} />
                    </div>
                    <div className="w-full lg:w-[840px] bg-white shadow-md mb-4 absolute lg:relative md:relative">
                        <div className="px-4 py-2">
                            <h3 className="text-lg font-bold mb-2 mt-2">Form Edit Data Pegawai</h3>
                            <div className="lg:flex lg:flex-wrap md:flex md:flex-wrap">
                                <div className="mb-4 mr-4">
                                    <label className="block text-gray-500 text-sm font-bold mb-2">
                                        Nip
                                    </label>
                                    <input className="shadow-sm appearance-none border border-slate-400 rounded-lg lg:w-96 md:w-[760px] w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(nip) => setNip(nip.target.value)} defaultValue={props.pegawai.nip} />
                                    {props.errors.nip && <span className="text-base text-red-600 block">{props.errors.nip}</span>}
                                </div>
                                <div className="mb-4 mr-4">
                                    <label className="block text-gray-500 text-sm font-bold mb-2">
                                        Nama
                                    </label>
                                    <input className="shadow-sm appearance-none border border-slate-400 rounded-lg lg:w-96 md:w-[760px] w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(nama) => setNama(nama.target.value)} defaultValue={props.pegawai.nama} />
                                    {props.errors.nama && <span className="text-base text-red-600 block">{props.errors.nama}</span>}
                                </div>
                                <div className="mb-4 mr-4">
                                    <label className="block text-gray-500 text-sm font-bold mb-2">
                                        Status
                                    </label>
                                    <input className="shadow-sm appearance-none border border-slate-400 rounded-lg lg:w-96 md:w-[760px] w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="status" type="text" onChange={(status) => setStatus(status.target.value)} defaultValue={props.pegawai.status} />
                                    {props.errors.status && <span className="text-base text-red-600 block">{props.errors.status}</span>}
                                </div>
                                <div className="mb-4 mr-4">
                                    <label className="block text-gray-500 text-sm font-bold mb-2">
                                        Alamat
                                    </label>
                                    <input className="shadow-sm appearance-none border border-slate-400 rounded-lg lg:w-96 md:w-[760px] w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(alamat) => setAlamat(alamat.target.value)} defaultValue={props.pegawai.alamat} />
                                    {props.errors.alamat && <span className="text-base text-red-600 block">{props.errors.alamat}</span>}
                                </div>
                                <div className="mb-4 mr-4">
                                    <label className="block text-gray-500 text-sm font-bold mb-2">
                                        No hp
                                    </label>
                                    <input className="shadow-sm appearance-none border border-slate-400 rounded-lg lg:w-96 md:w-[760px] w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(nohp) => setNohp(nohp.target.value)} defaultValue={props.pegawai.nohp} />
                                    {props.errors.nohp && <span className="text-base text-red-600 block">{props.errors.nohp}</span>}
                                </div>

                                <div className="flex flex-wrap mt-7">
                                    <button className="btn bg-indigo-500 border-0 mr-2 hover:bg-indigo-400" onClick={() => handleSubmit()}>Update</button>
                                    <Link href={route('Pegawai')} className="btn bg-slate-500 border-0 mr-2 hover:bg-slate-400">Kembali</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EditPegawai