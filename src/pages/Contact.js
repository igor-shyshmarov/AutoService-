import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

const Contact = () => {
  return (
    <div className={styles.pageContainer}>
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <motion.div 
          className={styles.heroContent} 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <motion.h1 className={styles.heroTitle}>
            Contact Us
          </motion.h1>
          <motion.p className={styles.heroSubtitle}>
            Get in touch with us for inquiries, bookings, or support.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Info Section */}
      <section className={styles.aboutSection}>
        <motion.h2 className={styles.sectionHeading}>
          Contact Information
        </motion.h2>
        <motion.p className={styles.aboutText}>
          You can reach us through phone, email, or visit our service center.
        </motion.p>
      </section>

      {/* Contact Form Section */}
      <section className={styles.servicesSection}>
        <motion.h2 className={styles.sectionHeading}>
          Send Us a Message
        </motion.h2>
        <motion.form className={styles.contactForm} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <input type="text" placeholder="Your Name" className={styles.inputField} required />
          <input type="email" placeholder="Your Email" className={styles.inputField} required />
          <textarea placeholder="Your Message" className={styles.textArea} required></textarea>
          <motion.button type="submit" className={styles.heroButton} whileHover={{ scale: 1.1 }}>
            Submit
          </motion.button>
        </motion.form>
      </section>
    </div>
  );
};

export default Contact;
