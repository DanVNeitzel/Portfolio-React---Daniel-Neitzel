import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Section, Button, Title, Text } from '../styles/GlobalStyles';
// import { useIntersectionObserver } from '../hooks';
import { useGitHubRepositories } from '../hooks/useGitHubRepositories';

const ProjectsSection = styled(Section)`
  background: ${props => props.theme.colors.background};
  padding: 2rem 0;
  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 7rem 0!important;
  }
`;

const FilterContainer = styled.div`
  background: ${props => props.theme.colors.backgroundAlt};
  border-radius: 12px;
  padding: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.xl};
  border: 1px solid ${props => props.theme.colors.border};
`;

const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.md};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
  grid-template-columns: 1fr;
  }
`;

const FilterInput = styled.input`
  padding: ${props => props.theme.spacing.sm};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 6px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
  transition: border-color 0.3s ease;

  &:focus {
  outline: none;
  border-color: ${props => props.theme.colors.primary};
  }

  &::placeholder {
  color: ${props => props.theme.colors.textMuted};
  }
`;

const FilterSelect = styled.select`
  padding: ${props => props.theme.spacing.sm};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 6px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:focus {
  outline: none;
  border-color: ${props => props.theme.colors.primary};
  }

  option {
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  }
`;

const FilterActions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  align-items: center;
  flex-wrap: wrap;
`;

const FilterChip = styled.button`
  background: ${props => props.$active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.$active ? props.theme.colors.background : props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};

  &:hover {
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  transform: translateY(-2px);
  box-shadow: ${props => props.theme.shadows.medium};
  }

  &.gradient {
  background: ${props => props.theme.colors.gradient};
  border: none;
  color: ${props => props.theme.colors.background};
  
  &:hover {
  background: ${props => props.theme.colors.gradient};
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: ${props => props.theme.shadows.medium};
  }
  }

  i {
  font-size: 0.9rem;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
  flex-wrap: wrap;
`;

const StatCard = styled.div`
  background: ${props => props.theme.colors.backgroundAlt};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border};
  text-align: center;
  min-width: 120px;

  .number {
  font-size: 1.5rem;
  font-weight: 700;
  background: ${props => props.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  }

  .label {
  font-size: 0.8rem;
  color: ${props => props.theme.colors.textMuted};
  margin-top: ${props => props.theme.spacing.xs};
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.xxl};
  gap: ${props => props.theme.spacing.lg};
`;

const LoadingSkeleton = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin: ${props => props.theme.spacing.xxl} 0;
`;

const SkeletonCard = styled.div`
  background: ${props => props.theme.colors.backgroundAlt};
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.border};
  height: 400px;
  position: relative;

  &::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
  90deg,
  transparent,
  rgba(255, 255, 255, 0.05),
  transparent
  );
  animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
  }
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xxl};
  color: ${props => props.theme.colors.textMuted};

  .icon {
  font-size: 4rem;
  margin-bottom: ${props => props.theme.spacing.lg};
  opacity: 0.5;
  }

  .message {
  font-size: 1.1rem;
  margin-bottom: ${props => props.theme.spacing.lg};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 1fr;
  gap: ${props => props.theme.spacing.xl};
  margin: ${props => props.theme.spacing.xxl} 0;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing.lg};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.backgroundAlt};
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  min-height: 420px;
  height: 100%;
  display: flex;
  flex-direction: column;

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

const ProjectHeader = styled.div`
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.lg} ${props => props.theme.spacing.sm};
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const ProjectContent = styled.div`
  padding: ${props => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.sm};
  font-size: 0.8rem;
  color: ${props => props.theme.colors.textMuted};
`;

const ProjectStats = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  align-items: center;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  font-size: 0.8rem;
  color: ${props => props.theme.colors.textMuted};

  i {
  color: ${props => props.theme.colors.primary};
  }
`;

const LanguageBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${props => props.theme.colors.border};

  &::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.color || props.theme.colors.primary};
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => props.theme.colors.border};
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(91, 255, 139, 0.1), rgba(0, 255, 255, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
  }

  ${ProjectCard}:hover &::after {
  opacity: 1;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.textMuted};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: 0.95rem;
  min-height: 3.2em;
  max-height: 4.8em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  flex: 1;
