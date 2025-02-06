import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

const About = () => {
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
            About Us
          </motion.h1>
          <motion.p className={styles.heroSubtitle}>
            Learn more about our mission, values, and the team behind our success.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className={styles.aboutSection}>
        <motion.h2 className={styles.sectionHeading}>
          Our Mission
        </motion.h2>
        <motion.p className={styles.aboutText}>
          We are committed to providing top-notch automotive services, ensuring safety and performance for every vehicle we handle.
        </motion.p>
      </section>

      {/* Our Team Section */}
      <section className={styles.servicesSection}>
        <motion.h2 className={styles.sectionHeading}>
          Meet Our Team
        </motion.h2>
        <div className={styles.servicesGrid}>
          {[ 
            { name: "John Doe", role: "Founder & Lead Mechanic", icon: "👨‍🔧" },
            { name: "Jane Smith", role: "Customer Relations", icon: "📞" },
            { name: "Mike Johnson", role: "Senior Technician", icon: "🔧" },
            { name: "Emily Davis", role: "Service Advisor", icon: "💼" },
          ].map((member, index) => (
            <motion.div 
              key={index} 
              className={styles.serviceCard} 
              whileHover={{ scale: 1.05 }}
            >
              <span className={styles.serviceIcon}>{member.icon}</span>
              <h3 className={styles.serviceTitle}>{member.name}</h3>
              <p className={styles.serviceDescription}>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
