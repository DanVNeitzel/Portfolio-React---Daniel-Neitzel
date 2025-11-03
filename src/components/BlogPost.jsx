import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Section, Title, Text } from '../styles/GlobalStyles';
import { blogPosts } from '../data/blogPosts';

const BlogPostSection = styled(Section)`
  background: ${props => props.theme.colors.background};
  padding: 2rem 0;
  min-height: 100vh;
  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 7rem 0!important;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing.xl};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  }

  i {
  font-size: 0.9rem;
  }
`;

const PostHeader = styled.div`
  margin-bottom: ${props => props.theme.spacing.xxl};
  text-align: center;
`;

const PostImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.strong};
`;

const PostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
  font-size: 2rem;
  }
`;

const PostMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.xl};
  font-size: 1rem;
  color: ${props => props.theme.colors.textMuted};
`;

const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.xxl};
`;

const PostTag = styled.span`
  background: ${props => props.theme.colors.backgroundAlt};
  color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${props => props.theme.colors.border};
`;

const ShareButton = styled.button`
  background: ${props => props.theme.colors.backgroundAlt};
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  margin-top: ${props => props.theme.spacing.md};

  &:hover {
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  transform: translateY(-2px);
  box-shadow: ${props => props.theme.shadows.medium};
  }

  &:active {
  transform: translateY(0);
  }

  i {
  font-size: 1rem;
  }

  &.copied {
  background: ${props => props.theme.colors.success || '#4CAF50'};
  color: white;
  border-color: ${props => props.theme.colors.success || '#4CAF50'};
  }
`;

const ShareSection = styled.div`
  display: flex;
  justify-content: center;
  margin: ${props => props.theme.spacing.xl} 0;
  padding: ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.backgroundAlt};
  border-radius: 12px;
  border: 1px solid ${props => props.theme.colors.border};
`;

const PostContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text};

  h1, h2, h3, h4, h5, h6 {
  margin-top: ${props => props.theme.spacing.xxl};
  margin-bottom: ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;
  }

  h1 { font-size: 2rem; }
  h2 { font-size: 1.8rem; }
  h3 { font-size: 1.5rem; }
  h4 { font-size: 1.3rem; }
  h5 { font-size: 1.2rem; }
  h6 { font-size: 1.1rem; }

  p {
  margin-bottom: ${props => props.theme.spacing.lg};
  text-align: justify;
  }

  ul, ol {
  margin-bottom: ${props => props.theme.spacing.lg};
  padding-left: ${props => props.theme.spacing.xl};
  }

  li {
  margin-bottom: ${props => props.theme.spacing.sm};
  }

  code {
  background: ${props => props.theme.colors.backgroundAlt};
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.9em;
  border: 1px solid ${props => props.theme.colors.border};
  }

  pre {
  background: ${props => props.theme.colors.backgroundAlt};
  padding: ${props => props.theme.spacing.lg};
  border-radius: 8px;
  overflow-x: auto;
  margin: ${props => props.theme.spacing.lg} 0;
  border: 1px solid ${props => props.theme.colors.border};

  code {
  background: none;
  padding: 0;
  border: none;
  }
  }

  blockquote {
  border-left: 4px solid ${props => props.theme.colors.primary};
  padding-left: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.lg} 0;
  font-style: italic;
  color: ${props => props.theme.colors.textMuted};
  background: ${props => props.theme.colors.backgroundAlt};
  padding: ${props => props.theme.spacing.md};
  border-radius: 0 8px 8px 0;
  }

  img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: ${props => props.theme.spacing.lg} 0;
  box-shadow: ${props => props.theme.shadows.medium};
  }

  table {
  width: 100%;
  border-collapse: collapse;
  margin: ${props => props.theme.spacing.lg} 0;
  background: ${props => props.theme.colors.backgroundAlt};
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.border};
  }

  th, td {
  padding: ${props => props.theme.spacing.md};
  text-align: left;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  }

  th {
  background: ${props => props.theme.colors.background};
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
  font-size: 1rem;

  h1 { font-size: 1.8rem; }
  h2 { font-size: 1.6rem; }
  h3 { font-size: 1.4rem; }
  }
`;

const CodeBlock = styled.div`
  background: ${props => props.theme.colors.backgroundAlt};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  margin: ${props => props.theme.spacing.xl} 0;
  overflow: hidden;
  position: relative;

  &::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${props => props.theme.colors.gradientText};
  }
`;

const CodeBlockHeader = styled.div`
  background: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.textMuted};
`;

const CodeBlockContent = styled.pre`
  background: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.lg};
  margin: 0;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.text};
