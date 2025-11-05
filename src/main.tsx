// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx'; // <-- Importa o Provedor de Tema
import './index.css';

/**
 * @file main.tsx
 * @description Ponto de entrada da aplicação.
 * É responsável por renderizar o componente raiz e injetar providers globais.
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  // Utilizamos React.StrictMode para habilitar verificações e avisos adicionais.
  <React.StrictMode>
    {/* Envolve o App no ThemeProvider para que todos os componentes 
        possam acessar o estado do tema e a função toggleTheme. */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);