import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Section, Title, Text } from '../styles/GlobalStyles';
import { blogPosts } from '../data/blogPosts';

const BlogSection = styled(Section)`
  background: #1a1a1a;
  padding: 2rem 0;
  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 7rem 0!important;
  }
`;

const BlogGrid = styled(motion.div)`
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

const BlogCard = styled(motion.div)`
  background: ${props => props.theme.colors.backgroundAlt};
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  min-height: 350px;
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

const BlogImage = styled.div`
  width: 100%;
  height: 180px;
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

  ${BlogCard}:hover &::after {
  opacity: 1;
  }
`;

const BlogContent = styled.div`
  padding: ${props => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.sm};
  font-size: 0.8rem;
  color: ${props => props.theme.colors.textMuted};
`;

const BlogTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;
`;

const BlogExcerpt = styled.p`
  color: ${props => props.theme.colors.textMuted};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: 0.95rem;
  flex: 1;
`;

const BlogFooter = styled.div`
  margin-top: auto;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.xs};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const Tag = styled.span`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid ${props => props.theme.colors.border};
`;

const ShareButtonCard = styled.button`
  background: transparent;
  color: ${props => props.theme.colors.textMuted};
  border: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.sm};
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:hover {
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border-color: ${props => props.theme.colors.primary};
  }

  &.copied {
  background: ${props => props.theme.colors.success || '#4CAF50'};
  color: white;
  border-color: ${props => props.theme.colors.success || '#4CAF50'};
  }

  i {
  font-size: 0.9rem;
  }
`;

const CodeBlock = styled.div`
  background: ${props => props.theme.colors.backgroundAlt};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  margin: ${props => props.theme.spacing.lg} 0;
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
  padding: ${props => props.theme.spacing.md};
  margin: 0;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
  font-size: 0.9rem;
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

const BlogMenu = () => {
  const [copiedPostId, setCopiedPostId] = useState(null);

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

  const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
  });
  };

  const copyShareLink = async (postSlug) => {
  try {
  const shareUrl = `${window.location.origin}/blog/${postSlug}`;
  await navigator.clipboard.writeText(shareUrl);
  setCopiedPostId(postSlug);
  
  // Reset the copied state after 3 seconds
  setTimeout(() => {
  setCopiedPostId(null);
  }, 3000);
  } catch (err) {
  console.error('Erro ao copiar link:', err);
  // Fallback para navegadores mais antigos
  const textArea = document.createElement('textarea');
  const shareUrl = `${window.location.origin}/blog/${postSlug}`;
  textArea.value = shareUrl;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  setCopiedPostId(postSlug);
  setTimeout(() => {
  setCopiedPostId(null);
  }, 3000);
  }
  };

  return (
  <BlogSection>
  <Container>
  <motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  >
  <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
  <Title $gradient>Meu Blog</Title>
  <Text>
  Compartilhando conhecimento sobre desenvolvimento web, tutoriais e melhores práticas.
  </Text>
  </motion.div>

  <BlogGrid
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  >
  {blogPosts.map((post, index) => (
  <Link key={post.id} to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
  <BlogCard
  variants={itemVariants}
  whileHover={{ scale: 1.02 }}
  >
  <BlogImage src={post.image} />

  <BlogContent>
  <div>
  <BlogMeta>
  <span>
  <i className="fa fa-calendar"></i> {formatDate(post.date)}
  </span>
  <span>
  <i className="fa fa-clock"></i> {post.readTime}
  </span>
  </BlogMeta>

  <BlogTitle>{post.title}</BlogTitle>

  <BlogExcerpt>
  {post.excerpt}
  </BlogExcerpt>
  </div>

  <BlogFooter>
  <TagList>
  {post.tags.slice(0, 3).map((tag, tagIndex) => (
  <Tag key={tagIndex}>{tag}</Tag>
  ))}
  {post.tags.length > 3 && (
  <Tag>+{post.tags.length - 3}</Tag>
  )}
  </TagList>
  
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <ShareButtonCard 
  onClick={(e) => {
  e.preventDefault();
  copyShareLink(post.slug);
  }}
  className={copiedPostId === post.slug ? 'copied' : ''}
  title="Copiar link do artigo"
  >
  <i className={copiedPostId === post.slug ? 'fa fa-check' : 'fa fa-share'}></i>
  </ShareButtonCard>
  </div>
  </BlogFooter>
  </BlogContent>
  </BlogCard>
  </Link>
  ))}
  </BlogGrid>
  </motion.div>
  </Container>
  </BlogSection>
  );
};

export default BlogMenu;