import { useState, useEffect, useCallback, useMemo } from 'react';
import githubService from '../services/githubService';

export const useGitHubRepositories = (initialFilters = {}) => {
  const [repositories, setRepositories] = useState([]);
  const [filteredRepositories, setFilteredRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [stats, setStats] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    language: '',
    excludeForks: true,
    excludeArchived: true,
    sortBy: 'updated',
    sortDirection: 'desc',
    topics: [],
    ...initialFilters
  });

  // Busca dados do GitHub
  const fetchRepositories = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      // console.log('🔄 GitHub: Iniciando busca de repositórios...');

      // Busca repositórios e informações do usuário em paralelo
      const [reposData, userData] = await Promise.all([
        githubService.getRepositories(),
        githubService.getUserInfo()
      ]);

      // console.log('📊 GitHub: Dados recebidos:', {
      //   repos: reposData?.length,
      //   user: userData?.login
      // });

      // Formata repositórios para o formato do portfolio
      const formattedRepos = reposData.map(repo =>
        githubService.formatRepositoryForPortfolio(repo)
      );

      // console.log('✅ GitHub: Repositórios formatados:', formattedRepos.length);

      setRepositories(formattedRepos);
      setUserInfo(userData);

      // Busca estatísticas
      const statsData = await githubService.getRepositoriesStats();
      setStats(statsData);

    } catch (err) {
      console.error('❌ GitHub Error:', err);
      setError(err.message || 'Erro ao carregar repositórios do GitHub');
    } finally {
      setLoading(false);
    }
  }, []);

  // Aplica filtros nos repositórios
  const applyFilters = useCallback(() => {
    let filtered = [...repositories];

    // console.log('🔍 Aplicando filtros:', {
    //   totalRepos: repositories.length,
    //   filters
    // });

    // Filtro por busca (nome e descrição)
    if (filters.search.trim()) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(repo =>
        repo.title.toLowerCase().includes(searchTerm) ||
        repo.description.toLowerCase().includes(searchTerm) ||
        repo.name.toLowerCase().includes(searchTerm)
      );
    }

    // Filtro por linguagem
    if (filters.language) {
      filtered = filtered.filter(repo => repo.language === filters.language);
    }

    // Filtro para excluir forks
    if (filters.excludeForks) {
      filtered = filtered.filter(repo => !repo.isFork);
    }

    // Filtro para excluir arquivados
    if (filters.excludeArchived) {
      filtered = filtered.filter(repo => !repo.isArchived);
    }

    // Filtro por tópicos
    if (filters.topics.length > 0) {
      filtered = filtered.filter(repo =>
        filters.topics.some(topic => repo.topics.includes(topic))
      );
    }

    // Ordenação
    filtered.sort((a, b) => {
      let valueA, valueB;

      switch (filters.sortBy) {
        case 'name':
          valueA = a.title.toLowerCase();
          valueB = b.title.toLowerCase();
          break;
        case 'stars':
          valueA = a.stars;
          valueB = b.stars;
          break;
        case 'forks':
          valueA = a.forks;
          valueB = b.forks;
          break;
        case 'created':
          valueA = new Date(a.created_at);
          valueB = new Date(b.created_at);
          break;
        case 'updated':
        default:
          valueA = new Date(a.updated_at);
          valueB = new Date(b.updated_at);
          break;
      }

      if (filters.sortDirection === 'asc') {
        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
      } else {
        return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
      }
    });

    // console.log('✅ Filtros aplicados:', { filteredCount: filtered.length });
    setFilteredRepositories(filtered);
  }, [repositories, filters]);

  // Aplicar filtros quando repositórios ou filtros mudarem
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  // Buscar repositórios na montagem do componente
  useEffect(() => {
    fetchRepositories();
  }, [fetchRepositories]);

  // Função para atualizar filtros
  const updateFilters = useCallback((newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  // Função para resetar filtros
  const resetFilters = useCallback(() => {
    setFilters({
      search: '',
      language: '',
      excludeForks: true,
      excludeArchived: true,
      sortBy: 'updated',
      sortDirection: 'desc',
      topics: []
    });
  }, []);

  // Função para recarregar dados
  const refresh = useCallback(() => {
    githubService.clearCache();
    fetchRepositories();
  }, [fetchRepositories]);

  // Estatísticas computadas dos repositórios filtrados
  const filteredStats = useMemo(() => {
    if (!filteredRepositories.length) return null;

    const languages = {};
    const topics = {};
    let totalStars = 0;
    let totalForks = 0;

    filteredRepositories.forEach(repo => {
      totalStars += repo.stars;
      totalForks += repo.forks;

      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }

      repo.topics.forEach(topic => {
        topics[topic] = (topics[topic] || 0) + 1;
      });
    });

    return {
      totalRepos: filteredRepositories.length,
      totalStars,
      totalForks,
      languages,
      topics,
      topLanguages: Object.entries(languages)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5),
      topTopics: Object.entries(topics)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10)
    };
  }, [filteredRepositories]);

  // Lista de linguagens únicas para filtros
  const availableLanguages = useMemo(() => {
    const languages = new Set();
    repositories.forEach(repo => {
      if (repo.language) languages.add(repo.language);
    });
    return Array.from(languages).sort();
  }, [repositories]);

  // Lista de tópicos únicos para filtros
  const availableTopics = useMemo(() => {
    const topics = new Set();
    repositories.forEach(repo => {
      repo.topics.forEach(topic => topics.add(topic));
    });
    return Array.from(topics).sort();
  }, [repositories]);

  return {
    // Dados
    repositories: filteredRepositories,
    allRepositories: repositories,
    userInfo,
    stats,
    filteredStats,

    // Estados
    loading,
    error,
    filters,

    // Opções para filtros
    availableLanguages,
    availableTopics,

    // Ações
    updateFilters,
    resetFilters,
    refresh,

    // Funções utilitárias
    hasRepositories: filteredRepositories.length > 0,
    isEmpty: !loading && filteredRepositories.length === 0,
    isFiltered: Object.values(filters).some(value =>
      Array.isArray(value) ? value.length > 0 :
        typeof value === 'boolean' ? value !== true :
          value !== ''
    )
  };
};

export default useGitHubRepositories;