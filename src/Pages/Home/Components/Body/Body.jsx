import React from 'react';
import styles from './styles.module.scss'

const Body = () => {
    return (
        <main className={styles.body}>
            <span className={styles.normalText}>
                Hello! <br/>
                My name is <br/>
                <span className={styles.boldText}>
                    Victor Magalhães <br/>
                </span> 
                I&apos;m a&nbsp;
                <a href="https://www.linkedin.com/school/ufmg/" className={styles.profileLink}>
                    student
                </a>
                ,<br/>
                <a href="https://open.spotify.com/user/9z6aoedgonrcs7iivryx304hw" className={styles.profileLink}>
                    music enjoyer&nbsp;
                </a>
                and <br/>
                <a href="https://github.com/victormagalhaess" className={styles.profileLink}>   
                    fullstack developer
                </a>
                .&nbsp;
            </span>
        </main>
    )
}

export default Body;