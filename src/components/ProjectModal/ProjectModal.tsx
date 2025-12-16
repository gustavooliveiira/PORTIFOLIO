// src/components/ProjectModal/ProjectModal.tsx

import React, { useEffect, useRef } from 'react';
import { useModal } from '../../modal/useModal';
import { useLanguage } from '../../i18n/useLanguage'; 
import './ProjectModal.css';

/**
 * @component ProjectModal
 * @description Exibe os detalhes completos de um projeto em um modal centralizado.
 */
const ProjectModal: React.FC = () => {
    // -------------------------------------------------------------------------
    // HOOKS CHAMADOS NO TOPO
    // -------------------------------------------------------------------------
    
    const { isModalOpen, currentProject, closeModal } = useModal();
    // LINHA CORRIGIDA: Desestruturando 't' e 'lang' (idioma atual)
    const { t, lang } = useLanguage(); 
    
    const modalRef = useRef<HTMLDivElement>(null);

    // Lógica para fechar o modal ao apertar ESC ou clicar fora
    useEffect(() => {
        if (!isModalOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen, closeModal]);

    // -------------------------------------------------------------------------
    // RETORNO CONDICIONAL
    // -------------------------------------------------------------------------
    
    if (!isModalOpen || !currentProject) {
        return null;
    }

    const { title, introduction, linkYoutube } = currentProject;
    
    // Renderização do Modal
    return (
        <div className="modal-overlay">
            <div className="modal-content" ref={modalRef}>
                
                <button className="modal-close-btn" onClick={closeModal} aria-label={t.hero.contact}>
                    &times;
                </button>
                
                <div className="modal-header">
                    <h2 className="modal-title">{title}</h2>
                    <p className="modal-category">{currentProject.category}</p>
                </div>

                <div className="modal-body">
                    {/* Seção de Mídia (Vídeo/Placeholder) */}
                    <div className="modal-media">
                        {linkYoutube ? (
                            <iframe 
                                title={`Vídeo de Demonstração: ${title}`}
                                src={linkYoutube.replace("watch?v=", "embed/")}
                                allowFullScreen
                                frameBorder="0"
                            ></iframe>
                        ) : (
                            <div className="media-placeholder">
                                {/* LINHA CORRIGIDA: Usando 'lang' diretamente */}
                                <p>{lang === 'pt' ? 'Mídia em breve...' : 'Media coming soon...'}</p>
                            </div>
                        )}
                    </div>
                    
                    {/* Descrição e Detalhes */}
                    <p className="modal-introduction">{introduction}</p>
                    
                    {/* LINKS DE AÇÃO */}
                    <div className="modal-actions">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="btn-modal btn-primary">
                            {t.hero.contact} 
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="btn-modal btn-secondary">
                            {t.projects.filterAll} 
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectModal;