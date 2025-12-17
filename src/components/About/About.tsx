// src/components/About/About.tsx

import React from 'react';
import { useLanguage } from '../../i18n/useLanguage'; 
import './About.css';

// -----------------------------------------------------
// 1. IMPORTAÇÃO DOS SEUS ARQUIVOS SVG
// -----------------------------------------------------
import jsIcon from '../../assets/JS.svg';
import tsIcon from '../../assets/TS.svg';
import htmlIcon from '../../assets/HTML.svg';
import cssIcon from '../../assets/CSS.svg';
import nodeIcon from '../../assets/Node.svg';
import reactIcon from '../../assets/react.svg';
import pythonIcon from '../../assets/Python.svg';
import phpIcon from '../../assets/PHP.ico';
import dockerIcon from '../../assets/Docker.svg';

const About: React.FC = () => {
  const { t, lang } = useLanguage(); 

  const tempAboutText = lang === 'pt' ? 
      "Desenvolvedor Full Stack, apaixonado por explorar diferentes áreas do mundo da tecnologia e constantemente em busca de aprimoramento. Ainda não defini um caminho específico para minha carreira, por isso mantenho-me aberto e disponível para atuar em diversas áreas." :
      "Full Stack Developer, passionate about exploring different areas of the tech world and constantly seeking improvement. I have not yet defined a specific career path, so I remain open and available to work in various areas.";

  // 2. LISTA USANDO AS VARIÁVEIS IMPORTADAS
  const techIcons = [
    { name: '', src: jsIcon }, 
    { name: '', src: tsIcon },
    { name: '', src: htmlIcon },
    { name: '', src: cssIcon },
    { name: '', src: nodeIcon },
    { name: '', src: reactIcon },
    { name: '', src: pythonIcon },
    { name: '', src: phpIcon },
    { name: '', src: dockerIcon },
  ];

  return (
    <section className="about-section">
      {/* Título da seção principal */}
      <h2 className="section-title about-title">{t.about.title}</h2>
      
      {/* Texto de biografia */}
      <p className="about-text">{tempAboutText}</p> 
      
      {/* TÍTULO DE TECNOLOGIAS CORRIGIDO (Tag fechada corretamente) */}
      <h3 className="section-title technologies-title">
        {t.about.technologiesTitle}
      </h3> 
      
      {/* Lista de ícones */}
      <div className="technologies-list">
        {techIcons.map((tech, index) => (
          <div key={index} className="tech-icon-container">
            <img 
              src={tech.src} 
              alt={tech.name} 
              className="tech-icon"
              title={tech.name}
            />
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default About;