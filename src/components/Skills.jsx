import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Section, Button, Title, Text } from '../styles/GlobalStyles';
import { useIntersectionObserver } from '../hooks';
import { skills } from '../data/jobs';

const SkillsSection = styled(Section)`
  background: ${props => props.theme.colors.backgroundAlt};
  padding: ${props => props.theme.spacing.xxl} 0;
`;

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xxl};
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 12px;
  margin: ${props => props.theme.spacing.xl} auto;
  display: block;
  box-shadow: ${props => props.theme.shadows.medium};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.xxl} 0;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${props => props.theme.spacing.md};
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

const ActionButtons = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  justify-content: center;
  margin-top: ${props => props.theme.spacing.xxl};
  flex-wrap: wrap;
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

const Skills = ({ onSectionChange }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  const [filter, setFilter] = useState('all');
  const [animatedSkills, setAnimatedSkills] = useState([]);
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

  const categories = {
    all: 'Todas',
    frontend: 'Front-End',
    backend: 'Back-End',
    tools: 'Ferramentas'
  };

  const skillCategories = {
    'HTML5': 'frontend',
    'CSS3': 'frontend',
    'JavaScript': 'frontend',
    'Angular': 'frontend',
    'AngularJS': 'frontend',
    'React / React Native': 'frontend',
    'Bootstrap': 'frontend',
    'Layout Responsivo': 'frontend',
    'PWA': 'frontend',
    'Node.js': 'backend',
    'PHP': 'backend',
    'Java': 'backend',
    'MySQL': 'backend',
    'Firebase': 'backend',
    'Git': 'tools',
    'Testes Unitários': 'tools'
  };

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skillCategories[skill.name] === filter);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedSkills(filteredSkills);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, filteredSkills]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  const stats = [
    { number: '10+', label: 'Anos de Experiência' },
    { number: '16', label: 'Tecnologias' },
    { number: '100+', label: 'Projetos' },
    { number: '99%', label: 'Satisfação' }
  ];

  return (
    <SkillsSection ref={ref}>
      <Container>
        <motion.div
          variants={shouldShowAnimations ? containerVariants : {}}
          initial={shouldShowAnimations ? "hidden" : "visible"}
          animate={isVisible || hasAnimated ? "visible" : "hidden"}
        >
          <HeaderContainer>
            <motion.div variants={shouldShowAnimations ? itemVariants : {}}>
              <HeroImage 
                src="/images/webApp.png" 
                alt="Web Development"
                loading="lazy"
              />
            </motion.div>

            <motion.div variants={shouldShowAnimations ? itemVariants : {}}>
              <Title $gradient>Conhecimentos & Habilidades</Title>
              <Text>
                Tecnologias e ferramentas que domino para criar experiências web excepcionais
              </Text>
            </motion.div>

            <motion.div variants={shouldShowAnimations ? itemVariants : {}}>
              <StatsContainer>
                {stats.map((stat, index) => (
                  <StatItem key={index}>
                    <span className="number">{stat.number}</span>
                    <span className="label">{stat.label}</span>
                  </StatItem>
                ))}
              </StatsContainer>
            </motion.div>
          </HeaderContainer>

          <motion.div variants={shouldShowAnimations ? itemVariants : {}}>
            <CategoryFilter>
              {Object.entries(categories).map(([key, label]) => (
                <FilterButton
                  key={key}
                  $active={filter === key}
                  onClick={() => setFilter(key)}
                >
                  {label}
                </FilterButton>
              ))}
            </CategoryFilter>
          </motion.div>

          <motion.div variants={shouldShowAnimations ? itemVariants : {}}>
            <SkillsGrid>
              {filteredSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  variants={shouldShowAnimations ? itemVariants : {}}
                  whileHover={{ scale: 1.02 }}
                  initial={shouldShowAnimations ? "hidden" : "visible"}
                  animate={isVisible || hasAnimated ? "visible" : "hidden"}
                  transition={{ delay: shouldShowAnimations ? index * 0.1 : 0 }}
                >
                  <SkillName>{skill.name}</SkillName>
                  <ProgressContainer>
                    <ProgressBar
                      variants={progressVariants}
                      custom={skill.level}
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                    />
                  </ProgressContainer>
                  <ProgressText>{skill.level}%</ProgressText>
                </SkillCard>
              ))}
            </SkillsGrid>
          </motion.div>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills;