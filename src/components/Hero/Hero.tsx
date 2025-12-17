// src/components/Hero/Hero.tsx

import React from 'react';
import './Hero.css';
// LINHA CORRIGIDA: Importa o hook do novo local 'useLanguage.ts'
import { useLanguage } from '../../i18n/useLanguage'; 

import githubIcon from '../../assets/github.svg'; 
import linkedinIcon from '../../assets/linkedin.svg';

// --- Dados Estáticos do Componente (Apenas o nome que não será traduzido) ---
const name = "Gustavo Oliveira"; 
// As variáveis de texto foram removidas, pois agora virão do Contexto (t)

/**
 * @component Hero
 * @description Componente principal da seção de Boas-Vindas/Hero.
 * Exibe a apresentação do desenvolvedor, foto e links de ação, com suporte a i18n.
 * É o primeiro componente renderizado no App.
 */
const Hero: React.FC = () => {
  // Obtém o objeto de tradução 't'
  const { t } = useLanguage(); 
  
  return (
    <section className="hero">
      <div className="hero-content">
        
        {/* Container do Bloco de Texto (Saudação, Nome, Título) */}
        <div className="hero-text">
          {/* USANDO TRADUÇÃO: t.hero.greeting */}
          <p className="greeting">{t.hero.greeting}</p> 
          <h1 className="name">{name}</h1>
          {/* USANDO TRADUÇÃO: t.hero.title */}
          <h2 className="title">{t.hero.title}</h2> 
          {/* USANDO TRADUÇÃO: t.hero.welcomeMessage */}
          <p className="welcome-message">{t.hero.welcomeMessage}</p> 

          {/* Container dos Botões de Ação */}
          <div className="hero-actions">
            {/* Botão para download do currículo - USANDO TRADUÇÃO: t.hero.downloadCV */}
            <a href="#" className="btn btn-secondary">{t.hero.downloadCV}</a>
            {/* Botão principal para contato - USANDO TRADUÇÃO: t.hero.contact */}
            <a href="https://wa.link/iqe6ml" className="btn btn-primary">{t.hero.contact}</a>
          </div>

          {/* Container dos Ícones Sociais (GitHub e LinkedIn) */}
          <div className="social-links">
            {/* Link para o LinkedIn */}
            <a href="https://www.linkedin.com/in/gustavo-henrique04-dev" target="blank" aria-label="Linkedin">
              <img src={linkedinIcon} alt="Linkedin" height="40" width="40"/>
            </a>

            <a href="https://github.com/gustavooliveiira" target="_blank" aria-label="GitHub">
              <img src={githubIcon} alt="GitHub" height="40" width="40"/>
            </a>
          </div>
        </div>

        {/* Container da Imagem de Perfil */}
        <div className="hero-image-container">
          {/* Placeholder da imagem, que deve ser substituído por <img /> */}
          <div className="placeholder-image"></div> 
        </div>

      </div>
    </section>
  );
};

export default Hero;