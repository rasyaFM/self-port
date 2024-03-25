import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
        <div className="nav items-center w-max bg-base-100">
            <div className="navtitle flex-1 ml-12">
                <Link href='/'>"L" Portfolio</Link>
            </div>
            {/* Butuh Perbaikan Bug Dropdown */}
            <div className="flex-none">
                <ul className="menu menu-horizontal items-center gap-2">
                    <li>
                        <details>
                        <summary>
                            Projects
                        </summary>
                        <ul className="p-2 bg-base-100 rounded-t-none">
                            <li><Link href='/design'>Design</Link></li>
                            <li><Link href='/photo'>Photo</Link></li>
                            <li><Link href='/video'>Video Production</Link></li>
                        </ul>
                        </details>
                    </li>
                    <li className='text-2xl mr-2'> | </li>
                    <li>
                        <Link href="/myCV" className="btn btn-ghost btn-circle w-max mr-3 shadow hover:ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src='/profile.jpg' className="w-[45px] rounded-full" alt='PP'/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}
