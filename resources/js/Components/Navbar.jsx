import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import ApplicationLogo from '@/Components/ApplicationLogo';

const Navbar = ({ user }) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <ApplicationLogo className="w-10 h-12 fill-current text-gray-500 ml-2" />
                    <Link className='btn btn-ghost hover:bg-white normal-case text-xl' href={route('adminDashboard')} as="button">
                        Dikbud Kab.Lahat</Link>
                </div>
                <div className="flex-none gap-2">
                    <h2 className='font-semibold text-base text-md hidden lg:inline-block'>{user.name}</h2>
                    <div className="dropdown dropdown-end hidden lg:inline-block">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <>
                                <li><a href="#" method="post" as="button">Dashboard</a></li>
                                <li><Link href={route('logout')} method="post" as="button">Logout</Link></li>
                            </>
                        </ul>
                    </div>
                    <div className="drawer-content flex flex-col items-center justify-center">
                        <label htmlFor="my-drawer-2" className="btn btn-link drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar