// src/components/Footer/Footer.tsx

import React from 'react';
import './Footer.css';

// -----------------------------------------------------
// DADOS ESTÁTICOS - CONTATO
// -----------------------------------------------------
const contactInfo = [
  { 
    label: "E-mail", 
    value: "gustavo.lbsg2020@gmail.com", 
    link: "mailto:gustavo.lbsg2020@gmail.com",
    // Substitua pelo caminho do ícone de e-mail (ex: email.svg)
    icon: { alt: "Ícone de E-mail", src: '../../assets/email.svg', placeholder: '✉' } 
  },
  { 
    label: "telefone", 
    value: "(61) 991444143", 
    link: "tel:+5561991444143",
    // Substitua pelo caminho do ícone de telefone (ex: phone.svg)
    icon: { alt: "Ícone de Telefone", src: '../../assets/phone.svg', placeholder: '📞' }
  },
  { 
    label: "LinkedIn", 
    value: "@Gustavo Castro", 
    link: "URL_DO_SEU_LINKEDIN",
    // Substitua pelo caminho do ícone de LinkedIn (ex: linkedin.svg)
    icon: { alt: "Ícone de LinkedIn", src: '../../assets/linkedin.svg', placeholder: 'in' }
  },
  { 
    label: "GitHub", 
    value: "@gustavooliveiira", 
    link: "https://github.com/gustavooliveiira",
    // Substitua pelo caminho do ícone de GitHub (ex: github.svg)
    icon: { alt: "Ícone de GitHub", src: '../../assets/github.svg', placeholder: '🐙' } 
  },
];

/**
 * @component Footer
 * @description Componente Rodapé, exibe todas as informações e links de contato.
 */
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Container para os Ícones e Informações de Contato */}
        <div className="contact-grid">
          {contactInfo.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-item"
            >
              {/* Área do Ícone */}
              <div className="contact-icon-box">
                {/* IMPORTANTE: Assim como no Hero, você deve importar o SVG/PNG de cada ícone 
                  no topo deste arquivo e usar a variável importada no 'src'.
                  Aqui estamos usando um placeholder simples para a estrutura.
                */}
                <span className="icon-placeholder">{item.icon.placeholder}</span>
              </div>
              
              {/* Área do Texto */}
              <div className="contact-details">
                <p className="contact-label">{item.label}</p>
                <p className="contact-value">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
        
        {/* Linha de separação e Direitos Autorais */}
        <hr className="footer-divider" />
        <p className="copyright">
          © {new Date().getFullYear()} Gustavo Oliveira. Desenvolvido com React e paixão.
        </p>
      </div>
    </footer>
  );
};

export default Footer;