// src/i18n/useLanguage.ts

import { createContext, useContext } from 'react';
import { translations, type Language, type TranslationKeys } from './translations';

// -----------------------------------------------------
// TIPAGEM E CONTEXTO
// -----------------------------------------------------

/**
 * @interface LanguageContextType
 * @description Define a estrutura do valor compartilhado.
 */
export interface LanguageContextType { 
  lang: Language;
  t: TranslationKeys; // O objeto de tradução atual
  toggleLanguage: () => void;
}

// Valor inicial padrão para o Contexto
const initialContextValue: LanguageContextType = {
    lang: 'pt',
    t: translations.pt,
    toggleLanguage: () => { 
      throw new Error('toggleLanguage must be used within LanguageProvider'); 
    }
};

/**
 * @const LanguageContext
 * @description O objeto Contexto criado pelo React.
 */
export const LanguageContext = createContext<LanguageContextType>(initialContextValue);

// -----------------------------------------------------
// HOOK CUSTOMIZADO
// -----------------------------------------------------

/**
 * @function useLanguage
 * @description Hook customizado para acessar o idioma e as traduções em qualquer componente.
 * @returns {LanguageContextType} O objeto contendo o idioma atual e as traduções (t).
 */
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};