`;

const ProjectFooter = styled.div`
  margin-top: auto;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.xs};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const TechTag = styled.span`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${props => props.theme.colors.border};
`;

const ProjectActions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
`;

const ActionButton = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.primary};
  background: transparent;
  color: ${props => props.theme.colors.primary};
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};

  &:hover {
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  transform: translateY(-2px);
  }

  i {
  font-size: 0.9rem;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.md};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
  align-items: flex-start;
  padding-top: 1rem;
  }
`;

const ModalContent = styled(motion.div)`
  background: ${props => props.theme.colors.backgroundAlt};
  border-radius: 12px;
  max-width: 1024px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid ${props => props.theme.colors.border};
  position: relative;
  z-index: 10000;
`;

const ModalHeader = styled.div`
  padding: ${props => props.theme.spacing.lg};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
  margin: 0;
  background: ${props => props.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: ${props => props.theme.spacing.xs};
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  }
`;

const ModalBody = styled.div`
  padding: ${props => props.theme.spacing.lg};
`;

const ModalImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ModalActions = styled.div`
  padding: ${props => props.theme.spacing.lg};
  border-top: 1px solid ${props => props.theme.colors.border};
  display: flex;
  gap: ${props => props.theme.spacing.md};
  justify-content: center;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xxl};
  color: ${props => props.theme.colors.textMuted};

  .icon {
  font-size: 4rem;
  margin-bottom: ${props => props.theme.spacing.lg};
  opacity: 0.5;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  justify-content: center;
  margin-top: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing.xl};
  flex-wrap: wrap;
  padding: ${props => props.theme.spacing.md};
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Always show animations on mount, no scroll/lazy logic
  const shouldShowAnimations = true;

  // console.log('🎬 Projects Debug:', { 
  //   isVisible, 
  //   hasAnimated, 
  //   shouldShowAnimations, 
  //   isCurrentlyVisible 
  // });

  const {
    repositories,
    loading,
    error,
    filters,
    updateFilters,
    resetFilters,
    refresh,
    availableLanguages,
    filteredStats,
    hasRepositories,
    isEmpty,
    isFiltered
  } = useGitHubRepositories({
    excludeForks: true,
    excludeArchived: true
  });

  // console.log('🎯 Projects Estado:', { 
  //   loading, 
  //   error, 
  //   repositoriesCount: repositories?.length,
  //   hasRepositories,
  //   isEmpty 
  // });

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

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.classList.add('no-scroll');
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.classList.remove('no-scroll');
  };

  const openLink = (url) => {
    if (url === window.location.href) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleFilterChange = (key, value) => {
    updateFilters({ [key]: value });
  };

  const getLanguageColor = (language) => {
    const colors = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#2b7489',
      'React': '#61dafb',
      'Vue': '#4fc08d',
      'Angular': '#dd0031',
      'Python': '#3572A5',
      'Java': '#b07219',
      'PHP': '#4F5D95',
      'HTML': '#e34c26',
      'CSS': '#1572B6',
      'SCSS': '#c6538c',
      'C#': '#239120',
      'C++': '#f34b7d',
      'Go': '#00ADD8',
      'Rust': '#dea584',
      'Swift': '#ffac45'
    };
    return colors[language] || '#666666';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Loading state
  if (loading) {
    return (
      <ProjectsSection>
        <Container>
          <motion.div
            variants={shouldShowAnimations ? containerVariants : {}}
            initial={shouldShowAnimations ? "hidden" : "visible"}
            animate={"visible"}
          >
            <motion.div variants={shouldShowAnimations ? itemVariants : {}} style={{ textAlign: 'center' }}>
              <Title $gradient>Repositórios GitHub</Title>
              <Text>Carregando repositórios diretamente do GitHub...</Text>
            </motion.div>

            <LoadingContainer>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <i className="fa-brands fa-github" style={{ fontSize: '3rem', color: '#666' }}></i>
              </motion.div>
              <Text>Buscando repositórios...</Text>
            </LoadingContainer>

            <LoadingSkeleton>
              {[...Array(6)].map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </LoadingSkeleton>

            <div>
              <ActionButtons>
                <Button
                  className="gradient"
                  onClick={() => window.open('https://github.com/DanVNeitzel', '_blank')}
                >
                  <i className="fa-brands fa-github"></i> <span>Ver Perfil Completo no GitHub</span>
                </Button>
              </ActionButtons>
            </div>
          </motion.div>
        </Container>
      </ProjectsSection>
    );
  }

  // Error state
  if (error) {
    return (
      <ProjectsSection>
        <Container>
          <motion.div
            variants={shouldShowAnimations ? containerVariants : {}}
            initial={shouldShowAnimations ? "hidden" : "visible"}
            animate={"visible"}
          >
            <motion.div variants={shouldShowAnimations ? itemVariants : {}}>
              <ErrorContainer>
                <div className="icon">⚠️</div>
                <div className="message">Erro ao carregar repositórios do GitHub</div>
                <Text>{error}</Text>
                <Button onClick={refresh} style={{ marginTop: '1rem' }}>
                  <i className="fa fa-refresh"></i> <span>Tentar Novamente</span>
                </Button>
                <Button
                  onClick={() => window.open('https://github.com/DanVNeitzel?tab=repositories', '_blank')}
                  style={{ marginTop: '1rem' }}
                >
                  <i className="fa-brands fa-github"></i> <span>Acessar Diretamente</span>
                </Button>
              </ErrorContainer>
            </motion.div>

            <div>
              <ActionButtons>
                <Button
                  className="gradient"
                  onClick={() => window.open('https://github.com/DanVNeitzel', '_blank')}
                >
                  <i className="fa-brands fa-github"></i> <span>Ver Perfil Completo no GitHub</span>
                </Button>
              </ActionButtons>
            </div>
          </motion.div>
        </Container>
      </ProjectsSection>
    );
  }

  return (
    <ProjectsSection>
      <Container>
        <motion.div
          variants={shouldShowAnimations ? containerVariants : {}}
          initial={shouldShowAnimations ? "hidden" : "visible"}
          animate={"visible"}
        >
          <motion.div variants={shouldShowAnimations ? itemVariants : {}} style={{ textAlign: 'center' }}>
            <Title $gradient>Meus Repositórios GitHub</Title>
            <Text>
              Repositórios atualizados em tempo real diretamente do GitHub.
              Explore os projetos com filtros e visualize detalhes técnicos.
            </Text>
          </motion.div>

          {/* Estatísticas */}
          {filteredStats && (
            <motion.div>
              <StatsContainer style={{ justifyContent: 'center' }}>
                <StatCard>
                  <span className="number">{filteredStats.totalRepos}</span>
                  <span className="label">Repositórios</span>
                </StatCard>
                <StatCard>
                  <span className="number">{filteredStats.totalStars}</span>
                  <span className="label">Stars</span>
                </StatCard>
                <StatCard>
                  <span className="number">{filteredStats.totalForks}</span>
                  <span className="label">Forks</span>
                </StatCard>
                <StatCard>
                  <span className="number">{filteredStats.topLanguages.length}</span>
                  <span className="label">Linguagens</span>
                </StatCard>
              </StatsContainer>
            </motion.div>
          )}
          {/* Filtros */}
          <motion.div>
            <FilterContainer>
              <FilterGrid>
                <FilterInput
                  type="text"
                  placeholder="Buscar repositórios..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                />

                <FilterSelect
                  value={filters.language}
                  onChange={(e) => handleFilterChange('language', e.target.value)}
                >
                  <option value="">Todas as linguagens</option>
                  {availableLanguages.map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </FilterSelect>

                <FilterSelect
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                >
                  <option value="updated">Última atualização</option>
                  <option value="created">Data de criação</option>
                  <option value="name">Nome</option>
                  <option value="stars">Stars</option>
                  <option value="forks">Forks</option>
                </FilterSelect>

                <FilterSelect
                  value={filters.sortDirection}
                  onChange={(e) => handleFilterChange('sortDirection', e.target.value)}
                >
                  <option value="desc">Decrescente</option>
                  <option value="asc">Crescente</option>
                </FilterSelect>
              </FilterGrid>

              <FilterActions>
                <FilterChip
                  $active={filters.excludeForks}
                  className={filters.excludeForks ? 'gradient' : ''}
                  onClick={() => handleFilterChange('excludeForks', !filters.excludeForks)}
                >
                  Excluir Forks
                </FilterChip>
                <FilterChip
                  $active={filters.excludeArchived}
                  className={filters.excludeArchived ? 'gradient' : ''}
                  onClick={() => handleFilterChange('excludeArchived', !filters.excludeArchived)}
                >
                  Excluir Arquivados
                </FilterChip>
                {isFiltered && (
                  <Button className="gradient" onClick={resetFilters} style={{ fontSize: '0.8rem', padding: '0.25rem 0.5rem' }}>
                    Limpar Filtros
                  </Button>
                )}
                <Button className="gradient" onClick={refresh} style={{ fontSize: '0.8rem', padding: '0.25rem 0.5rem' }}>
                  <i className="fa fa-refresh"></i>
                  Atualizar
                </Button>
              </FilterActions>
            </FilterContainer>
          </motion.div>

          {/* Grid de Repositórios */}
          {hasRepositories ? (
            <ProjectsGrid
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {repositories.map((repo, index) => (
                <ProjectCard
                  key={repo.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openProject(repo)}
                >
                  <ProjectHeader>
                    <ProjectMeta>
                      <span>
                        <i className="fa fa-calendar"></i> Criado em {formatDate(repo.created_at)}
                      </span>
                      {repo.language && (
                        <LanguageBadge color={getLanguageColor(repo.language)}>
                          {repo.language}
                        </LanguageBadge>
                      )}
                    </ProjectMeta>

                    <ProjectTitle>{repo.title}</ProjectTitle>

                    <ProjectStats>
                      <StatItem>
                        <i className="fa fa-star"></i>
                        {repo.stars}
                      </StatItem>
                      <StatItem>
                        <i className="fa fa-code-fork"></i>
                        {repo.forks}
                      </StatItem>
                      {repo.size > 0 && (
                        <StatItem>
                          <i className="fa fa-database"></i>
                          {(repo.size / 1024).toFixed(1)}MB
                        </StatItem>
                      )}
                    </ProjectStats>
                  </ProjectHeader>

                  <ProjectContent>
                    <ProjectDescription>
                      {repo.description || 'Sem descrição disponível.'}
                    </ProjectDescription>

                    <ProjectFooter>
                      {repo.technologies.length > 0 && (
                        <TechStack>
                          {repo.technologies.slice(0, 4).map((tech, techIndex) => (
                            <TechTag key={techIndex}>{tech}</TechTag>
                          ))}
                          {repo.technologies.length > 4 && (
                            <TechTag>+{repo.technologies.length - 4}</TechTag>
                          )}
                        </TechStack>
                      )}

                      <ProjectActions>
                        <ActionButton onClick={(e) => {
                          e.stopPropagation();
                          openLink(repo.repo);
                        }}>
                          <i className="fa-brands fa-github"></i><span>Código</span>
                        </ActionButton>
                        {repo.hasPages && (
                          <ActionButton onClick={(e) => {
                            e.stopPropagation();
                            openLink(repo.link);
                          }}>
                            <i className="fa-solid fa-eye"></i> <span>Demo</span>
                          </ActionButton>
                        )}
                        <ActionButton onClick={(e) => {
                          e.stopPropagation();
                          openLink(repo.clone_url);
                        }}>
                          <i className="fa fa-download"></i><span>Clonar</span>
                        </ActionButton>
                      </ProjectActions>
                    </ProjectFooter>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          ) : isEmpty ? (
            <motion.div variants={shouldShowAnimations ? itemVariants : {}}>
              <EmptyState>
                <div className="icon">�</div>
                <h3>Nenhum repositório encontrado</h3>
                <p>
                  {isFiltered
                    ? 'Tente ajustar os filtros para encontrar repositórios.'
                    : 'Não foram encontrados repositórios públicos.'
                  }
                </p>
                {isFiltered && (
                  <Button onClick={resetFilters} style={{ marginTop: '1rem' }}>
                    Limpar Filtros
                  </Button>
                )}
              </EmptyState>
            </motion.div>
          ) : null}

          {/* Botão GitHub sempre visível */}
          <div>
            <ActionButtons>
              <Button
                className="gradient"
                onClick={() => window.open('https://github.com/DanVNeitzel', '_blank')}
              >
                <i className="fa-brands fa-github"></i> <span>Ver Perfil Completo no GitHub</span>
              </Button>
            </ActionButtons>
          </div>
        </motion.div>
      </Container>

      {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <ModalOverlay
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeProject}
            >
              <ModalContent
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <ModalHeader>
                  <h2>{selectedProject.title}</h2>
                  <CloseButton onClick={closeProject}>
                    <i className="fa fa-times"></i>
                  </CloseButton>
                </ModalHeader>

                <ModalBody>
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                      {selectedProject.language && (
                        <LanguageBadge color={getLanguageColor(selectedProject.language)}>
                          {selectedProject.language}
                        </LanguageBadge>
                      )}
                      <StatItem>
                        <i className="fa fa-star"></i>
                        {selectedProject.stars} stars
                      </StatItem>
                      <StatItem>
                        <i className="fa fa-code-fork"></i>
                        {selectedProject.forks} forks
                      </StatItem>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.9rem', color: '#999' }}>
                      <span>
                        <i className="fa fa-calendar"></i> <span>Criado em {formatDate(selectedProject.created_at)}</span>
                      </span>
                      <span>
                        <i className="fa fa-clock"></i> <span>Atualizado em {formatDate(selectedProject.updated_at)}</span>
                      </span>
                    </div>
                  </div>

                  <Text>{selectedProject.description || 'Sem descrição disponível.'}</Text>

                  {selectedProject.technologies.length > 0 && (
                    <div style={{ marginBottom: '1rem' }}>
                      <strong>Tecnologias utilizadas:</strong>
                      <TechStack style={{ marginTop: '0.5rem' }}>
                        {selectedProject.technologies.map((tech, index) => (
                          <TechTag key={index}>{tech}</TechTag>
                        ))}
                      </TechStack>
                    </div>
                  )}

                  {selectedProject.topics.length > 0 && (
                    <div style={{ marginBottom: '1rem' }}>
                      <strong>Tópicos:</strong>
                      <TechStack style={{ marginTop: '0.5rem' }}>
                        {selectedProject.topics.map((topic, index) => (
                          <TechTag key={index} style={{ background: '#333', fontSize: '0.75rem' }}>
                            #{topic}
                          </TechTag>
                        ))}
                      </TechStack>
                    </div>
                  )}

                  <div style={{ padding: '1rem', background: '#1a1a1a', borderRadius: '8px', marginBottom: '1rem' }}>
                    <strong>Informações técnicas:</strong>
                    <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                      <li>Branch padrão: <code>{selectedProject.defaultBranch}</code></li>
                      <li>Tamanho: {(selectedProject.size / 1024).toFixed(1)}MB</li>
                      {selectedProject.hasPages && <li>✅ GitHub Pages disponível</li>}
                      {selectedProject.isArchived && <li>📦 Repositório arquivado</li>}
                      {selectedProject.isFork && <li>🍴 Fork de outro repositório</li>}
                    </ul>
                  </div>
                </ModalBody>

                <ModalActions>
                  <Button onClick={() => openLink(selectedProject.repo)}>
                    <i className="fa-brands fa-github"></i> <span>Ver no GitHub</span>
                  </Button>
                  {selectedProject.hasPages && (
                    <Button onClick={() => openLink(selectedProject.link)}>
                      <i className="fa-solid fa-eye"></i> <span>Ver Demo</span>
                    </Button>
                  )}
                  <Button
                    className="gradient"
                    onClick={() => openLink(selectedProject.clone_url)}
                  >
                    <i className="fa fa-download"></i> <span>Clonar Repositório</span>
                  </Button>
                </ModalActions>
              </ModalContent>
            </ModalOverlay>
          )}
        </AnimatePresence>, document.body)}
    </ProjectsSection>
  );
};

export default Projects;