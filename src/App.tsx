// src/App.tsx

import { useEffect } from 'react'; 
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import Footer from './components/Footer/Footer';
import { useTheme } from './context/useTheme'; 

// IMPORTANTE: Importar o Provider do Modal
import { ModalProvider } from './modal/ModalContext'; 

// Importa o componente visual do Modal
import ProjectModal from './components/ProjectModal/ProjectModal'; 
import './App.css'; 

function App() {
  const { theme } = useTheme();

  // Aplica a classe do tema no <body>
  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);
  
  return (
    /* 1. O ModalProvider deve envolver TUDO para o clique funcionar */
    <ModalProvider>
      <div className={`portfolio-container ${theme}-theme`}> 
        
        <Header />
        
        <main className="main-content">
          <Hero />
          <About />
          <ProjectsSection />
        </main>
        
        <Footer />
        
        {/* 2. O Componente visual que vai aparecer na tela */}
        <ProjectModal /> 
        
      </div>
    </ModalProvider>
  );
}

export default App;