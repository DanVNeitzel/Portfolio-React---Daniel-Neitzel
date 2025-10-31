import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Section, Button, Title, Text } from '../styles/GlobalStyles';
import { useIntersectionObserver } from '../hooks';

const AboutSection = styled(Section)`
  background: ${props => props.theme.colors.background};
  padding: 6rem 0;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing.xl};
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageContainer = styled(motion.div)`
  order: -1;
  
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    order: 0;
  }
`;

const WorkspaceImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const ContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const Highlight = styled.span`
  background: ${props => props.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${props => props.theme.spacing.md} 0;

  li {
    padding: ${props => props.theme.spacing.xs} 0;
    position: relative;
    padding-left: ${props => props.theme.spacing.lg};

    &::before {
      content: '👉';
      position: absolute;
      left: 0;
      top: ${props => props.theme.spacing.xs};
    }
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.md};
  margin: ${props => props.theme.spacing.xl} 0;
`;

const FeatureCard = styled(motion.div)`
  background: ${props => props.theme.colors.backgroundAlt};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.lg};
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.medium};
  }

  .icon {
    font-size: 1.5rem;
    margin-bottom: ${props => props.theme.spacing.sm};
    color: ${props => props.theme.colors.primary};
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: ${props => props.theme.spacing.sm};
    background: ${props => props.theme.colors.gradientText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textMuted};
    line-height: 1.6;
    margin: 0;
  }
`;

const SpecialtiesContainer = styled.div`
  background: ${props => props.theme.colors.backgroundAlt};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.lg};
  border-left: 4px solid ${props => props.theme.colors.primary};
  margin: ${props => props.theme.spacing.xl} 0;

  h3 {
    margin-bottom: ${props => props.theme.spacing.sm};
    color: ${props => props.theme.colors.primary};
  }

  p {
    margin: 0;
    font-weight: 500;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const About = ({ onSectionChange }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  const [hasAnimated, setHasAnimated] = useState(() => {
    // Verifica se as animações já foram executadas anteriormente
    return localStorage.getItem('about-animated') === 'true';
  });

  // Marca as animações como executadas na primeira vez que ficam visíveis
  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      localStorage.setItem('about-animated', 'true');
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

  const features = [
    {
      icon: "✅",
      title: "Experiência Sólida",
      description: "Mais de 10 anos de experiência como Desenvolvedor Front End com projetos diversos."
    },
    {
      icon: "✅",
      title: "Padrões Web",
      description: "Desenvolvimento seguindo padrões W3C e compatibilidade cross-browser."
    },
    {
      icon: "✅",
      title: "Problem Solver",
      description: "Capacidade de análise e resolução rápida de problemas técnicos complexos."
    },
    {
      icon: "✅",
      title: "Aprendizado Contínuo",
      description: "Adaptação rápida a novas tecnologias e frameworks emergentes."
    }
  ];

  return (
    <AboutSection ref={ref}>
      <Container>
        <motion.div
          variants={shouldShowAnimations ? containerVariants : {}}
          initial={shouldShowAnimations ? "hidden" : "visible"}
          animate={isVisible || hasAnimated ? "visible" : "hidden"}
        >
          <ContentGrid>
            <ImageContainer variants={shouldShowAnimations ? itemVariants : {}}>
              <WorkspaceImage 
                src="/images/workdesk_v2.png" 
                alt="Workspace"
                loading="lazy"
              />
            </ImageContainer>

            <ContentContainer variants={shouldShowAnimations ? itemVariants : {}}>
              <Title $gradient>Um pouco sobre mim...</Title>
              
              <Text>
                Sou um <Highlight>profissional web apaixonado</Highlight>, especializado em desenvolvimento front-end, 
                com profundo conhecimento em design de experiência do usuário e experiência em estratégia de produto.
              </Text>

              <Text>
                O meu objetivo é desenvolver o meu conhecimento de novas e avançadas técnicas de programação, 
                bem como promover a utilização de boas práticas, especialmente aquelas relacionadas com o desenvolvimento web.
              </Text>

              <SkillsList>
                <li>HTML semântico</li>
                <li>JavaScript discreto e bem estruturado</li>
                <li>Acessibilidade e usabilidade da Web</li>
              </SkillsList>

              <Text>
                Meu estilo de trabalho é flexível e gosto de colaborar com os colegas de equipe. 
                Sou um jogador eficaz e trabalhei em estreita colaboração com designers de interação, 
                gerentes de produto, designers visuais, engenheiros de back-end, controle de qualidade 
                e pesquisadores de experiência do usuário.
              </Text>

              <Text>
                Embora minha especialidade seja desenvolvimento front-end, também sou um generalista 
                com experiência em desenvolvimento de banco de dados e back-end 
                <Highlight> (MySQL, Firebase, NodeJS, PHP, Python e Java)</Highlight>.
              </Text>
            </ContentContainer>
          </ContentGrid>

          <motion.div variants={shouldShowAnimations ? itemVariants : {}}>
            <FeatureGrid>
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  variants={shouldShowAnimations ? itemVariants : {}}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </FeatureCard>
              ))}
            </FeatureGrid>
          </motion.div>

          <motion.div variants={shouldShowAnimations ? itemVariants : {}}>
            <SpecialtiesContainer>
              <h3>💡 Especialidades:</h3>
              <p>
                Angular, HTML, CSS, SASS, LESS, JavaScript, React, AngularJS, UX, UI, 
                Responsivo, Mobile, Git, Scrum.
              </p>
            </SpecialtiesContainer>
          </motion.div>

          <motion.div variants={shouldShowAnimations ? itemVariants : {}}>
            <ActionButtons>
              <Button onClick={() => window.open('/CV - Daniel Neitzel Vieira.pdf', '_blank')}>
                Visualizar Currículo Completo
              </Button>
            </ActionButtons>
          </motion.div>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About;