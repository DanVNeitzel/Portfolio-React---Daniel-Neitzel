// GitHub API Service
const GITHUB_API_BASE_URL = 'https://api.github.com';
const GITHUB_USERNAME = 'DanVNeitzel';

class GitHubService {
  constructor() {
  this.cache = new Map();
  this.cacheTimeout = 5 * 60 * 1000; // 5 minutos
  }

  /**
   * Faz uma requisição para a API do GitHub com cache
   */
  async fetchWithCache(url, options = {}) {
  const cacheKey = url;
  const cached = this.cache.get(cacheKey);
  
  // Verifica se existe cache válido
  if (cached && (Date.now() - cached.timestamp) < this.cacheTimeout) {
  return cached.data;
  }

  try {
  const response = await fetch(url, {
  headers: {
  'Accept': 'application/vnd.github.v3+json',
  'User-Agent': 'Portfolio-React-App',
  ...options.headers
  },
  ...options
  });

  if (!response.ok) {
  throw new Error(`GitHub API Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  
  // Armazena no cache
  this.cache.set(cacheKey, {
  data,
  timestamp: Date.now()
  });

  return data;
  } catch (error) {
  console.error('GitHub API Error:', error);
  
  // Retorna cache expirado se disponível em caso de erro
  if (cached) {
  console.warn('Using expired cache due to API error');
  return cached.data;
  }
  
  throw error;
  }
  }

  /**
   * Busca informações básicas do usuário
   */
  async getUserInfo() {
  const url = `${GITHUB_API_BASE_URL}/users/${GITHUB_USERNAME}`;
  return this.fetchWithCache(url);
  }

  /**
   * Busca todos os repositórios públicos do usuário
   */
  async getRepositories(options = {}) {
  const {
  sort = 'updated',
  direction = 'desc',
  per_page = 100,
  type = 'owner'
  } = options;

  const url = `${GITHUB_API_BASE_URL}/users/${GITHUB_USERNAME}/repos?sort=${sort}&direction=${direction}&per_page=${per_page}&type=${type}`;
  // console.log('🌐 GitHub API URL:', url);
  const result = await this.fetchWithCache(url);
  // console.log('📦 GitHub API Response:', result?.length, 'repositórios');
  return result;
  }

  /**
   * Busca repositórios com filtros avançados
   */
  async getFilteredRepositories(filters = {}) {
  const repos = await this.getRepositories();
  
  return repos.filter(repo => {
  // Filtro por linguagem
  if (filters.language && repo.language !== filters.language) {
  return false;
  }

  // Filtro por fork (excluir forks por padrão)
  if (filters.excludeForks !== false && repo.fork) {
  return false;
  }

  // Filtro por arquivado (excluir arquivados por padrão)
  if (filters.excludeArchived !== false && repo.archived) {
  return false;
  }

  // Filtro por nome/descrição
  if (filters.search) {
  const searchTerm = filters.search.toLowerCase();
  const matchesName = repo.name.toLowerCase().includes(searchTerm);
  const matchesDescription = repo.description?.toLowerCase().includes(searchTerm);
  if (!matchesName && !matchesDescription) {
  return false;
  }
  }

  // Filtro por tópicos
  if (filters.topics && filters.topics.length > 0) {
  const hasMatchingTopic = filters.topics.some(topic => 
  repo.topics?.includes(topic.toLowerCase())
  );
  if (!hasMatchingTopic) {
  return false;
  }
  }

  return true;
  });
  }

  /**
   * Busca linguagens de um repositório específico
   */
  async getRepositoryLanguages(repoName) {
  const url = `${GITHUB_API_BASE_URL}/repos/${GITHUB_USERNAME}/${repoName}/languages`;
  return this.fetchWithCache(url);
  }

  /**
   * Busca commits recentes de um repositório
   */
  async getRepositoryCommits(repoName, limit = 5) {
  const url = `${GITHUB_API_BASE_URL}/repos/${GITHUB_USERNAME}/${repoName}/commits?per_page=${limit}`;
  return this.fetchWithCache(url);
  }

  /**
   * Busca estatísticas gerais dos repositórios
   */
  async getRepositoriesStats() {
  try {
  const repos = await this.getRepositories();
  
  const stats = {
  totalRepos: repos.length,
  totalStars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
  totalForks: repos.reduce((sum, repo) => sum + repo.forks_count, 0),
  languages: {},
  topics: {},
  lastUpdate: null
  };

  // Analisa linguagens mais usadas
  repos.forEach(repo => {
  if (repo.language) {
  stats.languages[repo.language] = (stats.languages[repo.language] || 0) + 1;
  }

  // Analisa tópicos mais usados
  if (repo.topics) {
  repo.topics.forEach(topic => {
  stats.topics[topic] = (stats.topics[topic] || 0) + 1;
  });
  }

  // Data do último update
  const updateDate = new Date(repo.updated_at);
  if (!stats.lastUpdate || updateDate > stats.lastUpdate) {
  stats.lastUpdate = updateDate;
  }
  });

  return stats;
  } catch (error) {
  console.error('Error fetching repository stats:', error);
  return null;
  }
  }

  /**
   * Transforma dados do GitHub no formato do portfolio
   */
  formatRepositoryForPortfolio(repo) {
  return {
  id: repo.id,
  title: this.formatRepositoryName(repo.name),
  name: repo.name,
  description: repo.description || 'Projeto desenvolvido com foco em aprendizado e prática.',
  language: repo.language,
  technologies: this.extractTechnologies(repo),
  stars: repo.stargazers_count,
  forks: repo.forks_count,
  link: repo.homepage || repo.html_url,
  repo: repo.html_url,
  clone_url: repo.clone_url,
  created_at: repo.created_at,
  updated_at: repo.updated_at,
  topics: repo.topics || [],
  size: repo.size,
  isArchived: repo.archived,
  isFork: repo.fork,
  defaultBranch: repo.default_branch,
  hasPages: !!repo.homepage,
  image: this.generateRepositoryImage(repo)
  };
  }

  /**
   * Formata o nome do repositório para exibição
   */
  formatRepositoryName(name) {
  return name
  .split(/[-_]/)
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');
  }

  /**
   * Extrai tecnologias baseado na linguagem e tópicos
   */
  extractTechnologies(repo) {
  const technologies = [];
  
  if (repo.language) {
  technologies.push(repo.language);
  }

  // Mapeia tópicos para tecnologias conhecidas
  const techMap = {
  'react': 'React',
  'vue': 'Vue.js',
  'angular': 'Angular',
  'nodejs': 'Node.js',
  'typescript': 'TypeScript',
  'javascript': 'JavaScript',
  'html': 'HTML5',
  'css': 'CSS3',
  'sass': 'SASS',
  'bootstrap': 'Bootstrap',
  'tailwind': 'Tailwind CSS',
  'webpack': 'Webpack',
  'vite': 'Vite',
  'express': 'Express',
  'mongodb': 'MongoDB',
  'mysql': 'MySQL',
  'postgresql': 'PostgreSQL',
  'firebase': 'Firebase',
  'aws': 'AWS',
  'docker': 'Docker'
  };

  if (repo.topics) {
  repo.topics.forEach(topic => {
  const tech = techMap[topic.toLowerCase()];
  if (tech && !technologies.includes(tech)) {
  technologies.push(tech);
  }
  });
  }

  return technologies;
  }

  /**
   * Gera uma imagem representativa para o repositório
   */
  generateRepositoryImage(repo) {
  // Se tem homepage, pode ter screenshot
  if (repo.homepage) {
  return `/images/projects/${repo.name}.png`;
  }

  // Imagem padrão baseada na linguagem
  const languageImages = {
  'JavaScript': '/images/tech/javascript.png',
  'TypeScript': '/images/tech/typescript.png',
  'React': '/images/tech/react.png',
  'Vue': '/images/tech/vue.png',
  'Angular': '/images/tech/angular.png',
  'Python': '/images/tech/python.png',
  'Java': '/images/tech/java.png',
  'PHP': '/images/tech/php.png',
  'HTML': '/images/tech/html.png',
  'CSS': '/images/tech/css.png'
  };

  return languageImages[repo.language] || '/images/tech/code.png';
  }

  /**
   * Limpa o cache
   */
  clearCache() {
  this.cache.clear();
  }
}

// Instância singleton
export const githubService = new GitHubService();
export default githubService;