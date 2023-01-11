import react, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Admin/Sidebar';
import Footer from '@/Components/Admin/Footer';
import BreadEditPages from '@/Components/Breadcrumbs/BreadEditPages';

const EditInventaris = (props) => {
    const [nama, setNama] = useState('')
    const [kondisi, setKondisi] = useState('')
    const [keterangan, setKeterangan] = useState('')
    const [jumlah, setJumlah] = useState('')
    const [kode, setKode] = useState('')

    useEffect(() => {
        setNama(props.inventaris.nama)
        setKondisi(props.inventaris.kondisi)
        setKeterangan(props.inventaris.keterangan)
        setJumlah(props.inventaris.jumlah)
        setKode(props.inventaris.kode)
    }, [])

    const handleSubmit = () => {
        const data = {
            id: props.inventaris.id, nama, kondisi, keterangan, jumlah, kode
        }
        Inertia.post('/adminDashboard/updateinventaris', data)
        setNama('')
        setKondisi('')
        setKeterangan('')
        setJumlah('')
        setKode('')
    }
    return (
        <div className='min-h-screen bg-slate-50'>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex">
                <div><Sidebar pages={props.pages}/></div>
                <div className='lg:px-4 md:px-2 py-3'>
                    <div className="ml-2 lg:ml-0 md:ml-0">
                        <BreadEditPages title={props.title} pages={props.pages} />
                    </div>
                    <div className="w-full lg:w-[840px] bg-white shadow-md mb-4 absolute lg:relative md:relative">
                        <div className="px-4 py-2">
                            <h3 className="text-lg font-bold mb-2 mt-2">Form Edit Data Inventaris</h3>
                            <div className="lg:flex lg:flex-wrap md:flex md:flex-wrap">
                                <div className="mb-4 mr-4">
                                    <label className="block text-gray-500 text-sm font-bold mb-2">
                                        Nama Barang
                                    </label>
                                    <input className="shadow-sm appearance-none border border-slate-400 rounded-lg lg:w-96 md:w-[760px] w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(nama) => setNama(nama.target.value)} defaultValue={props.inventaris.nama} />
                                    {props.errors.nama && <span className="text-base text-red-600 block">{props.errors.nama}</span>}
                                </div>
                                <div className="mb-4 mr-4">
                                    <label className="block text-gray-500 text-sm font-bold mb-2">
                                        Kondisi barang
                                    </label>
                                    <input className="shadow-sm appearance-none border border-slate-400 rounded-lg lg:w-96 md:w-[760px] w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(kondisi) => setKondisi(kondisi.target.value)} type="text" defaultValue={props.inventaris.kondisi} />
                                    {props.errors.kondisi && <span className="text-base text-red-600 block">{props.errors.kondisi}</span>}
                                </div>
                                <div className="mb-4 mr-4">
                                    <label className="block text-gray-500 text-sm font-bold mb-2">
                                        Keterangan
                                    </label>
                                    <input className="shadow-sm appearance-none border border-slate-400 rounded-lg lg:w-96 md:w-[760px] w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="status" onChange={(keterangan) => setKeterangan(keterangan.target.value)} type="text" defaultValue={props.inventaris.keterangan} />
                                    {props.errors.keterangan && <span className="text-base text-red-600 block">{props.errors.keterangan}</span>}
                                </div>
                                <div className="mb-4 mr-4">
                                    <label className="block text-gray-500 text-sm font-bold mb-2">
                                        Jumlah barang
                                    </label>
                                    <input className="shadow-sm appearance-none border border-slate-400 rounded-lg lg:w-96 md:w-[760px] w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(jumlah) => setJumlah(jumlah.target.value)} defaultValue={props.inventaris.jumlah} />
                                    {props.errors.jumlah && <span className="text-base text-red-600 block">{props.errors.jumlah}</span>}
                                </div>
                                <div className="mb-4 mr-4">
                                    <label className="block text-gray-500 text-sm font-bold mb-2">
                                        Kode inventaris
                                    </label>
                                    <input className="shadow-sm appearance-none border border-slate-400 rounded-lg lg:w-96 md:w-[760px] w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(kode) => setKode(kode.target.value)} defaultValue={props.inventaris.kode} />
                                    {props.errors.kode && <span className="text-base text-red-600 block">{props.errors.kode}</span>}
                                </div>

                                <div className="flex flex-wrap mt-7">
                                    <button className="btn bg-indigo-500 border-0 mr-2 hover:bg-indigo-400" onClick={() => handleSubmit()}>Update</button>
                                    <Link href={route('inventaris')} className="btn bg-slate-500 border-0 mr-2 hover:bg-slate-400">Kembali</Link>
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

export default EditInventaris