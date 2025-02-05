import { useState } from 'react';

const useRegister = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (userData) => {
    setLoading(true);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error('Failed to register');
      const data = await response.json();
      setUser(data.user); // Зберігаємо дані нового користувача
    } catch (err) {
      setError(err.message); // Зберігаємо помилку, якщо реєстрація не вдалася
    } finally {
      setLoading(false);
    }
  };

  return { user, register, loading, error };
};

export default useRegister;
