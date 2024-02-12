import React from 'react'
import Links from './links/Links'
import classes from './navbar.module.css'
import Link from 'next/link'
function Navbar() {
    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <Link href="/">Logo</Link>
            </div>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar