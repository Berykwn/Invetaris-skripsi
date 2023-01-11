import { Link } from "@inertiajs/inertia-react"
import AlertNotFound from "../AlertNotFound"

const TableListPegawai = ({ pegawai }) => {
    const hapus = () => {
        if (confirm('Apakah anda yakin akan menghapus data?') == false) {
            window.location.href(route('pegawai'))
        }
    }
    return (
        <table className="table-auto">
            <thead>
                <tr className='bg-gray-100'>
                    <th className='px-2 py-4'>Nip</th>
                    <th>Nama</th>
                    <th>Status</th> 
                    <th>Alamat</th>
                    <th>Nohp</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            {pegawai && pegawai.length > 0 ? pegawai.map((pegawai, i) => {
                return (
                    <tbody key={i}>
                        <tr className='border-b border-slate-300'>
                            <td className='px-2 py-4'>{pegawai.nip}</td>
                            <td>{pegawai.nama}</td>
                            <td>{pegawai.status}</td>
                            <td>{pegawai.alamat}</td>
                            <td>{pegawai.nohp}</td>
                            <td className='flex justify-center mt-4'>
                                <div className="btn btn-xs bg-teal-500 border-0 mr-2 hover:bg-teal-300">
                                    <Link href={route('edit.pegawai')} as='button' method='get' data={{ id: pegawai.id }}>Edit</Link>
                                </div>
                                <div className="btn btn-xs bg-red-400 border-0 mr-2 hover:bg-red-300">
                                    <Link href={route('delete.pegawai')} as='button' method='post' data={{ id: pegawai.id }} onClick={hapus}>Hapus</Link>
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

export default TableListPegawai