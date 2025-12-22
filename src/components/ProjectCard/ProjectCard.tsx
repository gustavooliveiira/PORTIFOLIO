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
 */
export interface ProjectData {
    title: string;
    category: 'Mobile' | 'Desktop' | 'Web';
    imageUrl?: string; // <-- ADICIONADO: Campo opcional para a imagem
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
    project: ProjectData;
}

// -----------------------------------------------------
// COMPONENTE
// -----------------------------------------------------

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { openModal } = useModal();

    // Adicionado imageUrl na desestruturação
    const { title, category, imageUrl } = project; 

    const handleCardClick = () => {
        openModal(project);
    };

    return (
        <div 
            className="project-card"
            onClick={handleCardClick}
            style={{ 
                cursor: 'pointer',
                // APLICANDO A IMAGEM NO BACKGROUND DO CARD
                backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >

            {/* Container para a imagem ou thumbnail do projeto */}
            <div className="card-media-placeholder">
                {/* A imagem agora está sendo aplicada no background da div pai */}
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