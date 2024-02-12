import React from 'react'
import classes from './footer.module.css'
import Link from 'next/link'
function Footer() {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.logo}>
        <Link href="/">Logo</Link>
      </div>
      <div className={classes.text}>
        Lorem, ipsum.
      </div>
    </div>
  )
}

export default Footer