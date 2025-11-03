// Função para gerar slug a partir do título
const generateSlug = (title) => {
  return title
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '') // Remove acentos
  .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
  .replace(/\s+/g, '-') // Substitui espaços por hífens
  .replace(/-+/g, '-') // Remove hífens consecutivos
  .trim()
  .replace(/^-|-$/g, ''); // Remove hífens do início e fim
};

export const blogPosts = [
  {
  id: 7,
  title: 'Angular 21: Novidades e Vantagens da Nova Versão',
  slug: generateSlug('Angular 21: Novidades e Vantagens da Nova Versão'),
  excerpt: 'Explore as principais novidades do Angular 21, incluindo melhorias de performance, novos recursos e ferramentas que tornam o desenvolvimento ainda mais eficiente.',
  content: `O Angular 21 traz uma série de melhorias significativas que consolidam ainda mais sua posição como um dos frameworks mais poderosos para desenvolvimento web. Vamos explorar as principais novidades e vantagens desta versão.

## 🚀 Melhorias de Performance

### Standalone Components por Padrão

O Angular 21 torna os Standalone Components a abordagem padrão, eliminando a necessidade de módulos NgModules para casos simples:

\`\`\`typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  template: \`
  <div class="profile">
  <h2>{{ user.name }}</h2>
  <p>{{ user.email }}</p>
  </div>
  \`
})
export class UserProfileComponent {
  user = { name: 'João Silva', email: 'joao@example.com' };
}
\`\`\`

### Lazy Loading Aprimorado

O novo sistema de lazy loading permite carregamento sob demanda mais eficiente:

\`\`\`typescript
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: \`
  <router-outlet></router-outlet>
  \`
})
export class AppComponent {}

export const routes = [
  {
  path: 'dashboard',
  loadComponent: () => import('./dashboard/dashboard.component')
  },
  {
  path: 'admin',
  loadChildren: () => import('./admin/admin.routes')
  }
];
\`\`\`

## ⚡ Novas Funcionalidades

### Signals API

A nova Signals API oferece uma forma mais reativa de gerenciar estado:

\`\`\`typescript
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: \`
  <div>
  <p>Contador: {{ count() }}</p>
  <p>Dobro: {{ doubleCount() }}</p>
  <button (click)="increment()">Incrementar</button>
  </div>
  \`
})
export class CounterComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  increment() {
  this.count.update(value => value + 1);
  }
}
\`\`\`

### Control Flow Syntax

Nova sintaxe mais intuitiva para estruturas de controle:

\`\`\`typescript
@Component({
  template: \`
  @if (user.isLoggedIn) {
  <p>Bem-vindo, {{ user.name }}!</p>
  } @else {
  <p>Por favor, faça login.</p>
  }

  @for (item of items; track item.id) {
  <div>{{ item.name }}</div>
  } @empty {
  <p>Nenhum item encontrado.</p>
  }

  @switch (status) {
  @case ('loading') {
  <p>Carregando...</p>
  }
  @case ('success') {
  <p>Sucesso!</p>
  }
  @default {
  <p>Erro desconhecido.</p>
  }
  }
  \`
})
export class ExampleComponent {
  user = { isLoggedIn: true, name: 'João' };
  items = [{ id: 1, name: 'Item 1' }];
  status = 'success';
}
\`\`\`

## 🛠️ Ferramentas de Desenvolvimento

### Angular DevTools Aprimorado

O Angular DevTools agora inclui:
- **Signal Debugging**: Visualize e depure signals em tempo real
- **Performance Insights**: Métricas detalhadas de performance
- **Component Tree**: Árvore de componentes mais intuitiva

### Angular CLI Melhorado

Novos comandos e flags para maior produtividade:

\`\`\`bash
# Gerar componente standalone
ng generate component user-profile --standalone

# Novo comando para análise de bundle
ng build --analyze-bundle

# Servidor de desenvolvimento com HMR aprimorado
ng serve --hmr
\`\`\`

## 📱 Melhorias em Responsividade

### Viewport Queries

Novo sistema para responsividade baseado em container queries:

\`\`\`typescript
@Component({
  template: \`
  <div class="card" [style.--container-width]="containerWidth()">
  @container (width >= 400px) {
  .card { padding: 2rem; }
  }
  </div>
  \`
})
export class ResponsiveCardComponent {
  containerWidth = signal('100%');
}
\`\`\`

## 🔒 Melhorias de Segurança

### CSP (Content Security Policy) Aprimorado

Suporte nativo para políticas de segurança mais rigorosas:

\`\`\`typescript
// angular.json
{
  "projects": {
  "my-app": {
  "architect": {
  "build": {
  "options": {
  "security": {
  "csp": true,
  "trustedTypes": true
  }
  }
  }
  }
  }
  }
}
\`\`\`

## 📊 Otimizações de Bundle

### Tree Shaking Inteligente

O Angular 21 implementa tree shaking mais agressivo, reduzindo significativamente o tamanho do bundle final.

### Dynamic Imports Aprimorados

Carregamento dinâmico de módulos mais eficiente:

\`\`\`typescript
const routes = [
  {
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  data: { preload: true }
  }
];
\`\`\`

## 🎨 Melhorias na UX/UI

### Angular Material 21

Atualização do Angular Material com novos componentes e temas:

- **Componentes baseados em MDC (Material Design Components)**
- **Temas dinâmicos**
- **Suporte aprimorado a acessibilidade**
- **Novos componentes como bottom sheets e side sheets**

## 🔧 Migração e Compatibilidade

### Ferramenta de Migração Automática

\`\`\`bash
ng update @angular/core @angular/cli --allow-dirty
\`\`\`

### Compatibilidade com Versões Anteriores

O Angular 21 mantém compatibilidade com versões anteriores, facilitando a migração gradual.

## 📈 Benefícios de Performance

- **Bundle size reduzido**: Até 20% menor em aplicações típicas
- **Runtime performance**: Melhorias significativas no Change Detection
- **Memory usage**: Otimizações no gerenciamento de memória
- **Loading speed**: Carregamento inicial mais rápido

## 🚀 Futuro do Angular

O Angular 21 representa um marco importante na evolução do framework, consolidando tendências modernas como:

- **Reatividade aprimorada** com Signals
- **Sintaxe mais intuitiva** com control flow
- **Performance excepcional**
- **Developer experience** superior

## Conclusão

O Angular 21 traz inovações significativas que tornam o desenvolvimento mais eficiente, performático e agradável. A adoção de padrões modernos como Signals e Standalone Components posiciona o Angular como um framework preparado para o futuro do desenvolvimento web.

Se você ainda não migrou, o Angular 21 oferece uma excelente oportunidade para modernizar suas aplicações e aproveitar todas essas melhorias.`,
  date: '2024-11-02',
  author: 'Daniel Neitzel',
  tags: ['Angular', 'Framework', 'JavaScript', 'TypeScript', 'Frontend'],
  readTime: '18 min',
  image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop&crop=center',
  slug: 'angular-21-novidades-vantagens'
  },
  {
  id: 1,
  title: 'Introdução ao React Hooks',
  excerpt: 'Aprenda os conceitos fundamentais dos React Hooks e como eles revolucionaram o desenvolvimento com React.',
  content: `Os React Hooks representam uma das maiores evoluções no ecossistema React desde sua criação. Introduzidos na versão 16.8, eles permitem que você use estado e outras funcionalidades do React sem escrever uma classe.

## O que são Hooks?

Hooks são funções especiais que permitem "conectar-se" aos recursos do React. Eles permitem que você use state e lifecycle methods em componentes funcionais, algo que antes só era possível em componentes de classe.

## useState - Gerenciando Estado

O hook mais básico e importante é o useState. Ele permite adicionar estado local a componentes funcionais:

\`\`\`javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
  <div>
  <p>Você clicou {count} vezes</p>
  <button onClick={() => setCount(count + 1)}>
  Clique aqui
  </button>
  </div>
  );
}
\`\`\`

## useEffect - Efeitos Colaterais

O useEffect permite executar efeitos colaterais em componentes funcionais, substituindo os métodos de lifecycle como componentDidMount, componentDidUpdate e componentWillUnmount.

## Por que Hooks são importantes?

- **Reutilização de lógica**: Hooks permitem extrair lógica stateful de componentes
- **Componentes mais simples**: Menos código boilerplate
- **Melhor composição**: Lógica relacionada fica agrupada
- **Performance**: Melhor otimização automática do React

Os Hooks mudaram fundamentalmente como escrevemos aplicações React, tornando o código mais legível e reutilizável.`,
  date: '2024-11-01',
  author: 'Daniel Neitzel',
  tags: ['React', 'JavaScript', 'Hooks'],
  readTime: '5 min',
  image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=400&fit=crop&crop=center',
  slug: 'introducao-react-hooks'
  },
  {
  id: 2,
  title: 'CSS Grid vs Flexbox: Quando usar cada um?',
  excerpt: 'Uma análise prática sobre quando escolher CSS Grid ou Flexbox para layouts modernos.',
  content: `CSS Grid e Flexbox são duas poderosas ferramentas de layout do CSS moderno. Embora ambos sejam excelentes para criar layouts responsivos, eles servem a propósitos diferentes e são melhores em contextos específicos.

## CSS Grid - Layout Bidimensional

CSS Grid é perfeito para layouts complexos em duas dimensões. Ele trabalha com linhas E colunas simultaneamente, tornando-o ideal para:

- Layouts de página inteira
- Galerias de imagens
- Formulários complexos
- Dashboards e interfaces administrativas

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}
\`\`\`

## Flexbox - Layout Unidimensional

Flexbox brilha quando você precisa controlar o layout em uma única dimensão - seja horizontal ou vertical. É perfeito para:

- Navegação horizontal
- Alinhamento de itens em uma linha
- Componentes individuais
- Layouts simples de uma dimensão

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

## Quando usar cada um?

**Use CSS Grid quando:**
- Você precisa controlar linhas E colunas
- O layout é complexo e bidimensional
- Você quer controle preciso sobre posicionamento

**Use Flexbox quando:**
- Você trabalha com uma dimensão por vez
- Precisa de alinhamento simples
- Quer flexibilidade em tamanhos de itens

## Combinando Grid e Flexbox

A melhor abordagem geralmente é combinar ambos. Use CSS Grid para o layout geral da página e Flexbox para componentes individuais dentro do grid.

> "CSS Grid e Flexbox não são concorrentes, são complementares. Use cada um onde ele se destaca."

Esta combinação oferece o melhor dos dois mundos, criando layouts modernos, responsivos e manuteníveis.`,
  date: '2024-10-25',
  author: 'Daniel Neitzel',
  tags: ['CSS', 'Layout', 'Frontend'],
  readTime: '7 min',
  image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&crop=center',
  slug: 'css-grid-vs-flexbox'
  },
  {
  id: 3,
  title: 'Desenvolvendo PWAs com React',
  excerpt: 'Guia completo para criar Progressive Web Apps usando React e service workers.',
  content: `Progressive Web Apps (PWAs) combinam o melhor da web e das aplicações nativas. Com React, criar PWAs tornou-se mais acessível e poderoso.

## O que é uma PWA?

Uma PWA é uma aplicação web que oferece uma experiência similar a apps nativos, incluindo:

- **Instalabilidade**: Pode ser instalada no dispositivo
- **Offline-first**: Funciona sem conexão
- **Push Notifications**: Notificações push
- **App-like UX**: Navegação e interações nativas

## Service Workers - O Coração da PWA

Service Workers são scripts que rodam em background, permitindo funcionalidades offline e caching inteligente.

\`\`\`javascript
// Exemplo básico de Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
  caches.match(event.request)
  .then((response) => {
  return response || fetch(event.request);
  })
  );
});
\`\`\`

## Implementando PWA com React

### 1. Web App Manifest

Crie um arquivo manifest.json na pasta public:

\`\`\`json
{
  "name": "Minha PWA",
  "short_name": "PWA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [...]
}
\`\`\`

### 2. Service Worker

Use bibliotecas como workbox ou implemente manualmente:

\`\`\`javascript
import { register } from 'register-service-worker';

register('/sw.js', {
  ready() {
  console.log('Service worker is active.');
  },
  cached() {
  console.log('Content has been cached for offline use.');
  }
});
\`\`\`

## Benefícios das PWAs

- **Alcance**: Disponível em qualquer dispositivo com navegador
- **Custo**: Desenvolvimento único para múltiplas plataformas
- **Atualização**: Atualização automática sem App Store
- **Performance**: Cache inteligente e carregamento rápido

## Considerações Finais

PWAs representam o futuro do desenvolvimento web. Com React, você pode criar aplicações que rivalizam com apps nativos em termos de experiência do usuário, mantendo todos os benefícios da web.`,
  date: '2024-10-18',
  author: 'Daniel Neitzel',
  tags: ['PWA', 'React', 'Service Workers'],
  readTime: '10 min',
  image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop&crop=center',
  slug: 'desenvolvendo-pwas-react'
  },
  {
  id: 4,
  title: 'TypeScript para Desenvolvedores JavaScript',
  excerpt: 'Como migrar seus projetos JavaScript para TypeScript de forma gradual e segura.',
  content: `TypeScript é um superset do JavaScript que adiciona tipagem estática opcional. Para desenvolvedores JavaScript experientes, a migração pode parecer intimidante, mas é mais simples do que parece.

## Por que TypeScript?

TypeScript oferece vários benefícios:

- **Captura de erros em tempo de desenvolvimento**
- **Melhor IntelliSense e autocomplete**
- **Refatoração mais segura**
- **Documentação viva através de tipos**
- **Melhor experiência de desenvolvimento**

## Migração Gradual

A beleza do TypeScript é que você pode migrar gradualmente:

### Passo 1: Instalação

\`\`\`bash
npm install --save-dev typescript @types/node
\`\`\`

### Passo 2: Configuração (tsconfig.json)

\`\`\`json
{
  "compilerOptions": {
  "target": "es5",
  "lib": ["dom", "dom.iterable", "es6"],
  "allowJs": true,
  "skipLibCheck": true,
  "esModuleInterop": true,
  "allowSyntheticDefaultImports": true,
  "strict": true,
  "forceConsistentCasingInFileNames": true,
  "noFallthroughCasesInSwitch": true,
  "module": "esnext",
  "moduleResolution": "node",
  "resolveJsonModule": true,
  "isolatedModules": true,
  "noEmit": true,
  "jsx": "react-jsx"
  },
  "include": ["src"]
}
\`\`\`

### Passo 3: Renomeie arquivos

Comece renomeando .js para .tsx (para componentes React) ou .ts (para outros arquivos).

### Passo 4: Adicione tipos gradualmente

\`\`\`typescript
// Antes (JavaScript)
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Depois (TypeScript)
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`

## Conceitos Essenciais

### Interfaces

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function createUser(user: User): User {
  return user;
}
\`\`\`

### Tipos Genéricos

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
\`\`\`

### Union Types

\`\`\`typescript
type Status = "loading" | "success" | "error";

function setStatus(status: Status) {
  // status só pode ser um dos três valores
}
\`\`\`

## Dicas para Migração

1. **Comece pequeno**: Migre um arquivo por vez
2. **Use any temporariamente**: Para código legado complexo
3. **Aproveite o strict mode**: Mas configure gradualmente
4. **Use ferramentas**: ESLint com regras TypeScript
5. **Documente tipos**: Interfaces bem nomeadas servem como documentação

## Conclusão

TypeScript não é apenas sobre tipagem - é sobre escrever código mais robusto e manutenível. A curva de aprendizado vale a pena pelos benefícios de longo prazo em projetos maiores.`,
  date: '2024-10-10',
  author: 'Daniel Neitzel',
  tags: ['TypeScript', 'JavaScript', 'Tipagem'],
  readTime: '8 min',
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&crop=center',
  slug: 'typescript-desenvolvedores-javascript'
  },
  {
  id: 5,
  title: 'Otimizando Performance em React Apps',
  excerpt: 'Técnicas avançadas para melhorar a performance de aplicações React.',
  content: `Performance é crucial para uma boa experiência do usuário. React oferece várias ferramentas e técnicas para otimizar aplicações. Vamos explorar as estratégias mais efetivas.

## 1. React.memo - Memorização de Componentes

Previne re-renders desnecessários de componentes funcionais:

\`\`\`javascript
import React from 'react';

const MyComponent = React.memo(({ data }) => {
  return <div>{data.value}</div>;
});
\`\`\`

## 2. useMemo - Memorização de Valores

Cache valores computados custosos:

\`\`\`javascript
import { useMemo } from 'react';

const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
\`\`\`

## 3. useCallback - Memorização de Funções

Previne criação desnecessária de funções em cada render:

\`\`\`javascript
const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## 4. Code Splitting com React.lazy

Divida seu código em chunks menores:

\`\`\`javascript
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
  <Suspense fallback={<div>Loading...</div>}>
  <OtherComponent />
  </Suspense>
  );
}
\`\`\`

## 5. Virtualização de Listas

Para listas grandes, use bibliotecas como react-window:

\`\`\`javascript
import { FixedSizeList as List } from 'react-window';

const MyList = ({ items }) => (
  <List
  height={400}
  itemCount={items.length}
  itemSize={35}
  >
  {({ index, style }) => <div style={style}>{items[index]}</div>}
  </List>
);
\`\`\`

## 6. Otimização de Imagens

Use lazy loading e formatos modernos:

\`\`\`javascript
import { useState } from 'react';

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
  <img
  src={src}
  alt={alt}
  loading="lazy"
  onLoad={() => setLoaded(true)}
  style={{ opacity: loaded ? 1 : 0.5 }}
  />
  );
};
\`\`\`

## 7. Bundle Analysis

Use ferramentas para analisar o tamanho do bundle:

\`\`\`bash
npm install --save-dev webpack-bundle-analyzer
\`\`\`

## 8. Service Workers para Cache

Implemente caching inteligente para assets estáticos.

## Métricas de Performance

Monitore estas métricas importantes:

- **First Contentful Paint (FCP)**
- **Largest Contentful Paint (LCP)**
- **First Input Delay (FID)**
- **Cumulative Layout Shift (CLS)**

## Ferramentas Úteis

- **React DevTools Profiler**: Para identificar bottlenecks
- **Lighthouse**: Auditoria automática de performance
- **Web Vitals**: Métricas do Google

## Conclusão

Otimização de performance é um processo contínuo. Comece identificando gargalos com ferramentas de profiling, implemente otimizações incrementalmente e sempre meça o impacto das mudanças.`,
  date: '2024-10-05',
  author: 'Daniel Neitzel',
  tags: ['React', 'Performance', 'Otimização'],
  readTime: '12 min',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center',
  slug: 'otimizando-performance-react'
  },
  {
  id: 6,
  title: 'Introdução ao Node.js e Express',
  excerpt: 'Construa sua primeira API REST com Node.js e Express do zero.',
  content: `Node.js revolucionou o desenvolvimento backend, permitindo usar JavaScript tanto no frontend quanto no backend. Express.js é o framework mais popular para construir APIs REST com Node.js.

## O que é Node.js?

Node.js é um runtime JavaScript que permite executar JavaScript fora do navegador. Ele usa o motor V8 do Chrome e oferece APIs para operações de I/O não-bloqueantes.

## Instalação e Setup

\`\`\`bash
# Instalar Node.js
# Baixe do site oficial ou use nvm

# Verificar instalação
node --version
npm --version

# Criar projeto
mkdir minha-api
cd minha-api
npm init -y
\`\`\`

## Primeiro Servidor com Node.js Puro

\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
\`\`\`

## Introdução ao Express

Express simplifica a criação de servidores web:

\`\`\`bash
npm install express
\`\`\`

\`\`\`javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('API rodando na porta 3000');
});
\`\`\`

## Estrutura de uma API REST

### Rotas Básicas

\`\`\`javascript
// GET - Buscar dados
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST - Criar novo recurso
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT - Atualizar recurso existente
app.put('/api/users/:id', (req, res) => {
  const id = req.params.id;
  // Lógica de atualização
  res.json(updatedUser);
});

// DELETE - Remover recurso
app.delete('/api/users/:id', (req, res) => {
  const id = req.params.id;
  // Lógica de remoção
  res.status(204).send();
});
\`\`\`

### Middleware

Middleware são funções que têm acesso ao objeto de requisição, resposta e à próxima função middleware:

\`\`\`javascript
// Middleware para parsing JSON
app.use(express.json());

// Middleware de logging
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.path}\`);
  next();
});

// Middleware de autenticação
const authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Acesso negado');
  next();
};
\`\`\`

## Estrutura do Projeto

Organize seu projeto desta forma:

\`\`\`
meu-projeto/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── app.js
├── package.json
└── server.js
\`\`\`

## Boas Práticas

1. **Separação de responsabilidades**: Controllers, routes, models
2. **Tratamento de erros**: Use middleware de erro
3. **Validação**: Valide entrada de dados
4. **Segurança**: Implemente CORS, helmet, rate limiting
5. **Testes**: Escreva testes para suas rotas
6. **Documentação**: Use Swagger ou similar

## Próximos Passos

- Aprenda sobre bancos de dados (MongoDB, PostgreSQL)
- Implemente autenticação JWT
- Explore frameworks como NestJS
- Estude testes com Jest
- Implemente cache com Redis

Node.js e Express formam uma combinação poderosa para construir APIs modernas e escaláveis.`,
  date: '2024-09-28',
  author: 'Daniel Neitzel',
  tags: ['Node.js', 'Express', 'Backend'],
  readTime: '15 min',
  image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop&crop=center',
  slug: 'introducao-nodejs-express'
  }
];