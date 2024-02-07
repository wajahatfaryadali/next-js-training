import React from 'react'
import Links from './links/Links'
import classes from './navbar.module.css'
function Navbar() {
    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                Logo
            </div>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar