import { Link } from "@inertiajs/inertia-react"

const BreadEditPages = ({title, pages}) => {
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                <li><Link href={route('adminDashboard')}>Dashboard</Link></li>
                <li><Link href={route(pages)} className='capitalize'>{pages}</Link></li>
                <li>{title}</li>
            </ul>
        </div>
    )
}

export default BreadEditPages