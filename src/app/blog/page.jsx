import React from 'react'
import PostCard from '@/components/postCard/postCard'
import classes from './blog.module.css'

function Blog() {
  return (
    <div className={classes.container}>
      <div className={classes.post}>
        <PostCard/>
      </div>
    </div>
  )
}

export default Blog