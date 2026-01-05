import { generateRandomArray, createArrayBars } from './utils.js';
import { initializeEventListeners } from './eventListeners.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  const array = generateRandomArray(20);
  createArrayBars(array);
  initializeEventListeners();
});
