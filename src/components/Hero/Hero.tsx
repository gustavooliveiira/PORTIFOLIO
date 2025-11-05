// src/components/Hero/Hero.tsx

import React from 'react';
import './Hero.css';

import githubIcon from '../../assets/github.svg';  // Caminho relativo a Hero.tsx
import linkedinIcon from '../../assets/linkedin.svg';

// --- Dados Estáticos do Componente (Para facilidade de manutenção) ---
const name = "Gustavo Oliveira";
const title = "Desenvolvedor Full Stack";
const greeting = "Olá, Eu sou";
const welcomeMessage = "Seja bem-vindo ao meu portfólio!";

/**
 * @component Hero
 * @description Componente principal da seção de Boas-Vindas/Hero.
 * Exibe a apresentação do desenvolvedor, foto e links de ação.
 * É o primeiro componente renderizado no App.
 */
const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        
        {/* Container do Bloco de Texto (Saudação, Nome, Título) */}
        <div className="hero-text">
          <p className="greeting">{greeting}</p>
          <h1 className="name">{name}</h1>
          <h2 className="title">{title}</h2>
          <p className="welcome-message">{welcomeMessage}</p>

          {/* Container dos Botões de Ação */}
          <div className="hero-actions">
            {/* Botão para download do currículo */}
            <a href="#" className="btn btn-secondary">Download CV</a>
            {/* Botão principal para contato */}
            <a href="#" className="btn btn-primary">Entrar Contato</a>
          </div>

          {/* Container dos Ícones Sociais (GitHub e LinkedIn) */}
          <div className="social-links">
            {/* Link para o GitHub - Usando o asset importado */}
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