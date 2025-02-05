import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

const Home = () => {
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
            Professional Auto Repair & Maintenance
          </motion.h1>
          <motion.p className={styles.heroSubtitle}>
            High-quality service for your vehicle’s best performance
          </motion.p>
          <motion.button 
            className={styles.heroButton}
            whileHover={{ scale: 1.1 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <motion.h2 className={styles.sectionHeading}>
          Why Choose Us?
        </motion.h2>
        <motion.p className={styles.aboutText}>
          Our experienced mechanics provide top-notch car repairs, diagnostics, and maintenance with cutting-edge tools and technology.
        </motion.p>
      </section>

      {/* Services Section */}
     {/* Testimonials Section */}
<section className={styles.testimonialsSection}>
  <motion.h2 className={styles.sectionHeading}>
    What Our Customers Say
  </motion.h2>
  <div className={styles.testimonialsGrid}>
    {[ 
      { 
        name: "John Doe", 
        feedback: "Excellent service! My car has never run smoother. The team is very professional and reliable.", 
        rating: "⭐⭐⭐⭐⭐"
      },
      { 
        name: "Sarah Smith", 
        feedback: "Great experience! They fixed my brake issues quickly and efficiently. Highly recommend!", 
        rating: "⭐⭐⭐⭐⭐"
      },
      { 
        name: "Mark Wilson", 
        feedback: "Fast and reliable service. They explained everything in detail and got the job done right.", 
        rating: "⭐⭐⭐⭐⭐"
      },
      { 
        name: "Emily Clark", 
        feedback: "I always bring my car here for oil changes. The service is always top-notch and quick!", 
        rating: "⭐⭐⭐⭐⭐"
      }
    ].map((testimonial, index) => (
      <motion.div 
        key={index} 
        className={styles.testimonialCard} 
        whileHover={{ scale: 1.05 }}
      >
        <h3 className={styles.testimonialName}>{testimonial.name}</h3>
        <p className={styles.testimonialFeedback}>"{testimonial.feedback}"</p>
        <div className={styles.testimonialRating}>{testimonial.rating}</div>
      </motion.div>
    ))}
  </div>
</section>


    </div>
  );
};

export default Home;
