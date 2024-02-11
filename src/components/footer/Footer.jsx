import React from 'react'
import classes from './footer.module.css'
function Footer() {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.logo}>
        Logo
      </div>
      <div className={classes.text}>
        Lorem, ipsum.
      </div>
    </div>
  )
}

export default Footer