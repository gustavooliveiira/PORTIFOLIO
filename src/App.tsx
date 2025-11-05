// src/App.tsx

// Removido 'import React' para resolver o warning do TypeScript.
import { useEffect } from 'react'; // <-- Importando apenas o hook useEffect
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import Footer from './components/Footer/Footer';
import { useTheme } from './context/useTheme'; 
import './App.css'; 

/**
 * @component App
 * @description Componente raiz da aplicação.
 * Lê o estado global do tema e aplica a classe CSS correspondente.
 */
function App() {
  const { theme } = useTheme();

  // Aplica a classe do tema no <body>
  useEffect(() => {
    document.body.className = theme; // Aplica 'dark' ou 'light'
  }, [theme]);
  
  return (
    // Aplica a classe do tema também ao container principal para estilos mais específicos
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
      
    </div>
  );
}

export default App;