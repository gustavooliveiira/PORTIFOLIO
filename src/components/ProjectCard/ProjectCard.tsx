// src/components/ProjectCard/ProjectCard.tsx

import React from 'react';
import './ProjectCard.css';

// -----------------------------------------------------
// TIPAGEM (TYPESCRIPT)
// -----------------------------------------------------

/**
 * @interface ProjectData
 * @description Define a estrutura de dados que cada ProjectCard deve receber.
 */
  export interface ProjectData { // <-- O 'export' foi adicionado aqui!
  title: string;
  category: 'Mobile' | 'Desktop' | 'Web';
  introduction: string; 
  linkYoutube?: string; 
}

// -----------------------------------------------------
// FUNÇÃO PARA ESTRUTURAR O VÍDEO (EMBED)
// -----------------------------------------------------

/**
 * @function getEmbedUrl
 * @description Converte uma URL de visualização normal do YouTube para uma URL de embed.
 * @param {string} url - A URL completa do YouTube (ex: https://www.youtube.com/watch?v=...).
 * @returns {string} A URL pronta para ser usada no iframe (embed).
 */
const getEmbedUrl = (url: string): string => {
  // Regex simples corrigida para extrair o ID do vídeo de URLs comuns
  // Removido o escape desnecessário em '&' no grupo de não-captura [^#&?]
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  
  // Se o ID for encontrado (deve ter 11 caracteres), retorna a URL de embed
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}?autoplay=0&rel=0`;
  }
  // Retorna string vazia se não for um link de vídeo válido
  return ''; 
};


// -----------------------------------------------------
// COMPONENTE PRINCIPAL
// -----------------------------------------------------

/**
 * @component ProjectCard
 * @description Componente reutilizável para exibir um único projeto.
 * Atualmente exibe título e mídia (vídeo ou placeholder).
 * @param {ProjectData} props - Os dados do projeto a ser exibido.
 */
const ProjectCard: React.FC<ProjectData> = ({ 
  title, 
  linkYoutube // Apenas as props usadas no JSX atual
}) => {
  
  const embedUrl = linkYoutube ? getEmbedUrl(linkYoutube) : '';
  const hasMedia = embedUrl.length > 0; // Verifica se temos uma URL de embed válida

  return (
    <div className="project-card">
      
      {/* 1. Área da Mídia (Vídeo ou Placeholder) */}
      <div className="card-media-area">
        {hasMedia ? (
          // Renderiza o vídeo do YouTube (iframe)
          <iframe
            className="youtube-embed"
            src={embedUrl}
            title={`Vídeo do projeto ${title}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          // Renderiza o placeholder (se não houver vídeo)
          <div className="card-placeholder">
            <span>Mídia Não Disponível</span>
          </div>
        )}
      </div>

      {/* 2. Conteúdo de Texto (Título) */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {/* A introdução (introduction) foi removida daqui para resolver o warning.
            Se você precisar dela, descomente e use: <p className="card-introduction">{introduction}</p> */}
      </div>
      
    </div>
  );
};

export default ProjectCard;