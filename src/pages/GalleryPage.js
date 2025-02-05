import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/GalleryPage.module.css';

const GalleryPage = () => {
  return (
    <div className={styles.galleryContainer}>
      <motion.h1 className={styles.galleryTitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        My Photography Gallery
      </motion.h1>

      <div className={styles.imageGrid}>
        <motion.img src="image1.jpg" alt="Gallery 1" className={styles.galleryImage} />
        <motion.img src="image2.jpg" alt="Gallery 2" className={styles.galleryImage} />
        <motion.img src="image3.jpg" alt="Gallery 3" className={styles.galleryImage} />
      </div>

      <motion.div className={styles.description} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>About the Gallery</h2>
        <p>Explore my work, capturing moments from nature to events. Each image tells a story.</p>
      </motion.div>
    </div>
  );
};

export default GalleryPage;
