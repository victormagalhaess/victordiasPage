import React from 'react';
import Header from 'shared/Header';
import styles from './styles.module.scss';

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className={styles.notFoundContainer}>
        <h1 className={styles.errorTitle}>404</h1>
        <h2 className={styles.errorDescription}>Oops! Page not found.</h2>
        <h3 className={styles.errorText}>The page you're looking for is nowhere to be found</h3>
        <span className={styles.errorText}>
          ← <a href="/"> Return to home</a>{' '}
        </span>
      </div>
    </div>
  );
};

export default NotFound;
