// src/components/About/About.tsx

import React from 'react';
import './About.css';

// -----------------------------------------------------
// DADOS ESTÁTICOS - SOBRE MIM
// -----------------------------------------------------
const aboutTitle = "Sobre mim";
const aboutText = "Desenvolvedor Full Stack, apaixonado por explorar diferentes áreas do mundo da tecnologia e constantemente em busca de aprimoramento. Ainda não defini um caminho específico para minha carreira, por isso mantenho-me aberto e disponível para atuar em diversas áreas.";
const technologiesTitle = "Tecnologias";

// Substitua pelos caminhos reais dos seus ícones de tecnologia em src/assets/
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
  return (
    <section className="about-section">
      
      {/* 1. Título e Bloco de Texto "Sobre mim" */}
      <h2 className="section-title about-title">{aboutTitle}</h2>
      <p className="about-text">{aboutText}</p>
      
      {/* 2. Título da Seção de Tecnologias */}
      <h2 className="section-title technologies-title">{technologiesTitle}</h2>
      
      {/* 3. Lista de Ícones de Tecnologias */}
      <div className="technologies-list">
        {/* Mapeia a lista de ícones para renderizar cada tecnologia */}
        {techIcons.map((tech, index) => (
          <div key={index} className="tech-icon-container">
            {/* IMPORTANTE: Assim como no Hero, você precisa IMPORTAR cada ícone 
              no topo deste arquivo e usar a variável importada no 'src'.
              Para simplificar este passo, estamos usando o caminho relativo. 
              Lembre-se de substituir o camkinho relativo pelo IMPORT de variável real:
              
              Ex: import jsIcon from '../../assets/js.svg';
              <img src={jsIcon} ... />
            */}
            <img 
              src={tech.src} 
              alt={tech.name} 
              className="tech-icon"
              title={tech.name}
            />
          </div>
        ))}
      </div>
      
      {/* Nota: A seção "Destaques" virá logo abaixo desta, em um componente separado ou aqui. */}
    </section>
  );
};

export default About;