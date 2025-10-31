import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { useToggle, useScrollPosition } from './hooks';
import { useServiceWorker } from './hooks/useServiceWorker';

// Components
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

// Styled components
import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #000000;
  color: ${props => props.theme.colors.text};
`;

const MainContent = styled.main`
  position: relative;
  z-index: 1;
`;

const BackgroundPattern = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.2;
  background-image: 
    radial-gradient(circle at 25% 25%, ${props => props.theme.colors.primary} 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, ${props => props.theme.colors.secondary} 1px, transparent 1px);
  background-size: 50px 50px, 30px 30px;
  background-position: 0 0, 25px 25px;
  pointer-events: none;
  z-index: 0;
`;

const ScrollProgress = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${props => props.progress}%;
  height: 3px;
  background: ${props => props.theme.colors.gradientText};
  z-index: 1001;
`;

function App() {
  const [isMenuOpen, { toggle: toggleMenu, setFalse: closeMenu }] = useToggle(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollPosition = useScrollPosition();

  // Register Service Worker for PWA
  useServiceWorker();

  // Calculate scroll progress
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = documentHeight > 0 ? (scrollPosition / documentHeight) * 100 : 0;

  // Handle section changes
  const handleSectionChange = (section) => {
    setActiveSection(section);
    closeMenu();
    
    // Scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If section doesn't exist, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const sections = ['home', 'skills', 'projects'];
    const sectionElements = sections.map(id => document.getElementById(id));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.1, 0.5, 0.9],
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    sectionElements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      sectionElements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Handle loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Simulate loading delay

    return () => clearTimeout(timer);
  }, []);

  // Dynamic page title
  useEffect(() => {
    const titles = {
      home: 'Daniel Neitzel - Desenvolvedor Front-End',
      skills: 'Conhecimentos & Habilidades - Daniel Neitzel',
      projects: 'Projetos - Daniel Neitzel'
    };

    document.title = titles[activeSection] || titles.home;
  }, [activeSection]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isMenuOpen, closeMenu]);

  // Disable body scroll when menu is open on mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  if (!isLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          background: theme.colors.background,
          color: theme.colors.text
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '2rem', 
              marginBottom: '1rem',
              background: theme.colors.gradientText,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Carregando...
            </div>
            <div style={{ 
              width: '50px', 
              height: '3px', 
              background: theme.colors.gradientText,
              margin: '0 auto',
              animation: 'pulse 1.5s infinite'
            }} />
          </div>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <BackgroundPattern />
        <ScrollProgress progress={scrollProgress} />
        
        <Header 
          onMenuToggle={toggleMenu}
          isMenuOpen={isMenuOpen}
        />
        
        <Navigation
          isOpen={isMenuOpen}
          onClose={closeMenu}
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />

        <MainContent>
          <section id="home">
            <About onSectionChange={handleSectionChange} />
          </section>
          
          <section id="skills">
            <Skills onSectionChange={handleSectionChange} />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
        </MainContent>

        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App
