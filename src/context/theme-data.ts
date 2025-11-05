// src/context/useTheme.ts (ou theme-data.ts, onde o createContext é chamado)

import { useContext, createContext } from 'react';
// CORRIGIDO: Importamos a tipagem do arquivo de tipos, e não do arquivo do Provider.
import { type ThemeContextType } from './theme-types'; 

// Valor padrão e estrutura do Contexto.
const initialContextValue: ThemeContextType = {
    theme: 'dark',
    toggleTheme: () => {
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
  return context;
};