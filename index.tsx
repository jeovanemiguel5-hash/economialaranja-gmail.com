import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Remove o loader do HTML assim que o React assume o controle
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 500);
  });
  
  // Backup caso o evento load já tenha passado
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 1500);
}