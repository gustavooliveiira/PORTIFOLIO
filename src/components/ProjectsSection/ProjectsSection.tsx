// src/components/ProjectsSection/ProjectsSection.tsx

import React, { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard'; // Importa o Card criado
import { type ProjectData } from '../ProjectCard/ProjectCard'; 
import './ProjectsSection.css';

// -----------------------------------------------------
// DADOS INICIAIS (AQUI VOCÊ ADICIONA NOVOS PROJETOS)
// -----------------------------------------------------
const initialProjects: ProjectData[] = [
  // ... (seus dados de projetos)
  { 
    title: "Netflix Clone Web", 
    category: 'Web', 
    introduction: "Introdução do projeto Netflix Clone.", 
    linkYoutube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
  },
  { 
    title: "App de Receitas Mobile", 
    category: 'Mobile', 
    introduction: "Introdução do App de Receitas.",
  },
  { 
    title: "Dashboard Admin Desktop", 
    category: 'Desktop', 
    introduction: "Introdução do Dashboard.",
    linkYoutube: "https://youtu.be/mQ3gB9681Rk" 
  },
  { 
    title: "Landing Page Empresarial", 
    category: 'Web', 
    introduction: "Introdução da Landing Page.",
  },
];

// -----------------------------------------------------
// COMPONENTE PRINCIPAL
// -----------------------------------------------------

/**
 * @component ProjectsSection
 * @description Componente que exibe a seção de Destaques e a seção completa de Projetos.
 * Gerencia a lista de projetos e a lógica de filtros.
 */
const ProjectsSection: React.FC = () => {
  // Estado para a lista completa de projetos. setProjects foi removido da desestruturação.
  const [projects] = useState<ProjectData[]>(initialProjects); 
  // Estado para o filtro ativo (inicialmente 'Todos').
  const [activeFilter, setActiveFilter] = useState<'Todos' | ProjectData['category']>('Todos');

  // Filtra os projetos para a seção de Destaques (3 primeiros cards)
  const highlightProjects = projects.slice(0, 3);
  
  // Lógica de filtragem
  const filteredProjects = projects.filter(project => 
    activeFilter === 'Todos' || project.category === activeFilter
  );

  return (
    <section className="projects-section">
      
      {/* 1. SEÇÃO DE DESTAQUES (Highlights) */}
      <h2 className="section-title highlights-title">Destaques</h2>
      
      <div className="highlights-grid">
        {highlightProjects.map((project, index) => (
          <ProjectCard key={`highlight-${index}`} {...project} />
        ))}
      </div>
      
      {/* 2. SEÇÃO PRINCIPAL DE PROJETOS */}

      <div className="projects-header-controls">
        <h2 className="section-title projects-list-title">Projetos</h2>
        
        {/* Controles de Filtro */}
        <div className="project-filters">
          <button 
            className={`filter-btn ${activeFilter === 'Todos' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Todos')}
          >
            Todos
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'Mobile' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Mobile')}
          >
            Mobile
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'Desktop' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Desktop')}
          >
            Desktop
          </button>
        </div>
      </div>
      
      {/* Lista Principal de Projetos (Grid) */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>

    </section>
  );
};

export default ProjectsSection;