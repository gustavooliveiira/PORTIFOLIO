// src/components/Hero/Hero.tsx

import React from 'react';
import './Hero.css';
import { useLanguage } from '../../i18n/useLanguage'; 

// --- IMPORTAÇÃO DOS ÍCONES E DA SUA FOTO ---
import githubIcon from '../../assets/github.svg'; 
import linkedinIcon from '../../assets/linkedin.svg';
// IMPORTANTE: Importe sua foto aqui. Vou usar o nome 'profilePic'
import profilePic from '../../assets/MENATAL.png'; 

const name = "Gustavo Oliveira"; 

/**
 * @component Hero
 * @description Exibe a apresentação do desenvolvedor e sua foto de perfil.
 */
const Hero: React.FC = () => {
  const { t } = useLanguage(); 
  
  return (
    <section className="hero">
      <div className="hero-content">
        
        <div className="hero-text">
          <p className="greeting">{t.hero.greeting}</p> 
          <h1 className="name">{name}</h1>
          <h2 className="title">{t.hero.title}</h2> 
          <p className="welcome-message">{t.hero.welcomeMessage}</p> 

          <div className="hero-actions">
            <a href="#" className="btn btn-secondary">{t.hero.downloadCV}</a>
            <a href="https://wa.link/iqe6ml" className="btn btn-primary">{t.hero.contact}</a>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/gustavo-henrique04-dev" target="blank" aria-label="Linkedin">
              <img src={linkedinIcon} alt="Linkedin" height="40" width="40"/>
            </a>

            <a href="https://github.com/gustavooliveiira" target="_blank" aria-label="GitHub">
              <img src={githubIcon} alt="GitHub" height="40" width="40"/>
            </a>
          </div>
        </div>

        {/* Container da Imagem de Perfil Atualizado */}
        <div className="hero-image-container">
          <div className="profile-circle">
            <img 
              src={profilePic} 
              alt={name} 
              className="profile-img" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;