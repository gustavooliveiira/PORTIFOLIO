// src/components/ProjectCard/ProjectCard.tsx

import React from 'react';
/**
 * @description Importação necessária para conectar o clique ao modal global.
 */
import { useModal } from '../../modal/useModal'; 
import './ProjectCard.css';

// -----------------------------------------------------
// TIPAGEM CENTRALIZADA
// -----------------------------------------------------

/**
 * @interface ProjectData
 * @description Define a estrutura completa dos dados de um projeto.
 * Esta interface é exportada para ser usada no ProjectsSection.
 */
export interface ProjectData {
    title: string;
    category: 'Mobile' | 'Desktop' | 'Web';
    introduction: string;
    linkYoutube?: string; 
    linkRepository?: string; 
    linkLive?: string; 
}

/**
 * @interface ProjectCardProps
 * @description Define as propriedades que o ProjectCard recebe.
 */
interface ProjectCardProps {
    // O card recebe o objeto 'project' completo para passar ao modal
    project: ProjectData;
}

// -----------------------------------------------------
// COMPONENTE
// -----------------------------------------------------

/**
 * @component ProjectCard
 * @description Componente individual de um projeto que, ao ser clicado, dispara o modal.
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    // Hook para abrir o modal enviando os dados do projeto
    const { openModal } = useModal();

    const { title, category } = project; 

    /**
     * @function handleCardClick
     * @description Função para garantir que o clique abra o modal.
     */
    const handleCardClick = () => {
        openModal(project);
    };

    return (
        <div 
            className="project-card"
            // O evento onClick no div principal garante que qualquer parte do card seja clicável
            onClick={handleCardClick}
            style={{ cursor: 'pointer' }}
        >
            {/* Ícone de Informação (ⓘ) posicionado no topo */}
            <div className="card-info-icon">
                ⓘ
            </div>

            {/* Container para a imagem ou thumbnail do projeto */}
            <div className="card-media-placeholder">
                {/* Aqui a imagem é renderizada via CSS background ou tag img futuramente */}
            </div>

            {/* Rodapé do card contendo o Título e a Categoria */}
            <div className="card-footer">
                <h4 className="card-title">{title}</h4>
                <span className={`card-category tag-${category.toLowerCase()}`}>
                    {category}
                </span>
            </div>
        </div>
    );
};

export default ProjectCard;