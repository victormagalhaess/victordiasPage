import React from 'react';
import Typist from 'react-typist';
import styles from './styles.module.scss';

const Body = () => {
  return (
    <main className={styles.body}>
      <Typist
        cursor={{
          show: true,
          blink: true,
          element: '_',
          hideWhenDone: true,
          hideWhenDoneDelay: 2500,
        }}
        avgTypingDelay={60}
      >
        <span className={styles.normalText}>
          Hello! <br />
          My name is <br />
          <span className={styles.boldText}>
            Victor Magalhães <br />
          </span>
          I&apos;m a&nbsp;
          <a
            href="https://www.linkedin.com/school/ufmg/"
            rel="noreferrer"
            target="_blank"
            className={styles.profileLink}
          >
            student
          </a>
          ,<br />
          <a
            href="https://open.spotify.com/user/9z6aoedgonrcs7iivryx304hw"
            rel="noreferrer"
            target="_blank"
            className={styles.profileLink}
          >
            music enjoyer&nbsp;
          </a>
          and <br />
          <span className={styles.profileLink}>fulstakc develo</span>
          <Typist.Backspace count={16} delay={200} />
          <a
            href="https://github.com/victormagalhaess"
            rel="noreferrer"
            target="_blank"
            className={styles.profileLink}
          >
            fullstack developer
          </a>
          .&nbsp;
          <Typist.Backspace count={2} delay={1500} />
          !&nbsp;
        </span>
      </Typist>
    </main>
  );
};

export default Body;
