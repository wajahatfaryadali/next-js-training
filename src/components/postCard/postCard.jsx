import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"
import smapleImg from '../../assets/pngs/noavatar.png'

const PostCard = ({ post }) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                {/* {post.img &&  */}
                <div className={styles.imgContainer}>
                    {/* <Image src={post.img} alt="" fill className={styles.img} /> */}
                    <Image src={smapleImg} alt="" fill className={styles.img} />
                </div>
                {/* } */}
                <span className={styles.date}>
                    {/* {post.createdAt?.toString().slice(4, 16)} */}
                    12/12/2012
                </span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>
                    {/* {post.title} */}
                    title
                </h1>
                {/* <p className={styles.desc}>{post.body}</p> */}
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dolores?</p>
                {/* <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link> */}
                <Link className={styles.link} href={`/blog/singlePost`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard