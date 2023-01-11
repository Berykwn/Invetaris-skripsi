import react, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Admin/Sidebar';
import Footer from '@/Components/Admin/Footer';
import BreadEditPages from '@/Components/Breadcrumbs/BreadEditPages';

const EditRuangan = (props) => {
    const [kode, setKode] = useState('')
    const [nama, setNama] = useState('')
    const [keterangan, setKeterangan] = useState('')

    useEffect(() => {
        setKode(props.ruang.kode)
        setNama(props.ruang.nama)
        setKeterangan(props.ruang.keterangan)
    }, [])

    const handleSubmit = () => {
        const data = {
            id: props.ruang.id, kode, nama, keterangan
        }
        Inertia.post('/adminDashboard/updateruangan', data)
        setKode('')
        setNama('')
        setKeterangan('') 
    }
    return (
        <div className='min-h-screen bg-slate-50'>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex">
                <div><Sidebar /></div>
                <div className='lg:px-4 md:px-2 py-3'>
                    <div className="ml-2 lg:ml-0 md:ml-0">
                        <BreadEditPages title={props.title} pages={props.pages}/>
                    </div>
                    <div className="w-full lg:w-[840px] bg-white shadow-md mb-4 absolute lg:relative md:relative">
                        <div className="px-4 py-2">
                            <h3 className="text-lg font-bold mb-2 mt-2">Form Edit Data Pegawai</h3>
                            <div className="lg:flex lg:flex-wrap md:flex md:flex-wrap">
                                <div className="mb-4 mr-4">
                                    <label className="block text-gray-500 text-sm font-bold mb-2">
                                        Kode Ruangan
                                    </label>
                                    <input className="shadow-sm appearance-none border border-slate-400 rounded-lg lg:w-96 md:w-[760px] w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(kode) => setKode(kode.target.value)} defaultValue={props.ruang.kode} />
                                    {props.errors.kode && <span className="text-base text-red-600 block">{props.errors.kode}</span>}
                                </div>
                                <div className="mb-4 mr-4">
                                    <label className="block text-gray-500 text-sm font-bold mb-2">
                                        Nama Ruangan
                                    </label>
                                    <input className="shadow-sm appearance-none border border-slate-400 rounded-lg lg:w-96 md:w-[760px] w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(nama) => setNama(nama.target.value)} defaultValue={props.ruang.nama} />
                                    {props.errors.nama && <span className="text-base text-red-600 block">{props.errors.nama}</span>}
                                </div>
                                <div className="mb-4 mr-4">
                                    <label className="block text-gray-500 text-sm font-bold mb-2">
                                        Keterangan
                                    </label>
                                    <input className="shadow-sm appearance-none border border-slate-400 rounded-lg lg:w-96 md:w-[760px] w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="status" onChange={(keterangan) => setKeterangan(keterangan.target.value)} type="text" defaultValue={props.ruang.keterangan} />
                                    {props.errors.keterangan && <span className="text-base text-red-600 block">{props.errors.keterangan}</span>}
                                </div>

                                <div className="flex flex-wrap mt-7">
                                    <button className="btn bg-indigo-500 border-0 mr-2 hover:bg-indigo-400" onClick={() => handleSubmit()}>Update</button>
                                    <Link href={route('ruangan')} className="btn bg-slate-500 border-0 mr-2 hover:bg-slate-400">Kembali</Link>
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

export default EditRuangan