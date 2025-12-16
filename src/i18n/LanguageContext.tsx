// src/i18n/LanguageContext.tsx (Final Limpo)

import { 
  useState, 
  useCallback, // Adicionado useCallback para otimização
  type ReactNode, 
  type FC 
} from 'react';
import { translations, type Language } from './translations';
// Importa o Contexto e a Tipagem do arquivo isolado
import { LanguageContext, type LanguageContextType } from './useLanguage'; 

// -----------------------------------------------------
// PROVIDER (ÚNICO EXPORT DE COMPONENTE)
// -----------------------------------------------------

interface LanguageProviderProps {
  children: ReactNode;
}

/**
 * @component LanguageProvider
 * @description Componente Provedor de Idioma. Gerencia o estado e fornece o Contexto.
 * Resolve o warning de Fast Refresh, exportando apenas este componente.
 */
export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<Language>('pt');

  const t = translations[lang];

  /**
   * @function toggleLanguage
   * @description Alterna o idioma atual entre 'pt' e 'en'. Usamos useCallback para otimizar.
   */
  const toggleLanguage = useCallback(() => {
      setLang(prevLang => (prevLang === 'pt' ? 'en' : 'pt'));
  }, []);
  
  const contextValue: LanguageContextType = { // Explicitamente tipado
    lang,
    t,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// O hook 'useLanguage' foi removido deste arquivo.