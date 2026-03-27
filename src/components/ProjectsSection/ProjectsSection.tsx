// src/components/ProjectsSection/ProjectsSection.tsx
import React, { useState, useEffect, useCallback } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard'; 
import type { ProjectData } from '../ProjectCard/ProjectCard'; 
import { useLanguage } from '../../i18n/useLanguage'; 
import './ProjectsSection.css';
import thumbNetflix from '../../assets/Img/IMGGAY.jpg';


//Importe das Thumb



// -----------------------------------------------------
// DADOS INICIAIS 
// -----------------------------------------------------

// Define os tipos de filtro possíveis
type FilterType = 'Todos' | ProjectData['category'];

// Dados de exemplo (Mantenha esta estrutura para preenchimento futuro)
const initialProjects: ProjectData[] = [
    { 
        title: "Netflix TEST", 
        category: 'Web', 
        imageUrl: thumbNetflix,
        introduction: "Introdução do projeto Netflix Clone.", 
        linkYoutube: "https://youtu.be/9kzE8isXlQY?si=ndSPBWUIJ_VW8POF" 
    },
    { 
        title: "App de Receitas Mobile", 
        category: 'Mobile', 
        imageUrl: thumbNetflix,
        introduction: "Introdução do App de Receitas.",
         linkYoutube: "https://youtu.be/9kzE8isXlQY?si=ndSPBWUIJ_VW8POF" 
    },
    { 
        title: "Dashboard Admin Desktop", 
        category: 'Desktop', 
        introduction: "Introdução do Dashboard.",
        linkYoutube: "https://youtu.be/9kzE8isXlQY?si=ndSPBWUIJ_VW8POF" 
    },
    { 
        title: "Landing Page Empresarial", 
        category: 'Web', 
        introduction: "Introdução da Landing Page.",
        linkYoutube: "https://youtu.be/9kzE8isXlQY?si=ndSPBWUIJ_VW8POF" 
    },
];

// -----------------------------------------------------
// COMPONENTE PRINCIPAL
// -----------------------------------------------------

/**
 * @component ProjectsSection
 * @description Implementa a escalabilidade de projetos e a lógica de filtros.
 */
const ProjectsSection: React.FC = () => {
    const [projects, setProjects] = useState<ProjectData[]>(initialProjects); 
    const [activeFilter, setActiveFilter] = useState<FilterType>('Todos');
    const { t } = useLanguage();

    /**
     * @function addProject
     * @description Adiciona um novo projeto à lista, acionando uma nova renderização.
     */
    const addProject = useCallback((newProject: ProjectData) => {
        setProjects(prevProjects => [newProject, ...prevProjects]);
        console.log(`Projeto "${newProject.title}" adicionado!`);
    }, [setProjects]); 

    // Expondo a função 'addProject' globalmente para testes rápidos no console.
    useEffect(() => {
    // LINHA CORRIGIDA: Não usa mais 'as any'. O tipo é definido em src/global.d.ts
    window.addProject = addProject; 
    console.log("Variável global 'addProject(newProject)' pronta para testes no console.");
    }, [addProject]);

    // Lógica de filtragem
    const highlightProjects = projects.slice(0, 3);
    const filteredProjects = projects.filter(project => 
        activeFilter === 'Todos' || project.category === activeFilter
    );
    
    // Mapeamento dos filtros para tradução
    const filters: { key: FilterType, label: string }[] = [
        { key: 'Todos', label: t.projects.filterAll },
        { key: 'Web', label: t.projects.filterWeb },
        { key: 'Mobile', label: t.projects.filterMobile },
        { key: 'Desktop', label: t.projects.filterDesktop },
    ];

    const handleFilterClick = (filter: FilterType) => {
        setActiveFilter(filter);
    };

    return (
        <section className="projects-section">
            
            {/* 1. SEÇÃO DE DESTAQUES (Highlights) */}
            <h2 className="section-title highlights-title">{t.projects.highlights}</h2>
            
            <div className="highlights-grid">
                {highlightProjects.map((project, index) => (
                    <ProjectCard key={`highlight-${project.title}-${index}`} project={project} /> 
                ))}
            </div>
            
            {/* 2. SEÇÃO PRINCIPAL DE PROJETOS */}

            <div className="projects-header-controls">
                <h2 className="section-title projects-list-title">{t.projects.title}</h2>
                
                {/* Controles de Filtro (Traduzidos e Funcionais) */}
                <div className="project-filters">
                    {filters.map(filter => (
                        <button
                            key={filter.key}
                            className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                            onClick={() => handleFilterClick(filter.key)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>
            
            {/* Lista Principal de Projetos (Grid) */}
            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={`project-${project.title}-${index}`} project={project} />
                ))}
            </div>

        </section>
    );
};

export default ProjectsSection;