`;

const CopyButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  padding: ${props => props.theme.spacing.xs};
  border-radius: 4px;
  font-size: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
  background: ${props => props.theme.colors.backgroundAlt};
  color: ${props => props.theme.colors.text};
  }

  i {
  font-size: 0.9rem;
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 2rem 0;
  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 7rem 0!important;
  }
`;

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const [linkCopied, setLinkCopied] = useState(false);

  useEffect(() => {
  if (post) {
  document.title = `${post.title} - Daniel Neitzel`;
  } else {
  document.title = 'Artigo não encontrado - Daniel Neitzel';
  }

  // Scroll to top when component mounts
  window.scrollTo(0, 0);
  }, [post]);

  const copyShareLink = async () => {
  try {
  const currentUrl = window.location.href;
  await navigator.clipboard.writeText(currentUrl);
  setLinkCopied(true);
  
  // Reset the copied state after 3 seconds
  setTimeout(() => {
  setLinkCopied(false);
  }, 3000);
  } catch (err) {
  console.error('Erro ao copiar link:', err);
  // Fallback para navegadores mais antigos
  const textArea = document.createElement('textarea');
  textArea.value = window.location.href;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  setLinkCopied(true);
  setTimeout(() => {
  setLinkCopied(false);
  }, 3000);
  }
  };

  if (!post) {
  return (
  <BlogPostSection>
  <Container>
  <NotFound>
  <Title $gradient>Artigo não encontrado</Title>
  <Text>O artigo que você está procurando não existe ou foi removido.</Text>
  <BackButton to="/#blog">
  <i className="fa fa-arrow-left"></i>
  Voltar ao Blog
  </BackButton>
  </NotFound>
  </Container>
  </BlogPostSection>
  );
  }

  const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
  });
  };

  const renderContent = (content) => {
  // Dividir o conteúdo por blocos de código
  const parts = content.split(/(```[\s\S]*?```)/g);
  const elements = [];

  parts.forEach((part, index) => {
  if (part.startsWith('```') && part.endsWith('```')) {
  // É um bloco de código
  const codeContent = part.slice(3, -3).trim();
  const lines = codeContent.split('\n');
  const firstLine = lines[0]?.trim() || '';

  // Verificar se a primeira linha é uma linguagem
  const language = firstLine.match(/^(\w+)$/) ? firstLine : '';
  const code = language ? lines.slice(1).join('\n') : codeContent;

  elements.push(
  <CodeBlock key={`code-${index}`}>
  <CodeBlockHeader>
  <span>{language || 'Código'}</span>
  <CopyButton
  onClick={() => {
  navigator.clipboard.writeText(code);
  }}
  title="Copiar código"
  >
  <i className="fa fa-copy"></i>
  </CopyButton>
  </CodeBlockHeader>
  <CodeBlockContent>
  <code>{code}</code>
  </CodeBlockContent>
  </CodeBlock>
  );
  } else if (part.trim()) {
  // É texto normal - dividir por quebras de linha duplas
  const paragraphs = part.split('\n\n').filter(p => p.trim());
  paragraphs.forEach((paragraph, pIndex) => {
  if (paragraph.trim()) {
  // Verificar se é um cabeçalho
  if (paragraph.startsWith('## ')) {
  const headerText = paragraph.replace(/^##\s/, '');
  elements.push(
  <h2 key={`text-${index}-${pIndex}`}>{headerText}</h2>
  );
  }
  // Verificar se é uma citação
  else if (paragraph.startsWith('> ')) {
  elements.push(
  <blockquote key={`text-${index}-${pIndex}`}>
  {paragraph.replace(/^>\s?/, '')}
  </blockquote>
  );
  }
  // Verificar se é uma lista
  else if (paragraph.includes('\n- ') || /^\d+\.\s/.test(paragraph.split('\n')[0])) {
  const listItems = paragraph.split('\n').filter(item => item.trim());
  const isOrdered = /^\d+\.\s/.test(listItems[0]);

  if (isOrdered) {
  elements.push(
  <ol key={`text-${index}-${pIndex}`}>
  {listItems.map((item, itemIndex) => (
  <li key={`item-${itemIndex}`}>{item.replace(/^\d+\.\s/, '')}</li>
  ))}
  </ol>
  );
  } else {
  elements.push(
  <ul key={`text-${index}-${pIndex}`}>
  {listItems.map((item, itemIndex) => (
  <li key={`item-${itemIndex}`}>{item.replace(/^- /, '')}</li>
  ))}
  </ul>
  );
  }
  }
  // Parágrafo normal
  else {
  elements.push(<p key={`text-${index}-${pIndex}`}>{paragraph}</p>);
  }
  }
  });
  }
  });

  return elements;
  };

  return (
  <BlogPostSection>
  <Container>
  <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  >
  <BackButton to="/#blog">
  <i className="fa fa-arrow-left"></i>
  Voltar ao Blog
  </BackButton>

  <PostHeader>
  <PostImage src={post.image} alt={post.title} />
  <PostTitle>{post.title}</PostTitle>
  <PostMeta>
  <span>
  <i className="fa fa-calendar"></i> {formatDate(post.date)}
  </span>
  <span>
  <i className="fa fa-clock"></i> {post.readTime}
  </span>
  <PostAuthor>
  <i className="fa fa-user"></i>
  <span>{post.author}</span>
  </PostAuthor>
  </PostMeta>
  <PostTags>
  {post.tags.map((tag, index) => (
  <PostTag key={index}>{tag}</PostTag>
  ))}
  </PostTags>
  
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <ShareButton 
  onClick={copyShareLink}
  className={linkCopied ? 'copied' : ''}
  title="Copiar link do artigo"
  >
  <i className={linkCopied ? 'fa fa-check' : 'fa fa-share'}></i>
  {linkCopied ? 'Link Copiado!' : 'Compartilhar Artigo'}
  </ShareButton>
  </div>
  </PostHeader>

  <PostContent>
  {renderContent(post.content)}
  
  <ShareSection>
  <ShareButton 
  onClick={copyShareLink}
  className={linkCopied ? 'copied' : ''}
  title="Copiar link do artigo"
  >
  <i className={linkCopied ? 'fa fa-check' : 'fa fa-share'}></i>
  {linkCopied ? 'Link Copiado!' : 'Compartilhar Artigo'}
  </ShareButton>
  </ShareSection>
  </PostContent>
  </motion.div>
  </Container>
  </BlogPostSection>
  );
};

export default BlogPost;