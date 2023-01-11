import { Head, Link } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Admin/Sidebar';
import Footer from '@/Components/Admin/Footer';
import Paginator from '@/Components/Admin/Paginator';
import Breadcrumbs from '@/Components/Breadcrumbs/BreadPages';
import { useState } from 'react';
import TambahRuanganModal from '@/Components/Modals/TambahRuanganModal';
import TableListRuagan from '@/Components/Table/TableListRuangan';
import SuccessMessage from '@/Components/SuccessMessage';

const Ruangan = (props) => {
    let ruang = props.ruang.data
    const [input, setInput] = useState('')
    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }
    if (input.length > 0) {
        ruang = ruang.filter((i) => {
            return i.nama.toLowerCase().match(input)
        });
    }
    // search

    return (
        <div className='min-h-screen bg-slate-50'>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex">
                <div><Sidebar pages={props.pages}/></div>
                <div className='lg:px-4 md:px-2 py-3'>
                    <div className="ml-2 lg:ml-0 md:ml-0">
                        <Breadcrumbs title={props.title}/>
                    </div>
                    <div className="absolute bg-white shadow-md lg:max-w-6xl lg:mr-2">
                        <div className="px-4 py-2">
                            <div className="flex justify-between mt-3">
                                <label htmlFor="tambahRuangan" className="text-base font-semibold text-white bg-indigo-500 py-3 px-4 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out mb-3">Tambah Ruangan</label>
                                <TambahRuanganModal validateError={props.errors} isNotif={props.flash.message} />
                                <div className="form-control">
                                    <div>
                                        <input type="text" placeholder="Cari data pegawai.." className="input input-bordered mb-3 bt-3" onChange={handleChange} value={input} />
                                    </div>
                                </div>
                            </div>
                            {props.flash.message ?
                                <SuccessMessage msg={props.flash.message} /> : <></>
                            }
                            <div className="overflow-x-auto">
                                <TableListRuagan ruang={ruang} />
                            </div>
                            <div className="flex justify-center items-center mb-2 mt-4">
                                <Paginator meta={props.ruang.meta} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    );
}

export default Ruangan
