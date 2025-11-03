import styled, { createGlobalStyle, keyframes } from 'styled-components';

// Animações globais
const fadeIn = keyframes`
  from {
  opacity: 0;
  transform: translateY(20px);
  }
  to {
  opacity: 1;
  transform: translateY(0);
  }
`;

const slideInRight = keyframes`
  from {
  transform: translateX(100%);
  }
  to {
  transform: translateX(0);
  }
`;

const slideInLeft = keyframes`
  from {
  transform: translateX(-100%);
  }
  to {
  transform: translateX(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
  opacity: 1;
  }
  50% {
  opacity: 0.7;
  }
`;

const rotate = keyframes`
  from {
  transform: rotate(0deg);
  }
  to {
  transform: rotate(360deg);
  }
`;

const shockwave = keyframes`
  0% {
  transform: scale(1);
  box-shadow: 0 0 0 0 rgba(91, 255, 139, 0.7);
  }
  70% {
  transform: scale(1.05);
  box-shadow: 0 0 0 10px rgba(91, 255, 139, 0);
  }
  100% {
  transform: scale(1);
  box-shadow: 0 0 0 0 rgba(91, 255, 139, 0);
  }
`;

// Global Styles
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  html {
  scroll-behavior: smooth;
  font-size: 16px;
  }

  body {
  font-family: ${props => props.theme.fonts.primary};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  body.no-scroll {
  overflow: hidden;
  }

  a {
  color: inherit;
  text-decoration: none;
  }

  button {
  border: none;
  background: none;
  cursor: pointer;
  font-family: inherit;
  }

  img {
  max-width: 100%;
  height: auto;
  }

  // Utilitários
  .hide {
  display: none !important;
  }

  .gradient-text {
  background: ${props => props.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  }

  .animate-fade-in {
  animation: ${fadeIn} 0.8s ease-out;
  }

  .animate-slide-in-right {
  animation: ${slideInRight} 0.6s ease-out;
  }

  .animate-slide-in-left {
  animation: ${slideInLeft} 0.6s ease-out;
  }

  .animate-pulse {
  animation: ${pulse} 2s infinite;
  }

  .animate-rotate {
  animation: ${rotate} 2s linear infinite;
  }

  .animate-shockwave {
  animation: ${shockwave} 1s ease-out;
  }

  // Scrollbar personalizada
  ::-webkit-scrollbar {
  width: 8px;
  }

  ::-webkit-scrollbar-track {
  background: ${props => props.theme.colors.backgroundAlt};
  }

  ::-webkit-scrollbar-thumb {
  background: ${props => props.theme.colors.primary};
  border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
  background: ${props => props.theme.colors.secondary};
  }
`;

// Componentes styled reutilizáveis
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 0 ${props => props.theme.spacing.md};

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
  }
`;

export const Section = styled.section`
  padding: ${props => props.theme.spacing.xxl} 0;
  min-height: ${props => props.fullHeight ? '100vh' : 'auto'};
  display: ${props => props.flex ? 'flex' : 'block'};
  align-items: ${props => props.center ? 'center' : 'stretch'};
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.minWidth || '300px'}, 1fr));
  gap: ${props => props.gap || props.theme.spacing.lg};
  margin: ${props => props.margin || '0'};
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'flex-start'};
  gap: ${props => props.gap || '0'};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
`;

export const Button = styled.button`
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
  text-transform: uppercase;
  background: ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 0.25rem;
  border: solid 0.125rem ${props => props.theme.colors.text};
  transition: all 0.25s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
  background: transparent;
  color: ${props => props.theme.colors.text};
  box-shadow: 0.3rem 0.3rem ${props => props.theme.colors.text};
  transform: translate(-0.1rem, -0.1rem);
  }

  &:active {
  transform: translate(0, 0);
  box-shadow: 0.1rem 0.1rem ${props => props.theme.colors.text};
  }

  &.gradient {
  background: ${props => props.theme.colors.gradientText};
  border-color: transparent;
  color: ${props => props.theme.colors.background};
  
  &:hover {
  background: transparent;
  color: #ffffff;
  border-color: ${props => props.theme.colors.primary};
  }
  }
`;

export const Title = styled.h1`
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacing.lg};
  background: ${props => props.$gradient ? props.theme.colors.gradientText : 'none'};
  -webkit-background-clip: ${props => props.$gradient ? 'text' : 'none'};
  -webkit-text-fill-color: ${props => props.$gradient ? 'transparent' : 'inherit'};
  background-clip: ${props => props.$gradient ? 'text' : 'none'};
`;

export const Subtitle = styled.h2`
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing.md};
  background: ${props => props.$gradient ? props.theme.colors.gradientText : 'none'};
  -webkit-background-clip: ${props => props.$gradient ? 'text' : 'none'};
  -webkit-text-fill-color: ${props => props.$gradient ? 'transparent' : 'inherit'};
  background-clip: ${props => props.$gradient ? 'text' : 'none'};
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.muted ? props.theme.colors.textMuted : props.theme.colors.text};
`;

export const Card = styled.div`
  background: ${props => props.theme.colors.backgroundAlt};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.medium};
  transition: all 0.3s ease;
  border: 1px solid ${props => props.theme.colors.border};

  &:hover {
  transform: translateY(-5px);
  box-shadow: ${props => props.theme.shadows.strong};
  border-color: ${props => props.theme.colors.primary};
  }
`;

// Animations exports
export const animations = {
  fadeIn,
  slideInRight,
  slideInLeft,
  pulse,
  rotate,
  shockwave
};