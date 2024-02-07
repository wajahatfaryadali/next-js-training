import React from 'react'
import NavLink from './navLink/navLink'
import classes from '../navbar.module.css'

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

    const isAdmin = true;
    const isSession = true;

    return (
        <div className={classes.LinksContainer}>
            {links.map((link) =>
                <NavLink link={link} />
            )}
            {isSession ?
                <>
                    {isAdmin &&
                        <NavLink
                            link={{
                                title: 'Admin',
                                path: '/admin'
                            }}
                        />}
                    <button className={classes.Logout}>
                        Logout
                    </button>
                </>
                :
                <NavLink
                    link={{
                        title: 'Login',
                        path: '/login'
                    }}
                />
            }

        </div>
    )
}

export default Links