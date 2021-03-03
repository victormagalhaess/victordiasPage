import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const SocialMediaLink = ({ href, iconSrc, alt }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      className={styles.socialMediaIcon}
      src={iconSrc}
      alt={alt}
    />
  </a>
);

SocialMediaLink.propTypes = {
  href: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default SocialMediaLink;
