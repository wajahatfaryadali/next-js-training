import React from 'react'
import PostCard from '@/components/postCard/postCard'
import classes from './blog.module.css'
import { getMongoPosts } from '@/apis/data';
// import { getPosts } from '@/apis/apis'

async function Blog() {
  // const posts = await getPosts();
  const posts = await getMongoPosts();
  console.log('total Posts **** ', posts)

  return (
    <div className={classes.container}>
      {posts?.map((post, i) =>
        <div className={classes.post} key={i}>
          <PostCard post={post} />
        </div>
      )}
    </div >
  )
}

export default Blog