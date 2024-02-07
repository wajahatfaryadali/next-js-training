import React from 'react'
import NavLink from './navLink'
import classes from '../../navbar.module.css'
function ConditionalLinks({isSession, isAdmin}) {
    return (
        isSession ?
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
    )
}

export default ConditionalLinks