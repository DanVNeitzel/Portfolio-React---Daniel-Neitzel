import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Section, Title, Text } from '../styles/GlobalStyles';
import { useIntersectionObserver } from '../hooks';

const SkillsSection = styled(Section)`
  background: ${props => props.theme.colors.backgroundAlt};
  padding: 2rem 0;
  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 7rem 0!important;
  }
`;

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xxl};
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.xl} 0;
  padding: ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.background};
  border-radius: 12px;
  border: 1px solid ${props => props.theme.colors.border};
`;

const StatItem = styled.div`
  text-align: center;

  .number {
  font-size: 2rem;
  font-weight: 700;
  background: ${props => props.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  }

  .label {
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textMuted};
  margin-top: ${props => props.theme.spacing.xs};
  }
`;

const SpecialtiesContainer = styled.div`
  background: ${props => props.theme.colors.backgroundAlt};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.lg};
  border-left: 4px solid ${props => props.theme.colors.primary};
  margin: ${props => props.theme.spacing.xl} 0;

  h3 {
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.primary};
  }

  .specialties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  }

  .specialty-category {
  h4 {
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.sm};
  font-size: 1.1rem;
  font-weight: 600;
  }

  ul {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
  padding: ${props => props.theme.spacing.xs} 0;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  font-weight: 500;

  &:last-child {
  border-bottom: none;
  }

  &:before {
  content: "▹";
  color: ${props => props.theme.colors.primary};
  margin-right: ${props => props.theme.spacing.sm};
  font-weight: bold;
  }
  }
  }
  }
`;

const SkillCard = styled(motion.div)`
  background: ${props => props.theme.colors.background};
  border-radius: 12px;
  padding: ${props => props.theme.spacing.lg};
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
  border-color: ${props => props.theme.colors.primary};
  transform: translateY(-5px);
  box-shadow: ${props => props.theme.shadows.strong};
  }

  &::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${props => props.theme.colors.gradientText};
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  }

  &:hover::before {
  transform: scaleX(1);
  }
`;

const SkillName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.text};
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
  font-size: 1rem;
  }
`;

const ProgressContainer = styled.div`
  position: relative;
  background: ${props => props.theme.colors.border};
  border-radius: 20px;
  height: 8px;
  overflow: hidden;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: ${props => props.theme.colors.gradientText};
  border-radius: 20px;
  position: relative;

  &::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
  }
`;

const ProgressText = styled.div`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${props => props.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.xl};
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.$active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.$active ? props.theme.colors.background : props.theme.colors.text};
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
  border-color: ${props => props.theme.colors.primary};
  transform: translateY(-2px);
  }
`;

const Skills = ({ onSectionChange }) => {
  const [ref, isVisible] = useIntersectionObserver({
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
  });

  const [hasAnimated, setHasAnimated] = useState(() => {
  // Verifica se as animações já foram executadas anteriormente
  return localStorage.getItem('skills-animated') === 'true';
  });

  // Marca as animações como executadas na primeira vez que ficam visíveis
  useEffect(() => {
  if (isVisible && !hasAnimated) {
  setHasAnimated(true);
  localStorage.setItem('skills-animated', 'true');
  }
  }, [isVisible, hasAnimated]);

  // Se já foi animado, sempre mostra como visível
  const shouldShowAnimations = !hasAnimated;
  const isCurrentlyVisible = hasAnimated ? true : isVisible;

  const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
  opacity: 1,
  transition: {
  duration: 0.6,
  staggerChildren: 0.2
  }
  }
  };

  const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
  opacity: 1,
  y: 0,
  transition: {
  duration: 0.6,
  ease: "easeOut"
  }
  }
  };

  const stats = [
  { number: '10+', label: 'Anos de Experiência' },
  { number: '16', label: 'Tecnologias' },
  { number: '100+', label: 'Projetos' }
  ];

  return (
  <SkillsSection ref={ref}>
  <Container>
  <motion.div
  variants={shouldShowAnimations ? containerVariants : {}}
  initial={shouldShowAnimations ? "hidden" : "visible"}
  animate={isVisible || hasAnimated ? "visible" : "hidden"}
  >
  <motion.div variants={shouldShowAnimations ? itemVariants : {}}>
  <Title $gradient>Especialidades</Title>
  <Text>
  Tecnologias, frameworks e ferramentas que domino para desenvolver soluções web modernas e escaláveis
  </Text>
  </motion.div>

  <motion.div variants={shouldShowAnimations ? itemVariants : {}}>
  <SpecialtiesContainer>
  <h3>Especialidades Técnicas:</h3>
  <div className="specialties-grid">
  <div className="specialty-category">
  <h4>Frameworks & Libraries</h4>
  <ul>
  <li>Angular (v2 até v16)</li>
  <li>React & React Native</li>
  <li>Next.js</li>
  <li>AngularJS</li>
  <li>Ionic/Cordova</li>
  </ul>
  </div>
  <div className="specialty-category">
  <h4>Core Technologies</h4>
  <ul>
  <li>TypeScript</li>
  <li>JavaScript ES6</li>
  <li>HTML5 & CSS3</li>
  <li>SASS/SCSS</li>
  <li>RxJS</li>
  </ul>
  </div>
  <div className="specialty-category">
  <h4>Architecture & Patterns</h4>
  <ul>
  <li>Micro Frontends MFE</li>
  <li>Design Systems</li>
  <li>PWA</li>
  <li>Arquitetura MVC</li>
  </ul>
  </div>
  <div className="specialty-category">
  <h4>Tools & DevOps</h4>
  <ul>
  <li>Git/GitLab</li>
  <li>Jenkins</li>
  <li>CI/CD</li>
  <li>Jest/Karma</li>
  <li>AWS</li>
  </ul>
  </div>
  <div className="specialty-category">
  <h4>Backend & Databases</h4>
  <ul>
  <li>Node.js</li>
  <li>PHP</li>
  <li>MySQL</li>
  <li>API REST</li>
  </ul>
  </div>
  <div className="specialty-category">
  <h4>Design & UX</h4>
  <ul>
  <li>Figma</li>
  <li>Bootstrap</li>
  <li>UX/UI Design</li>
  <li>Metodologias Ágeis</li>
  </ul>
  </div>
  </div>
  </SpecialtiesContainer>
  </motion.div>
  </motion.div>
  </Container>
  </SkillsSection>
  );
};

export default Skills;