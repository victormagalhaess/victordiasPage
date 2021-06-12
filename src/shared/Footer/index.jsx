import React from 'react';
import SocialMediaLink from '../SocialMediaLink';
import githubLogo from 'assets/images/github.png';
import linkedinLogo from 'assets/images/linkedin.png';
import mailLogo from 'assets/images/mail.png';
import spotifyLogo from 'assets/images/spotify.png';

import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SocialMediaLink href="mailto:hello@victordias.dev" iconSrc={mailLogo} alt="Email" />
      <SocialMediaLink
        href="https://github.com/victormagalhaess"
        iconSrc={githubLogo}
        alt="Github"
      />
      <SocialMediaLink
        href="https://www.linkedin.com/in/victorhugofariadias/"
        iconSrc={linkedinLogo}
        alt="LinkedIn"
      />
      <SocialMediaLink
        href="https://open.spotify.com/user/9z6aoedgonrcs7iivryx304hw"
        iconSrc={spotifyLogo}
        alt="Github"
      />
    </footer>
  );
};

export default Footer;
