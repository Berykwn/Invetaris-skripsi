import { useState, useEffect } from 'react';
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
                    <div className="px-2 lg:px-0">
                        <div className="card lg:card-side xs:card-side md:card-side bg-base-100 shadow-md rounded-none w-4xl">
                            <figure><img width='480px' height='480px' src="https://placeimg.com/400/400/nature" alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Detail Barang Inventaris</h2>
                                <div className="py-3">
                                    <p className='font-semibold text-xl'>{props.inventaris.nama}</p>
                                    <p>Kondisi : {props.inventaris.kondisi}</p>
                                    <p>Kode barang : {props.inventaris.kode}</p>
                                    <p>Jumlah : {props.inventaris.jumlah}</p>
                                    <p>Keterangan : {props.inventaris.keterangan}</p>
                                </div>

                                <div className="card-actions justify-start">
                                    <div className='text-base font-semibold text-white bg-teal-500 py-3 px-4 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out mb-3'>
                                        <Link href={route('edit.inventaris')} as='button' method='get' data={{ id: props.inventaris.id }}>edit</Link>
                                    </div>
                                    <Link href={route('inventaris')} className="text-base font-semibold text-white bg-slate-500 py-3 px-4 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out mb-3">Kembali</Link>
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