// src/components/About/About.tsx

import React from 'react';
import { useLanguage } from '../../i18n/useLanguage'; 
import './About.css';

// -----------------------------------------------------
// DADOS ESTÁTICOS
// -----------------------------------------------------

const techIcons = [
  { name: 'JavaScript', src: '../../assets/js.svg' }, 
  { name: 'TypeScript', src: '../../assets/ts.svg' },
  { name: 'HTML5', src: '../../assets/html5.svg' },
  { name: 'CSS3', src: '../../assets/css3.svg' },
  { name: 'Node.js', src: '../../assets/nodejs.svg' },
  { name: 'React', src: '../../assets/react.svg' },
  { name: 'Python', src: '../../assets/python.svg' },
  { name: 'PHP', src: '../../assets/php.svg' },
  { name: 'Outros', src: '../../assets/etc.svg' },
];

/**
 * @component About
 * @description Seção que contém a biografia do desenvolvedor e a lista de tecnologias.
 */
const About: React.FC = () => {
  // LINHA CORRIGIDA: Desestruturando 't' (traduções) e 'lang' (idioma atual)
  const { t, lang } = useLanguage(); 

  // LINHA CORRIGIDA: Usando 'lang' diretamente para determinar o texto da biografia
  const tempAboutText = lang === 'pt' ? 
      "Desenvolvedor Full Stack, apaixonado por explorar diferentes áreas do mundo da tecnologia e constantemente em busca de aprimoramento. Ainda não defini um caminho específico para minha carreira, por isso mantenho-me aberto e disponível para atuar em diversas áreas." :
      "Full Stack Developer, passionate about exploring different areas of the tech world and constantly seeking improvement. I have not yet defined a specific career path, so I remain open and available to work in various areas.";


  return (
    <section className="about-section">
      
      {/* 1. Título e Bloco de Texto "Sobre mim" */}
      <h2 className="section-title about-title">{t.about.title}</h2>
      <p className="about-text">{tempAboutText}</p> 
      
      {/* 2. Título da Seção de Tecnologias */}
      <h3 className="section-title technologies-title">Tecnologias</h3> 
      
      {/* 3. Lista de Ícones de Tecnologias */}
      <div className="technologies-list">
        {techIcons.map((tech, index) => (
          <div key={index} className="tech-icon-container">
            <img 
              src={tech.src} 
              alt={tech.name} 
              className="tech-icon"
              title={tech.name}
            />
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default About;