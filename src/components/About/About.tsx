// src/components/About/About.tsx

import React from 'react';
import { useLanguage } from '../../i18n/useLanguage'; // Hook para gerenciar o idioma
import './About.css';

/**
 * @description Importação dos ícones de tecnologia salvos na pasta src/assets.
 * O Vite requer a importação direta para arquivos dentro da pasta /src.
 */
import jsIcon from '../../assets/JS.svg';
import tsIcon from '../../assets/TS.svg';
import htmlIcon from '../../assets/HTML.svg';
import cssIcon from '../../assets/CSS.svg';
import nodeIcon from '../../assets/Node.svg';
import reactIcon from '../../assets/react.svg';
import pythonIcon from '../../assets/Python.svg';
import phpIcon from '../../assets/PHP.ico';
import dockerIcon from '../../assets/Docker.svg';

/**
 * @component About
 * @description Seção que apresenta a biografia traduzida e o grid de tecnologias.
 */
const About: React.FC = () => {
  /**
   * @const t
   * @description Extrai o objeto de tradução atual do contexto de idioma.
   */
  const { t } = useLanguage(); 

  /**
   * @const techIcons
   * @description Lista de tecnologias mapeadas com as variáveis importadas acima.
   * Preenchi os nomes para que apareçam embaixo dos ícones como na sua referência.
   */
  const techIcons = [
    { name: 'JavaScript', src: jsIcon }, 
    { name: 'TypeScript', src: tsIcon },
    { name: 'HTML5', src: htmlIcon },
    { name: 'CSS3', src: cssIcon },
    { name: 'Node.js', src: nodeIcon },
    { name: 'React', src: reactIcon },
    { name: 'Python', src: pythonIcon },
    { name: 'PHP', src: phpIcon },
    { name: 'Docker', src: dockerIcon },
  ];

  return (
    <section className="about-section">
      {/* Título da seção vindo do dicionário de traduções */}
      <h2 className="section-title about-title">{t.about.title}</h2>
      
      {/* Biografia traduzida diretamente do t.about.bio (Lógica limpa) */}
      <p className="about-text">{t.about.bio}</p> 
      
      {/* Título da seção de Tecnologias vindo do i18n */}
      <h3 className="section-title technologies-title">
        {t.about.technologiesTitle}
      </h3> 
      
      {/* Container da lista de ícones */}
      <div className="technologies-list">
        {techIcons.map((tech, index) => (
          <div key={index} className="tech-icon-container">
            <img 
              src={tech.src} 
              alt={tech.name} 
              className="tech-icon"
              title={tech.name}
            />
            {/* Nome da tecnologia exibido abaixo do ícone */}
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default About;