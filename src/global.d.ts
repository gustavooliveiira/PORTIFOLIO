// src/global.d.ts

// LINHA CORRIGIDA: Usando 'import type'
import type { ProjectData } from './components/ProjectCard/ProjectCard';

/**
 * @interface Window
 * @description Estende a interface global Window para adicionar a função addProject,
 * permitindo o teste de escalabilidade no console sem usar 'any'.
 */
declare global {
  interface Window {
    addProject: (newProject: ProjectData) => void;
  }
}

// A linha 'export {}' é necessária para garantir que o TypeScript trate este 
// arquivo como um módulo e carregue as declarações globais.
export {};