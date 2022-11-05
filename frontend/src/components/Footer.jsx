import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>Copyright &copy; Tesseract</li>
        <li>
          <a
            href='https://github.com/The-Estonian'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contacts
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
