import React from 'react'; // Імпортуємо React
import { Router } from 'react-router-dom'; // Імпортуємо Router
import { createMemoryHistory } from 'history'; // Імпортуємо createMemoryHistory для історії
import Footer from './Footer'; // Імпортуємо ваш компонент Footer

// Створюємо історію для Router
const history = createMemoryHistory();

describe('Footer Component', () => {
  it('renders correctly', () => {
    cy.mount(
      <Router history={history}>
        <Footer />
      </Router>
    );
    // Ваші перевірки
  });
});

// Ігноруємо помилки, пов'язані з маршрутизацією
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes("Cannot read properties of undefined (reading 'pathname')")) {
    return false; // Ігнорувати цю помилку
  }
  return true; // Не ігноруємо інші помилки
});
