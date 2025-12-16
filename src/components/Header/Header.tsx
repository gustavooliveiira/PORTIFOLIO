// src/components/Header/Header.tsx

// LINHA ALTERADA: Adicionar useState e useEffect
import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/useTheme'; 
import { useLanguage } from '../../i18n/useLanguage'; 
import './Header.css'; 

/**
 * @component Header
 * @description Componente do cabeçalho que inclui navegação, toggle de tema e seletor de idioma.
 * Implementa a lógica de "Smart Header" (aparece ao rolar para cima).
 */
const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLanguage } = useLanguage(); 
  const displayLang = lang === 'pt' ? 'PT-BR' : 'EN';
  
  // -----------------------------------------------------------------
  // LÓGICA DO SMART HEADER
  // -----------------------------------------------------------------
  // LINHAS ADICIONADAS: Estados para controlar a visibilidade e a última posição de rolagem
  const [isVisible, setIsVisible] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    // 1. Esconder se rolar para baixo, longe do topo (ex: > 100px de rolagem)
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setIsVisible(false); 
    } 
    // 2. Mostrar se rolar para cima
    else if (window.scrollY < lastScrollY) {
      setIsVisible(true); 
    } 
    // 3. Garantir que esteja visível se estiver muito perto do topo
    else if (window.scrollY <= 100) {
      setIsVisible(true);
    }
    
    setLastScrollY(window.scrollY);
  };

  // LINHAS ADICIONADAS: Efeito para adicionar/remover o listener de rolagem
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // lastScrollY como dependência

  // -----------------------------------------------------------------
  
  return (
    // LINHA ALTERADA: Adiciona a classe condicional (header--hidden)
    <header className={`header ${isVisible ? '' : 'header--hidden'}`}>
      <div className="header-container">
        
        {/* Ícone do menu sanduíche */}
        <button className="menu-toggle" aria-label="Abrir Menu">
          <span className="menu-icon">=</span> 
        </button>

        <div className="header-controls">
          
          {/* Toggle de modo (Switch) */}
          <label 
            className="mode-switch"
            aria-label={`Mudar para Tema ${theme === 'dark' ? 'Claro' : 'Escuro'}`}
          >
            <input 
              type="checkbox" 
              checked={theme === 'light'} 
              onChange={toggleTheme} 
            />
            <span className="slider"></span>
          </label>
          
          {/* Seletor de Idioma */}
          <button 
            className="lang-button"
            onClick={toggleLanguage} 
          >
            {displayLang} <span className="arrow-down">▼</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;