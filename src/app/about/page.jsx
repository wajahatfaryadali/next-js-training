import React from 'react'
import Image from 'next/image'
import about from '../../assets/pngs/about.png'
import classes from './about.module.css'

function About() {

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
      <div className={classes.textContainer}>
        <h1 className={classes.titleText}>
          Lorem Ipsum
        </h1>
        <h1 className={classes.heading}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odit!
        </h1>
        <p className={classes.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo excepturi, asperiores nisi maxime pariatur rerum obcaecati? Consequatur neque enim quis delectus suscipit temporibus atque et maxime eum. Deserunt, maxime vero, animi maiores quibusdam, commodi nisi laudantium voluptatibus culpa ad quod.
        </p>
        <div className={classes.statsContainer}>
          {stats.map((stat, i) =>
            <div key={i}>
              <h1 className={classes.count}>
                {stat.count}
              </h1>
              <h2 className={classes.title}>
                {stat.title}
              </h2>
            </div>
          )}
        </div>
      </div>
      <div className={classes.imgContainer}>
        <Image src={about} alt="hero-image" className={classes.heroImg} />
      </div>
    </main>
  )
}

export default About