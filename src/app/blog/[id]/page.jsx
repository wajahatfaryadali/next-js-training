import React, { Suspense } from 'react'
import Image from 'next/image'
import smapleImg from '../../../assets/pngs/noavatar.png'

import classes from './singlePost.module.css'
import PostUser from '@/components/postUser/PostUser';

function SinglePost() {
    return (
        <div className={classes.container}>
            {/* {post.img && ( */}
            <div className={classes.imgContainer}>
                {/* <Image src={post.img} alt="" fill className={classes.img} /> */}
                <Image src={smapleImg} alt="" fill className={classes.img} />
            </div>
            {/* )} */}
            <div className={classes.textContainer}>
                {/* <h1 className={classes.title}>{post.title}</h1> */}
                <h1 className={classes.title}>Lorem.</h1>
                <div className={classes.detail}>
                    {/* {post && ( */}
                    <Suspense fallback={<div>Loading...</div>}>
                        {/* <PostUser userId={post.userId} /> */}
                        <PostUser />
                    </Suspense>
                    {/* )} */}
                    <div className={classes.detailText}>
                        <span className={classes.detailTitle}>Published</span>
                        <span className={classes.detailValue}>
                            {/* {post.createdAt.toString().slice(4, 16)} */}
                            12/12/2012
                        </span>
                    </div>
                </div>
                {/* <div className={classes.content}>{post.desc}</div> */}
                <div className={classes.content}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga, et nihil enim quisquam explicabo rerum assumenda, quas ab sequi nobis. Veritatis error velit sit consectetur aperiam natus voluptatem expedita?</div>
            </div>
        </div>
    );
}

export default SinglePost;
