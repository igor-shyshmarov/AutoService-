import React from 'react';
import styles from './Page.module.css';

const DashboardPage = () => {
  return (
    <div className={styles.page}>
      <h1>Dashboard Page</h1>
      <p>Manage your account details, view stats, and more.</p>
    </div>
  );
};

export default DashboardPage;