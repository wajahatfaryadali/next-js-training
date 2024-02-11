import Image from "next/image";
import classes from "./page.module.css";
import heroGif from '../assets/gifs/hero.gif'
import brands from '../assets/pngs/brands.png'

export default function Home() {
  return (
    <main className={classes.mainContainer}>
      <div className={classes.textContainer}>
        <h1 className={classes.heading}>
          Lorems ipsums dolors.
        </h1>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit perspiciatis asperiores facilis delectus libero!
        </p>
        <div className={classes.btnContainer}>
          <button className={classes.btn}>
            Learn More
          </button>
          <button className={classes.btn}>
            Contact
          </button>
        </div>
        <div>
          <Image src={brands} alt={brands} className={classes.brands} />
        </div>
      </div>
      <div className={classes.imgContainer}>
        <Image src={heroGif} alt="hero-image" className={classes.heroImg} />

      </div>
    </main>
  );
}
