// src/modal/useModal.ts

import { createContext, useContext } from 'react';
// Precisamos importar o ProjectData
import { type ProjectData } from '../components/ProjectCard/ProjectCard'; 

// -----------------------------------------------------
// TIPAGEM E CONTEXTO
// -----------------------------------------------------

/**
 * @interface ModalContextType
 * @description Define a estrutura do valor compartilhado pelo Contexto do Modal.
 */
export interface ModalContextType {
    isModalOpen: boolean;
    currentProject: ProjectData | null;
    openModal: (project: ProjectData) => void;
    closeModal: () => void;
}

// Valor inicial padrão para o Contexto
const initialContextValue: ModalContextType = {
    isModalOpen: false,
    currentProject: null,
    openModal: () => {
        throw new Error('openModal must be used within a ModalProvider');
    },
    closeModal: () => {
        throw new Error('closeModal must be used within a ModalProvider');
    }
};

/**
 * @const ModalContext
 * @description O objeto Contexto criado pelo React para controlar o modal.
 */
export const ModalContext = createContext<ModalContextType>(initialContextValue);

// -----------------------------------------------------
// HOOK CUSTOMIZADO
// -----------------------------------------------------

/**
 * @function useModal
 * @description Hook customizado para acessar o estado e funções do Modal.
 * @returns {ModalContextType} O objeto contendo o estado do modal.
 */
export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};