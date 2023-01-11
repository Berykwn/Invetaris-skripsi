import { Link } from "@inertiajs/inertia-react"

const Breadcrumbs = ({title}) => {
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                <li><Link href={route('adminDashboard')}>Dashboard</Link></li>
                <li>{title}</li>
            </ul>
        </div>
    )
}

export default Breadcrumbs