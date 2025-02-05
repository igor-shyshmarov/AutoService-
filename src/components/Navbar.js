import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import { motion } from 'framer-motion';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error during logout: ', error.message);
    }
  };

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.logo}>
        <h2>AutoService</h2>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>
            Contact
          </NavLink>
        </li>

        {user ? (
          <li>
            <button className={styles.logoutButton} onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <NavLink to="/login" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
