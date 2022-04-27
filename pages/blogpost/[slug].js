import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const  slug = () => {
    const router = useRouter();
    const {slug} = router.query;
  return <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr/>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore earum soluta eum provident repellendus vero autem velit quis sunt enim, nisi molestias non tempore quam amet sapiente, debitis blanditiis iusto pariatur maxime quaerat odit et quos? Repellendus, ducimus quam beatae laudantium deserunt quo repudiandae dolor!
        </div>
        </main>
    </div>
}

export default slug