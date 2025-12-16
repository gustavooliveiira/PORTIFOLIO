// src/components/Footer/Footer.tsx

import React from 'react';
import './Footer.css';
// LINHA ADICIONADA: Importa o hook de idioma para tradução
import { useLanguage } from '../../i18n/useLanguage';

// -----------------------------------------------------
// DADOS ESTÁTICOS - CONTATO
// -----------------------------------------------------
// NOTA: Para traduzir os 'labels' (E-mail, telefone), eles precisariam 
// ser chaves de tradução (t.footer.emailLabel) em vez de strings aqui.
const contactInfo = [
  { 
    label: "E-mail", 
    value: "gustavo.lbsg2020@gmail.com", 
    link: "mailto:gustavo.lbsg2020@gmail.com",
    icon: { alt: "Ícone de E-mail", src: '../../assets/email.svg', placeholder: '✉' } 
  },
  { 
    label: "telefone", 
    value: "(61) 991444143", 
    link: "tel:+5561991444143",
    icon: { alt: "Ícone de Telefone", src: '../../assets/phone.svg', placeholder: '📞' }
  },
  { 
    label: "LinkedIn", 
    value: "@Gustavo Castro", 
    link: "URL_DO_SEU_LINKEDIN",
    icon: { alt: "Ícone de LinkedIn", src: '../../assets/linkedin.svg', placeholder: 'in' }
  },
  { 
    label: "GitHub", 
    value: "@gustavooliveiira", 
    link: "https://github.com/gustavooliveiira",
    icon: { alt: "Ícone de GitHub", src: '../../assets/github.svg', placeholder: '🐙' } 
  },
];

/**
 * @component Footer
 * @description Componente Rodapé, exibe todas as informações e links de contato.
 */
const Footer: React.FC = () => {
  // LINHAS ADICIONADAS: Obtém o objeto de tradução e o ano atual
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

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
                <span className="icon-placeholder">{item.icon.placeholder}</span>
              </div>
              
              {/* Área do Texto */}
              <div className="contact-details">
                {/* O label aqui usa a string estática do contactInfo. */}
                <p className="contact-label">{item.label}</p>
                <p className="contact-value">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
        
        {/* Linha de separação e Direitos Autorais */}
        <hr className="footer-divider" />
        {/* LINHA ALTERADA: Usa a função traduzida para o copyright */}
        <p className="copyright">
          {t.footer.copyright(currentYear)}
        </p>
      </div>
    </footer>
  );
};

export default Footer;