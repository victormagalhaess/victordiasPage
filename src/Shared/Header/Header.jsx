import React from 'react'
import Moon from '../../Assets/images/moon.png'
import styles from './styles.module.scss'

const Header = () => {
    return(
    <header className={styles.header}>
        <div className={styles.leftContent}>
            <a href="/" className={styles.pageLink}>VICTOR MAGALHÃES</a>
        </div>
        <img alt="white full moon" src={Moon} className={styles.moonPicture}/>
        <div className={styles.rightContent}>
            <a className={styles.pageLink} href="/">ABOUT</a>
            <a className={styles.pageLink} href="/">CONTACT</a>
        </div>
    </header>
    )
}

export default Header;