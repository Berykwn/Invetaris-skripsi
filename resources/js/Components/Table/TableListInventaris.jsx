import { Link } from "@inertiajs/inertia-react"
import AlertNotFound from "../AlertNotFound"

const TableListInventaris = ({ inventaris }) => {
    const hapus = () => {
        if (confirm('Apakah anda yakin akan menghapus data?') == false) {
            window.location.href(route('inventaris'))
        }
    }
    return (
            <table className="table-auto">
                <thead>
                    <tr className='bg-gray-100'>
                        <th className='px-3 py-4'>Kode Barang</th>
                        <th>Nama Barang</th>
                        <th>Keterangan</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                {inventaris && inventaris.length > 0 ? inventaris.map((inventaris, i) => {
                    return (
                        <tbody key={i}>
                            <tr className='border-b border-slate-300'>
                                <td className='px-2 py-4'>{inventaris.kode}</td>
                                <td>{inventaris.nama}</td>
                                <td>{inventaris.keterangan}</td>
                                <td className='flex flex-wrap justify-center mt-4'>
                                    <div className="btn btn-xs border-0 mr-2 mt-2 lg:mt-1 bg-teal-500 hover:bg-teal-400">
                                        <Link href={route('edit.inventaris')} as='button' method='get' data={{ id: inventaris.id }}>Edit</Link>
                                    </div>
                                    <div className="btn btn-xs border-0 mr-2 mt-2 lg:mt-1 bg-lime-500 hover:bg-lime-400">
                                        <Link href={route('detail.inventaris')} as='button' method='get' data={{ id: inventaris.id }}>Detail</Link>
                                    </div>
                                    <div className="btn btn-xs border-0 mr-2 mt-2 lg:mt-1 bg-red-500 hover:bg-red-400">
                                        <Link href={route('delete.inventaris')} as='button' method='post' data={{ id: inventaris.id }} onClick={hapus}>Hapus</Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    )
                }) :
                    <> <AlertNotFound /> </>}
            </table>
    )
}

export default TableListInventaris