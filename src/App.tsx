// src/App.tsx

import { useEffect } from 'react'; 
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import Footer from './components/Footer/Footer';
import { useTheme } from './context/useTheme'; 
// LINHA ADICIONADA: Importa o componente Modal
import ProjectModal from './components/ProjectModal/ProjectModal'; 
import './App.css'; 

/**
 * @component App
 * @description Componente raiz da aplicação.
 * Renderiza o modal fora do fluxo principal para garantir que fique em primeiro plano.
 */
function App() {
  const { theme } = useTheme();

  // Aplica a classe do tema no <body>
  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);
  
  return (
    <div className={`portfolio-container ${theme}-theme`}> 
      
      {/* 1. Cabeçalho */}
      <Header />
      
      {/* 2. Conteúdo Principal */}
      <main className="main-content">
        
        <Hero />
        <About />
        <ProjectsSection />
        
      </main>
      
      {/* 3. Rodapé */}
      <Footer />
      
      {/* LINHA ADICIONADA: Renderiza o Modal, que usa o Contexto para aparecer */}
      <ProjectModal /> 
      
    </div>
  );
}

export default App;