import React from 'react';
import Moon from 'assets/images/moon.png';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftContent}>
        <a href="/" className={styles.pageLink}>
          VICTOR MAGALHÃES
        </a>
      </div>
      <a href="/">
        <img alt="white full moon" src={Moon} className={styles.moonPicture} />
      </a>
      <div className={styles.rightContent}>
        <a className={styles.pageLink} href="/about">
          ABOUT
        </a>
        <a className={styles.pageLink} href="/contact">
          CONTACT
        </a>
      </div>
    </header>
  );
};

export default Header;
