import { Link } from "@inertiajs/inertia-react";

const Paginator = ({ meta }) => {
    const prev = meta.links[0].url
    const next = meta.links[meta.links.length - 1].url
    const current = meta.current_page

    return (
        <div className="btn-group">
            {prev && <Link href={prev} className="btn btn-sm btn-outline border-slate-400 hover:bg-slate-300 hover:border-0 hover:text-slate-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            </Link>}
            <Link className="btn btn-sm btn-outline border-slate-400 hover:bg-slate-300 hover:border-0 hover:text-slate-600">{current}</Link>
            {next && <Link href={next} className="btn btn-sm btn-outline border-slate-400 hover:bg-slate-300 hover:border-0 hover:text-slate-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            </Link>}
        </div>
    )
}

export default Paginator