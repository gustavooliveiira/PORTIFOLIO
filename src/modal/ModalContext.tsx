// src/modal/ModalContext.tsx

import { useState, useCallback, type ReactNode, type FC } from 'react';
// Importa o Contexto e Tipagem do arquivo isolado
import { ModalContext, type ModalContextType } from './useModal'; 
import { type ProjectData } from '../components/ProjectCard/ProjectCard'; 

// -----------------------------------------------------
// PROVIDER
// -----------------------------------------------------

interface ModalProviderProps {
  children: ReactNode;
}

/**
 * @component ModalProvider
 * @description Componente Provedor de Modal. Gerencia o estado e qual projeto deve ser exibido.
 */
export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState<ProjectData | null>(null);

    /**
     * @function openModal
     * @description Abre o modal e carrega os dados do projeto.
     */
    const openModal = useCallback((project: ProjectData) => {
        setCurrentProject(project);
        setIsModalOpen(true);
    }, []);

    /**
     * @function closeModal
     * @description Fecha o modal e limpa os dados.
     */
    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        // Pequeno delay para a animação do modal antes de limpar os dados
        setTimeout(() => setCurrentProject(null), 300); 
    }, []);

    const contextValue: ModalContextType = {
        isModalOpen,
        currentProject,
        openModal,
        closeModal,
    };

    return (
        <ModalContext.Provider value={contextValue}>
            {children}
        </ModalContext.Provider>
    );
};