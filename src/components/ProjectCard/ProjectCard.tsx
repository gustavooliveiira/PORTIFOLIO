// src/components/ProjectCard/ProjectCard.tsx

import React from 'react';
// Importação necessária para conectar o clique ao modal
import { useModal } from '../../modal/useModal'; 
import './ProjectCard.css';

// -----------------------------------------------------
// TIPAGEM CENTRALIZADA
// -----------------------------------------------------

/**
 * @interface ProjectData
 * @description Define a estrutura completa dos dados de um projeto (Exportada para uso em ProjectsSection)
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
 * @description Componente individual de um projeto, agora clicável para abrir o modal.
 */
// A definição de React.FC<ProjectCardProps> garante a tipagem correta da função
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    // Hook para abrir o modal ao clique
    const { openModal } = useModal();

    const { title, category } = project; 

    // O card é um contêiner clicável
    return (
        <div 
            className="project-card"
            // Chama o openModal passando os dados do projeto atual
            onClick={() => openModal(project)}
        >
            {/* Ícone de Informação (Placeholder) */}
            <div className="card-info-icon">
                ⓘ
            </div>

            {/* Placeholder da Imagem/Mídia */}
            <div className="card-media-placeholder">
                {/* Aqui viria uma imagem ou thumbnail do vídeo */}
            </div>

            {/* Barra Inferior com Título */}
            <div className="card-footer">
                <h4 className="card-title">{title}</h4>
                <span className={`card-category tag-${category.toLowerCase()}`}>{category}</span>
            </div>
        </div>
    );
};

export default ProjectCard;