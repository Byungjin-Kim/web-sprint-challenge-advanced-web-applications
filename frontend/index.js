// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
// changed for React 18

import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import for React 18
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './styles/reset.css';
import './styles/styles.css';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root container using createRoot

// Render the App within BrowserRouter using the root container
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);





