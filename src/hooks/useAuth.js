import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null); // Для зберігання інформації про користувача
  const [loading, setLoading] = useState(false); // Для контролю завантаження
  const [error, setError] = useState(null); // Для обробки помилок

  // Функція для логіну
  const login = async (email, password) => {
    setLoading(true);
    try {
      // Використовуємо fetch або axios для запиту на сервер (замініть на реальний серверний endpoint)
      const response = await fetch('http://your-api-endpoint.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();

      if (response.ok) {
        setUser(data.user); // Зберігаємо дані користувача після успішного логіну
      } else {
        setError(data.error); // Виводимо помилку, якщо щось пішло не так
      }
    } catch (err) {
      setError('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  // Функція для реєстрації
  const register = async (email, password) => {
    setLoading(true);
    try {
      const response = await fetch('http://your-api-endpoint.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user); // Зберігаємо дані користувача після успішної реєстрації
      } else {
        setError(data.error); // Виводимо помилку
      }
    } catch (err) {
      setError('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return { login, register, user, loading, error };
};

export default useAuth;
