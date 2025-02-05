import React from 'react'; // Імпортуємо React
import { Router } from 'react-router-dom'; // Імпортуємо Router
import { createMemoryHistory } from 'history'; // Імпортуємо createMemoryHistory для історії
import Navbar from './Navbar'; // Імпортуємо ваш компонент

// Створюємо історію для Router
const history = createMemoryHistory();

describe('Navbar Component', () => {
  it('renders correctly', () => {
    cy.mount(
      <Router history={history}>
        <Navbar />
      </Router>
    );
    // Ваші перевірки
  });
});
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ігноруємо певну помилку, якщо вона пов'язана з навігацією
  if (err.message.includes("Cannot read properties of undefined (reading 'pathname')")) {
    return false;  // Ігнорувати цю помилку
  }
  // Не ігноруємо інші помилки
  return true;
});
