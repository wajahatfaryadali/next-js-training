import React from 'react'
import Image from 'next/image'
import contact from '../../assets/pngs/contact.png'
import classes from './contact.module.css'

function Contact() {

  const stats = [
    {
      title: 'Year of Experience',
      count: '10 k+'
    },
    {
      title: 'Services and Plugins',
      count: '101 k+'
    },
    {
      title: 'Happy clients',
      count: '102 k+'
    }
  ]

  return (
    <main className={classes.mainContainer}>
      <div className={classes.imgContainer}>
        <Image src={contact} alt="hero-image" className={classes.heroImg} />
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