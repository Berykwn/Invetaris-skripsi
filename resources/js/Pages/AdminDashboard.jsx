import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Admin/Sidebar';
import Footer from '@/Components/Admin/Footer';

export default function Dashboard(props) {
    return (
        <div className='min-h-screen bg-slate-50'>
            <Head title={[props.title]} />
            <Navbar user={props.auth.user} />
            <div className="flex">
                <div><Sidebar pages={props.pages}/></div>
                <div className='px-4 py-6'>
                    <div className="w-full bg-white shadow-sm mb-4 px-4 py-6">
                        <h2 className=''>Hallo!! Selamat datang <span className='font-bold text-slate-800'>{props.auth.user.name}</span></h2>
                        <p className='text-base'>Anda dapat mengelolah data inventaris dengan mengklik widget dibawah, atau menu yang ada pada sidebar</p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        <div className="px-4 py-6 bg-white shadow-sm border-t-4 border-indigo-500">
                            <div className="stat-title flex justify-center">Data Barang</div>
                            <div className="stat-value flex justify-center">{props.inventaris}</div>
                            <div className="stat-desc">Saat ini ada <span className='font-semibold text-slate-900'>{props.inventaris}</span> data Barang</div>
                        </div>
                        <div className="px-4 py-6 bg-white shadow-sm border-t-4 border-yellow-500">
                            <div className="stat-title flex justify-center">Data Pegawai</div>
                            <div className="stat-value flex justify-center">{props.pegawai}</div>
                            <div className="stat-desc">Saat ini ada <span className='font-semibold text-slate-900'>{props.pegawai}</span> data Pegawai</div>
                        </div>
                        <div className="px-4 py-6 bg-white shadow-sm border-t-4 border-green-500">
                            <div className="stat-title flex justify-center">Data Ruangan</div>
                            <div className="stat-value flex justify-center">{props.ruang}</div>
                            <div className="stat-desc">Saat ini ada <span className='font-semibold text-slate-900'>{props.ruang}</span> data Ruang</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    );
}
