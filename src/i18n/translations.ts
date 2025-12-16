// src/i18n/translations.ts

// Define a estrutura para cada seção
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
 * @description Contém todos os textos do portfólio traduzidos em PT e EN.
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