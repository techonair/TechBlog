import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';

const Blog = () => {
  return <div className={styles.container}>
        <main className={styles.main}>
    <div className={styles.blogItem}>
      <Link href={'/blogpost/learn-coding'}>
      <h3>Hi, my name is Bhanu Pratap</h3></Link>
      <p>I am looking to get good practical experience in web development.</p>
    </div>
    <div className="blogItem">
      <h3>Hi, my name is Bhanu Pratap</h3>
      <p>I am looking to get good practical experience in web development.</p>
    </div>
    <div className="blogItem">
      <h3>Hi, my name is Bhanu Pratap</h3>
      <p>I am looking to get good practical experience in web development.</p>
    </div>
    </main>
    </div>
}

export default Blog