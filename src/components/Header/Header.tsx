// src/components/Header/Header.tsx

import React from 'react';
import { useTheme } from '../../context/useTheme'; // <-- Importa o hook de tema
import './Header.css'; 

/**
 * @component Header
 * @description Componente do cabeçalho que inclui navegação e o toggle de tema.
 */
const Header: React.FC = () => {
  // Obtém o tema atual e a função de toggle do contexto
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-container">
        
        {/* Ícone do menu sanduíche */}
        <button className="menu-toggle" aria-label="Abrir Menu">
          <span className="menu-icon">=</span> 
        </button>

        <div className="header-controls">
          
          {/* Toggle de modo (Switch) */}
          <label 
            className="mode-switch"
            // Adiciona um rótulo de acessibilidade dinâmico
            aria-label={`Mudar para Tema ${theme === 'dark' ? 'Claro' : 'Escuro'}`}
          >
            <input 
              type="checkbox" 
              // Controla se o checkbox está marcado (true para tema Light)
              checked={theme === 'light'} 
              onChange={toggleTheme} // Chama a função de toggle ao mudar
            />
            <span className="slider"></span>
          </label>
          
          {/* Seletor de Idioma */}
          <button className="lang-button">
            PT-BR <span className="arrow-down">▼</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;