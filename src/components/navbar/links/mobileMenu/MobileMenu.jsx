"use client"
import React from 'react'
import { links } from '../../config'
import classes from '../../navbar.module.css'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import ConditionalLinks from '../navLink/conditionalLinks';

function MobileMenu(props) {
    const { isSession, isAdmin, hadnleNavClick, setOpen } = props;
    const pathName = usePathname();
    return (
        <div>
            <div className={classes.MenuListContainerM}>
                {links.map((link, i) =>
                    <Link key={i} href={link.path} className={`${classes.Link} ${pathName === link.path && classes.ActiveLink}`} onClick={() => setOpen(false)}>
                        {link.title}
                    </Link>
                )}
                <ConditionalLinks isSession={isSession} isAdmin={isAdmin} hadnleNavClick={hadnleNavClick} />
            </div>
        </div>
    )
}

export default MobileMenu