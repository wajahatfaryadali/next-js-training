'use client'
import React from 'react'
import Image from 'next/image'
import contact from '../../assets/pngs/contact.png'
import classes from './contact.module.css'

function Contact() {

  console.log('console working here')
  return (
    <main className={classes.mainContainer}>
      <div className={classes.imgContainer}>
        <Image src={contact} alt="hero-image" className={classes.heroImg} priority={true} />
      </div>
      <div className={classes.formContainer}>
        <form action="" className={classes.form}>
          <input type="text" id="name" name="name" placeholder='Name and Surename' />
          <input type="email" id="email" name="email" placeholder='Email address' />
          <input type="text" id="phone" name="phone" placeholder='Phone number (optional)' />
          <textarea
            name=''
            id=''
            rows={10}
            cols={30}
            placeholder='Message'
          />
          <button type='submit' className={classes.submitBtn}>Submit</button>
        </form>
      </div>
    </main>
  )
}

export default Contact