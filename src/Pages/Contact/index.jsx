import React from 'react';
import Header from 'shared/header';
import Footer from 'shared/footer';
import styles from './styles.module.scss';
import clockImg from 'assets/images/clock.png';

const Contact = () => {
  return (
    <div>
      <Header />
      <div className={styles.contactContainer}>
        <div>
          <span className={styles.contactTitle}>Contact me</span> <br />
          <span className={styles.contactSubtitle}>
            You can reach me by any of the following ways:
          </span>
          <br />
          <ul>
            <li>
              <a
                href="https://wa.me/5531998350108?text=Hello%20there!"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.contactLink}>Sending hello on whatsapp</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@victordias.dev?subject=Hello%20There!"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.contactLink}>Sending an old-fashioned email</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/victorhugofariadias/"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.contactLink}>Messaging me on LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://gist.github.com/victormagalhaess/be0527f8048e9e468c20572219ec4367"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.contactLink}>Leaving a comment on my guestbook</span>
              </a>
            </li>
            <li>
              <a href="https://blog.victordias.dev" target="_blank" rel="noreferrer">
                <span className={styles.contactLink}>Leaving a comment on my blog</span>
              </a>
            </li>
          </ul>
        </div>
        <img src={clockImg} alt="persona 3 clock" className={styles.image} />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
