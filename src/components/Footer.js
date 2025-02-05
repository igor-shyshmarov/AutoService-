import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h3>About Our Website</h3>
        <p>Our website offers a wide range of auto repair and maintenance services. We guarantee high-quality service and professionalism to ensure the reliability and longevity of your vehicle.</p>
        <div className={styles.contactInfo}>
          <p>Email: contact@auto-service.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className={styles.socialMedia}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Auto Service. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
