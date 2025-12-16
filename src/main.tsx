// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx'; 
import { LanguageProvider } from './i18n/LanguageContext.tsx'; // <-- Importa LanguageProvider
import { ModalProvider } from './modal/ModalContext.tsx';
import './index.css';

/**
 * @file main.tsx
 * @description Ponto de entrada da aplicação.
 * Injeta providers globais (Tema, Idioma e Modal).
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        {/* LINHAS ALTERADAS/ADICIONADAS: ModalProvider envolve o App */}
        <ModalProvider>
          <App />
        </ModalProvider>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
);