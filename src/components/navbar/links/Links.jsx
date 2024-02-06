import Link from 'next/link'
import React from 'react'

function Links() {

    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
        // {
        //     title: 'Login',
        //     path: '/auth/login'
        // },
        // {
        //     title: 'Sign Up',
        //     path: '/auth/signUp'
        // },
    ]

    return (
        <div>
            {links.map((link, i) =>
                <Link href={link.path} key={i}>{link.title}</Link>
            )}
        </div>
    )
}

export default Links