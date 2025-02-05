import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Services from './pages/Services';
import LoginPage from './pages/LoginPage';
import About from './pages/About';
import RegisterPage from './pages/RegisterPage';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'; // Added Navbar import
import Footer from './components/Footer'; // Added Footer import
import { loginUser, logoutUser } from './services/authService'; // Імпортуємо функції для логіну і лог-ауту
import './App.css'; // Make sure to import your global styles

function App() {
  const [user, setUser] = useState(null); // Стейт для збереження користувача

  const handleLogin = async (email, password) => {
    try {
      const loggedInUser = await loginUser(email, password); // Отримуємо користувача
      setUser(loggedInUser); // Зберігаємо користувача в стейті
      window.location.href = '/'; // Перенаправляємо на сторінку профілю
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutUser(); // Викликаємо функцію logoutUser для виходу
      setUser(null); // Очищаємо стейт користувача
      window.location.href = '/'; // Перенаправляємо на домашню сторінку
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (<div className="main-content">
    <Router>
      <Navbar user={user} onLogout={handleLogout} /> {/* Передаємо handleLogout в Navbar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
