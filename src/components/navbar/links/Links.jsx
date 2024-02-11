'use client'
import React, { useState } from 'react'
import NavLink from './navLink/navLink'
import classes from '../navbar.module.css'
import ConditionalLinks from './navLink/conditionalLinks';
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

import { links } from '../config';
import MobileMenu from './mobileMenu/MobileMenu';

function Links() {

    const isAdmin = true;
    const isSession = true;

    const [open, setOpen] = useState(false);

    const hadnleNavClick = (e) => {
        alert(e)
    }

    return (
        <div>
            <div className={classes.LinksContainer}>
                {links.map((link, i) =>
                    <NavLink link={link} key={i} />
                )}
                <ConditionalLinks isSession={isSession} isAdmin={isAdmin} />
            </div>
            <div className={classes.LinksContainerM}>
                {open ?
                    <MdOutlineClose
                        className={`${classes.CloseIcon} cursor-pointer`}
                        onClick={() => setOpen(false)}
                    />
                    :
                    <MdMenu
                        className={`${classes.MenuIcon} cursor-pointer`}
                        onClick={() => setOpen(true)}
                    />
                }
                {open &&
                    <MobileMenu
                        hadnleNavClick={hadnleNavClick}
                        isSession={isSession}
                        isAdmin={isAdmin}
                        setOpen={setOpen}
                    />
                }
            </div>
        </div>
    )
}

export default Links