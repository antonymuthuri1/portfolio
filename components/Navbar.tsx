'use client'

import Link from 'next/link';

export default function Navbar() {

    return (
    <nav className='flex justify-center fixed top-0 left-0 w-full bg-background shadow-md z-50 p-4'>
        <ul className='flex flex-row items-center gap-6'>
            <li><Link href='/'>
                Home
            </Link></li>

            <li><Link href='/projects'>
                Solutions We’ve Built
            </Link></li>
            
            <li><Link href='/about'>
                About
            </Link></li>
            
            <li><Link href='/contact'>
                Contact
            </Link></li>

            {/* <div className='ml-20 '>
                {user && user.email === 'admin@example.com' && (
                    <Link href="/admin" className="text-white">Admin Panel</Link>
                )}
                {user ? (
                    <button onClick={logout} className="text-white">Logout</button>
                ) : (
                    <Link href="/login_signup" className="text-orange-400 ">Login</Link>
                )}
            </div> */}
        </ul>
    </nav>
    );
}
