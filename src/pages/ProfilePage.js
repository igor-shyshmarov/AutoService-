import React from 'react';
import styles from '../styles/ProfilePage.module.css';
import { motion } from 'framer-motion';

const ProfilePage = () => {
  return (
    <div className={styles.profileContainer}>
      {/* Заголовок */}
      <motion.h1 
        className={styles.title} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      {/* Основний контент */}
      <section className={styles.aboutSection}>
        <motion.div
          className={styles.image}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="https://via.placeholder.com/300" alt="Profile" />
        </motion.div>
        
        <motion.div 
          className={styles.info}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Hi, I'm John Doe, a passionate photographer with over 10 years of experience capturing beautiful moments.
            I specialize in portraits, events, and nature photography. My mission is to create timeless images that tell a story.
            I've worked with numerous clients to bring their visions to life, and I am always eager to take on new challenges.
          </p>
        </motion.div>
      </section>

      {/* Мої послуги */}
      <section className={styles.servicesSection}>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My Services
        </motion.h2>
        <div className={styles.services}>
          <motion.div
            className={styles.service}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Event Photography</h3>
            <p>Capturing every special moment at weddings, parties, and corporate events.</p>
          </motion.div>
          <motion.div
            className={styles.service}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Portrait Photography</h3>
            <p>Creating timeless portraits that reflect personality and emotion.</p>
          </motion.div>
          <motion.div
            className={styles.service}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Nature & Landscape Photography</h3>
            <p>Exploring the beauty of nature through a lens, bringing the outdoors to life.</p>
          </motion.div>
        </div>
      </section>

      {/* Портфоліо */}
      <section className={styles.portfolioSection}>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Portfolio Highlights
        </motion.h2>
        <div className={styles.portfolioImages}>
          <img src="https://via.placeholder.com/400" alt="Portfolio 1" />
          <img src="https://via.placeholder.com/400" alt="Portfolio 2" />
          <img src="https://via.placeholder.com/400" alt="Portfolio 3" />
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
