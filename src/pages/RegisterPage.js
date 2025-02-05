import React, { useState } from 'react';
import { registerUser } from '../services/authService';  
import styles from '../styles/Page.module.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [error, setError] = useState(null);  
  const [successMessage, setSuccessMessage] = useState(null);  

  const handleRegister = async (e) => {
    e.preventDefault();  
    try {
      await registerUser(email, password);  
      setEmail('');  
      setPassword('');  
      setSuccessMessage('Registration successful! Please log in.');  
      setError(null);  
      window.location.href = '/login';  
    } catch (error) {
      setError(error.message);  
      setSuccessMessage(null);  
    }
  };

  return (
    <div className={styles.page}>
      <h1>Register Page</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Показуємо помилки, якщо вони є */}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}  {/* Показуємо повідомлення про успішну реєстрацію */}
        <button type="submit" className={styles.button}>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
