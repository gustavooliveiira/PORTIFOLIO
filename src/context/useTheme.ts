// src/context/useTheme.ts

import { useContext, createContext } from 'react';
import { type ThemeContextType } from './theme-types'; // Importa a tipagem

// Valor padrão e estrutura do Contexto.
const initialContextValue: ThemeContextType = {
    theme: 'dark',
    toggleTheme: () => {
        // Placeholder para quando o hook é chamado fora do Provider
        throw new Error('useTheme must be used within a ThemeProvider');
    }
};

/**
 * @const ThemeContext
 * @description O objeto Contexto criado pelo React.
 */
export const ThemeContext = createContext<ThemeContextType>(initialContextValue);

/**
 * @function useTheme
 * @description Hook customizado para acessar o estado e a função de toggle do tema.
 * @returns {ThemeContextType} O objeto contendo o tema atual e a função de toggle.
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  // Não precisamos verificar 'undefined' aqui porque definimos um initialContextValue
  return context;
};