import React from 'react';

import Header from 'shared/header';
import Footer from 'shared/footer';
import { getBirthday } from 'utils';

import profilePic from 'assets/images/profile.png';
import styles from './styles.module.scss';

const About = () => {
  return (
    <div>
      <Header />
      <div className={styles.aboutContainer}>
        <img className={styles.profilePic} src={profilePic} alt="Victor Magalhães" />
        <span>My name is Victor Hugo Faria Dias Magalhães (he/him). </span> <br />
        <span>I'm from Belo Horizonte and I'm {getBirthday()} years old! ✨ </span>
        <br />
        <span>
          I'm undergraduating on Information Systems @ &nbsp;
          <a href="https://www.ufmg.br" target="_blank" rel="noreferrer">
            <span className={styles.aboutLink}>UFMG</span>
          </a>
          .
        </span>
        <br />
        <span>
          I work as a software engineer @ &nbsp;
          <a href="https://www.olx.com.br/" target="_blank" rel="noreferrer">
            <span className={styles.aboutLink}>OLX</span>
          </a>
          . &nbsp;👨🏻‍💻
        </span>
        <br />
        <span>I'm mainly interested in backend technologies.</span> <br />
        <span>
          My hobbies include enjoying music, creating playlists, playing videogames, watching anime
          and eating pizza!
        </span>
        <br />
        <span>
          My favorite album is &nbsp;
          <a
            href="https://open.spotify.com/album/7q8hYYZgsIQCXibLzwiPll?si=RERfbNHjTyqjuQfC4gptiA&dl_branch=1"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.aboutLink}>Razzmatazz</span>
          </a>
          &nbsp;by&nbsp;
          <a
            href="https://open.spotify.com/artist/0Raaw7kr1Vzat4ZvHzjsJR?si=WMZfVn3mQGq5dqIAyM6xiw&dl_branch=1"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.aboutLink}>IDKHow</span>
          </a>
          .
        </span>
        <br />
        <span>
          My favorite game series is&nbsp;
          <a
            href="https://megamitensei.fandom.com/wiki/Persona_(Series)"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.aboutLink}>SMT Persona</span>
          </a>
          &nbsp;(which inspired a lot of this website design).
        </span>
        <br />
        <span></span>
      </div>
      <Footer />
    </div>
  );
};

export default About;
