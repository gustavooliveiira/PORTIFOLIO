// src/context/ThemeContext.tsx

import { 
  useState, 
  useCallback,
  type ReactNode,
  type FC
} from 'react';
import { ThemeContext } from './useTheme'; 
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
 * @description Componente Provedor de Tema.
 * Este é o único export de componente.
 * @param {ThemeProviderProps} props - Componentes filhos a serem renderizados.
 */
export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => { 
  const [theme, setTheme] = useState<Theme>('dark');

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