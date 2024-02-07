"use client"
import Link from 'next/link'
import React from 'react'
import classes from '../../navbar.module.css'
import { usePathname } from 'next/navigation'

function NavLink({ link }) {
  const pathName = usePathname();
  return (
    <Link href={link.path} className={`${classes.Link} ${pathName === link.path && classes.ActiveLink}`}>
      {link.title}
    </Link>
  )
}

export default NavLink