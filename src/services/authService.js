import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase";  // Імпортуємо auth з firebase.js

// Реєстрація користувача
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;  // Повертаємо інформацію про користувача
  } catch (error) {
    throw new Error(error.message);  // Обробка помилок
  }
};

// Логін користувача
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;  // Повертаємо інформацію про користувача
  } catch (error) {
    throw new Error(error.message);  // Обробка помилок
  }
};

// Вихід користувача
export const logoutUser = async () => {
  try {
    await signOut(auth);  // Викликаємо метод signOut для виходу користувача
  } catch (error) {
    throw new Error(error.message);  // Обробка помилок
  }
};
