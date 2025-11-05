// src/context/ThemeContext.tsx

import { 
  useState, 
  useCallback,
  type ReactNode,
  type FC
} from 'react';
import { ThemeContext } from './useTheme'; // Importa o valor do Contexto
import { type ThemeContextType, type Theme } from './theme-types'; // Importa os tipos

// -----------------------------------------------------
// PROVEDOR DE TEMA (PROVIDER)
// -----------------------------------------------------

/**
 * @interface ThemeProviderProps
 * @description Define as propriedades aceitas.
 */
interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * @component ThemeProvider
 * @description Componente Provedor de Tema. Único export de componente.
 */
export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => { 
  // Usa o tipo Theme do theme-types.ts
  const [theme, setTheme] = useState<Theme>('dark');

  // 2. Função de toggle.
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};