import React, { Suspense } from 'react'
import Image from 'next/image'
import smapleImg from '../../../assets/pngs/noavatar.png'

import classes from './singlePost.module.css'
import PostUser from '@/components/postUser/PostUser';
// import { getSinglePostById } from '@/apis/apis';
import { getMongoSinglePostById } from '@/apis/data';

async function SinglePost({ params }) {

    const { id } = params;
    // const post = await getSinglePostById(id);
    const post = await getMongoSinglePostById(id);

    return (
        <div className={classes.container}>
            {/* {post.img && ( */}
            <div className={classes.imgContainer}>
                <Image src={smapleImg} alt="" className={classes.img} priority={false} />
            </div>
            {/* )} */}
            <div className={classes.textContainer}>
                <h1 className={classes.title}>{post?.title}</h1>
                <div className={classes.detail}>
                    {/* {post && ( */}
                    <Suspense fallback={<div>Loading...</div>}>
                        {/* <PostUser userId={post.userId} /> */}
                        {post?.id &&
                            <PostUser userId={post?.userId} />
                        }
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
                <div className={classes.content}>{post?.body}</div>
            </div>
        </div>
    );
}

export default SinglePost;
