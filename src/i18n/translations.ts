// src/i18n/translations.ts

/**
 * @interface TranslationKeys
 * @description Define o contrato obrigatório de chaves para as traduções do portfólio.
 */
export interface TranslationKeys {
  hero: {
    greeting: string;
    welcomeMessage: string;
    downloadCV: string;
    contact: string;
    title: string;
  };
  about: {
    title: string;
    technologiesTitle: string; 
    bio: string;               // <-- ADICIONADO: Nova chave para o texto da biografia
  };
  projects: {
    title: string;
    highlights: string;
    filterAll: string;
    filterMobile: string;
    filterDesktop: string;
    filterWeb: string;
  };
  footer: {
    copyright: (year: number) => string;
  }
}

/**
 * @const translations
 * @description Dicionário contendo todos os textos do portfólio traduzidos em PT e EN.
 */
export const translations: Record<'pt' | 'en', TranslationKeys> = {
  pt: {
    hero: {
      greeting: "Olá, Eu sou",
      welcomeMessage: "Seja bem-vindo ao meu portfólio!",
      downloadCV: "Download CV",
      contact: "Entrar Contato",
      title: "Desenvolvedor Full Stack"
    },
    about: {
      title: "Sobre Mim",
      technologiesTitle: "Tecnologias",
      // ADICIONADO: Texto da biografia em português
      bio: "Desenvolvedor Full Stack, apaixonado por explorar diferentes áreas do mundo da tecnologia e constantemente em busca de aprimoramento. Ainda não defini um caminho específico para minha carreira, por isso mantenho-me aberto e disponível para atuar em diversas áreas."
    },
    projects: {
      title: "Projetos",
      highlights: "Destaques",
      filterAll: "Todos",
      filterMobile: "Mobile",
      filterDesktop: "Desktop",
      filterWeb: "Web",
    },
    footer: {
      copyright: (year: number) => `© ${year} Gustavo Oliveira. Desenvolvido com React e paixão.`,
    }
  },
  en: {
    hero: {
      greeting: "Hello, I am",
      welcomeMessage: "Welcome to my portfolio!",
      downloadCV: "Download CV",
      contact: "Get in Touch",
      title: "Full Stack Developer"
    },
    about: {
      title: "About Me",
      technologiesTitle: "Technologies",
      // ADICIONADO: Texto da biografia em inglês
      bio: "Full Stack Developer, passionate about exploring different areas of the tech world and constantly seeking improvement. I have not yet defined a specific career path, so I remain open and available to work in various areas."
    },
    projects: {
      title: "Projects",
      highlights: "Highlights",
      filterAll: "All",
      filterMobile: "Mobile",
      filterDesktop: "Desktop",
      filterWeb: "Web",
    },
    footer: {
      copyright: (year: number) => `© ${year} Gustavo Oliveira. Developed with React and passion.`,
    }
  }
};

export type Language = keyof typeof translations;