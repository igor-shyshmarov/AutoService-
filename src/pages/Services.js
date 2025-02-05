import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

const Services = () => {
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
            Our Services
          </motion.h1>
          <motion.p className={styles.heroSubtitle}>
            High-quality auto repair & maintenance services.
          </motion.p>
        </motion.div>
      </section>

      {/* Services List Section */}
      <section className={styles.aboutSection}>
        <motion.h2 className={styles.sectionHeading}>
          What We Offer
        </motion.h2>
        <div className={styles.servicesGrid}>
          {[ 
            { title: "Engine Diagnostics", desc: "Accurate diagnostics with advanced equipment.", icon: "🛠️" },
            { title: "Brake Repair", desc: "Complete brake repair & maintenance for safety.", icon: "🚗" },
            { title: "Oil Change", desc: "Regular oil changes for smooth engine operation.", icon: "⛽" },
            { title: "Tire Services", desc: "Tire replacement, alignment & balancing.", icon: "🛞" },
            { title: "Battery Replacement", desc: "Reliable battery diagnostics & replacements.", icon: "🔋" },
            { title: "Air Conditioning Repair", desc: "Full A/C system diagnostics & repair.", icon: "❄️" }
          ].map((service, index) => (
            <motion.div 
              key={index} 
              className={styles.serviceCard} 
              whileHover={{ scale: 1.05 }}
            >
              <span className={styles.serviceIcon}>{service.icon}</span>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
