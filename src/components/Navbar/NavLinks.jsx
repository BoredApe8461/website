import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (
        <>
            <a className="px-4 font-extrabold text-gray-500 hover:text-gray-900" href="https://github.com/w3f/Grants-Program/pull/2080">
                Proposal 
            </a>
            <a className="px-4 font-extrabold text-gray-500 hover:text-gray-900" href="https://regionx.gitbook.io/wiki/">
                Wiki
            </a>
            <a className="px-4 font-extrabold text-gray-500 hover:text-gray-900" href="#team">
                Team
            </a>
            <Link className="text-white bg-gray-900 hover:bg-gray-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/">
                Launch App | Soon
            </Link>
        </>
    )
}

export default NavLinks;