import { Link } from "@inertiajs/inertia-react"
import AlertNotFound from "../AlertNotFound"

const TableListRuangan = ({ ruang }) => {
    const hapus = () => {
        if (confirm('Apakah anda yakin akan menghapus data?') == false) {
            window.location.href(route('ruangan'))   
        }
    }
    return ( 
        <div>
            <table className="table-auto">
                <thead>
                    <tr className='bg-gray-50'>
                        <th className='px-2 py-4'>Kode Ruangan</th>
                        <th className='px-2 py-4'>Nama Ruangan</th>
                        <th className='px-2 py-4'>Keterangan</th>
                        <th className='px-2 py-4'>Aksi</th>
                    </tr>
                </thead>
                {ruang && ruang.length > 0 ? ruang.map((ruang, i) => {
                    return (
                        <tbody key={i}>
                            <tr className='border-b border-slate-300'>
                                <td className='px-2 py-4'>{ruang.kode}</td>
                                <td className='px-2 py-4'>{ruang.nama}</td>
                                <td className='px-2 py-4'>{ruang.keterangan}</td>
                                <td className='flex justify-center mt-4'>
                                    <div className="btn btn-xs bg-teal-500 border-0 mr-2 hover:bg-teal-300">
                                        <Link href={route('edit.ruangan')} as='button' method='get' data={{ id: ruang.id }}>Edit</Link>
                                    </div>
                                    <div className="btn btn-xs bg-red-400 border-0 mr-2 hover:bg-red-300">
                                        <Link href={route('delete.ruangan')} as='button' method='post' data={{ id: ruang.id }} onClick={hapus}>Hapus</Link>
                                    </div>
                                </td> 
                            </tr>
                        </tbody>
                    )
                }) :
                    <> <AlertNotFound /> </>}
            </table>
        </div>
    )
}

export default TableListRuangan