import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowSize } from '../hooks';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: none;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
  display: block;
  }
`;

const NavigationContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;
  background: ${props => props.theme.colors.background};
  border-right: 3px solid ${props => props.theme.colors.primary};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.xl} 0;
  box-shadow: ${props => props.theme.shadows.strong};

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
  position: static;
  width: auto;
  height: auto;
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  flex-direction: row;
  justify-content: center;
  margin-top: ${props => props.theme.spacing.lg};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
  display: none;
  }
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
  transform: scale(1.05);
  }
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  justify-content: center;
  align-items: center;
  }
`;

const MenuItem = styled(motion.li)`
  margin: 0;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  &:last-child {
  border-bottom: none;
  }
  }
`;

const MenuLink = styled.a`
  display: block;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  font-size: 1rem;
  border-radius: 4px;
  }

  &:hover {
  background: ${props => props.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transform: translateX(5px);

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
  transform: translateY(-2px);
  background: ${props => props.theme.colors.backgroundAlt};
  -webkit-background-clip: initial;
  -webkit-text-fill-color: initial;
  background-clip: initial;
  color: ${props => props.theme.colors.text};
  }
  }

  &::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: ${props => props.theme.colors.primary};
  transition: all 0.3s ease;
  transform: translateX(-50%);

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
  display: none;
  }
  }

  &:hover::after {
  width: 80%;
  }

  &.active {
  background: ${props => props.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
  background: ${props => props.theme.colors.backgroundAlt};
  -webkit-background-clip: initial;
  -webkit-text-fill-color: initial;
  background-clip: initial;
  color: ${props => props.theme.colors.text};
  }

  &::after {
  width: 80%;
  }
  }
`;

const Navigation = ({ isOpen, onClose, activeSection, onSectionChange, onCVModalOpen }) => {
  const { width } = useWindowSize();
  const isMobile = width < 980;
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
  { id: 'home', label: 'Sobre mim', action: () => handleSectionNavigation('home') },
  { id: 'skills', label: 'Especialidades', action: () => handleSectionNavigation('skills') },
  { id: 'projects', label: 'Meus projetos', action: () => handleSectionNavigation('projects') },
  { id: 'blog', label: 'Blog', action: () => handleSectionNavigation('blog') },
  { id: 'cv', label: <span style={{ background: 'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Visualizar Currículo</span>, action: () => onCVModalOpen() }
  ];

  const containerVariants = {
  hidden: {
  x: '-100%',
  transition: {
  type: 'tween',
  duration: 0.3
  }
  },
  visible: {
  x: 0,
  transition: {
  type: 'tween',
  duration: 0.3,
  staggerChildren: 0.1
  }
  }
  };

  const itemVariants = {
  hidden: {
  x: -20,
  opacity: 0
  },
  visible: {
  x: 0,
  opacity: 1,
  transition: {
  type: 'tween',
  duration: 0.2
  }
  }
  };

  const overlayVariants = {
  hidden: {
  opacity: 0,
  transition: {
  duration: 0.2
  }
  },
  visible: {
  opacity: 1,
  transition: {
  duration: 0.2
  }
  }
  };

  const handleSectionNavigation = (section) => {
  // Se estamos em uma rota de blog (/blog/:slug), navegar para a página principal primeiro
  if (location.pathname.startsWith('/blog/')) {
  navigate('/', { replace: true });
  // Aguardar um pouco para a navegação completar, então fazer scroll
  setTimeout(() => {
  onSectionChange(section);
  }, 100);
  } else {
  // Se já estamos na página principal, apenas fazer scroll
  onSectionChange(section);
  }
  };

  const handleItemClick = (item) => {
  item.action();
  if (isMobile) {
  onClose();
  }
  };

  const handleLogoClick = () => {
  if (location.pathname.startsWith('/blog/')) {
  navigate('/', { replace: true });
  setTimeout(() => {
  onSectionChange('home');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);
  } else {
  onSectionChange('home');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (isMobile) {
  onClose();
  }
  };

  if (isMobile) {
  return (
  <AnimatePresence>
  {isOpen && (
  <>
  <NavigationOverlay
  variants={overlayVariants}
  initial="hidden"
  animate="visible"
  exit="hidden"
  onClick={onClose}
  />
  <NavigationContainer
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  exit="hidden"
  >
  <LogoContainer>
  <Logo
  src="/images/logo.png"
  alt="Logo"
  onClick={handleLogoClick}
  />
  </LogoContainer>

  <MenuList>
  {menuItems.map((item) => (
  <MenuItem
  key={item.id}
  variants={itemVariants}
  >
  <MenuLink
  onClick={() => handleItemClick(item)}
  className={activeSection === item.id ? 'active' : ''}
  >
  {item.label}
  </MenuLink>
  </MenuItem>
  ))}
  </MenuList>
  </NavigationContainer>
  </>
  )}
  </AnimatePresence>
  );
  }

  // Desktop navigation
  return (
  <NavigationContainer>
  <MenuList>
  {menuItems.map((item) => (
  <MenuItem key={item.id}>
  <MenuLink
  onClick={() => handleItemClick(item)}
  className={activeSection === item.id ? 'active' : ''}
  >
  {item.label}
  </MenuLink>
  </MenuItem>
  ))}
  </MenuList>
  </NavigationContainer>
  );
};

export default Navigation;