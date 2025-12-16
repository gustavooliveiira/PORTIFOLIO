// src/context/theme-types.ts

/**
 * @type Theme
 * @description Define os nomes possíveis para os temas.
 */
export type Theme = 'light' | 'dark';

/**
 * @interface ThemeContextType
 * @description Define a estrutura do valor (dados e funções) que será compartilhado pelo Contexto.
 */
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}