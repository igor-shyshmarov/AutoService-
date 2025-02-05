import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/" className={styles.logoText}>My Photography</Link>
        </motion.div>
      </div>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.navbar}
      >
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/" className={styles.navLink}>Home</Link></li>
          <li className={styles.navItem}><Link to="/about" className={styles.navLink}>About</Link></li>
          <li className={styles.navItem}><Link to="/portfolio" className={styles.navLink}>Portfolio</Link></li>
          <li className={styles.navItem}><Link to="/contact" className={styles.navLink}>Contact</Link></li>
        </ul>
      </motion.nav>
    </header>
  );
};

export default Header;
