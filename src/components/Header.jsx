import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition, useWindowSize } from '../hooks';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.$scrolled ? props.theme.colors.overlayDark : 'transparent'};
  border-bottom: ${props => props.$scrolled ? `3px solid ${props.theme.colors.text}` : 'none'};
  transition: all 0.5s ease;
  padding: ${props => props.theme.spacing.md};

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    position: relative;
    background: transparent;
    border: none;
    padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.xl};
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const AvatarContainer = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.spacing.lg};
  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 0;
  }
`;

const AvatarBorder = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  padding: 8px;
  background: conic-gradient(from 0deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.primary});
  animation: ${props => props.theme.animations.duration.slow} linear infinite rotate;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    width: 60px;
    height: 60px;
    border-width: 2px;
    padding: 4px;
  }

  &:hover {
    box-shadow: ${props => props.theme.shadows.neon};
  }
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background: ${props => props.theme.colors.backgroundAlt};
`;

const TitleContainer = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    flex: 1;
    margin-left: ${props => props.theme.spacing.md};
  }
`;

const MainTitle = styled(motion.h1)`
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: 1.2rem;
    margin-bottom: 0;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.8em;
    color: ${props => props.theme.colors.primary};
  }

  &::before {
    content: '<';
    left: -1.2em;
  }

  &::after {
    content: '/>';
    right: -1.5em;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 400;
  color: ${props => props.theme.colors.textMuted};
  margin: 0;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: 0.9rem;
  }

  &::after {
    content: '█';
    animation: ${props => props.theme.animations.duration.slow} infinite blink;
    margin-left: 0.1em;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0.5rem;
  margin: -0.5rem;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    display: block;
  }

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  .material-symbols-outlined {
    font-size: inherit;
  }
`;

const GoTopButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1001;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: all 1s ease;

  &:hover {
    background: ${props => props.theme.colors.secondary};
    transform: scale(1.1);
    box-shadow: ${props => props.theme.shadows.neon};
  }

  i {
    font-size: 1.2rem;
  }
`;

const Header = ({ onMenuToggle, isMenuOpen }) => {
  const scrollPosition = useScrollPosition();
  const { width } = useWindowSize();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showGoTop, setShowGoTop] = useState(false);
  const isMobile = width < 980;

  useEffect(() => {
    setIsScrolled(scrollPosition > 100);
    setShowGoTop(scrollPosition > 300);
  }, [scrollPosition]);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const avatarVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 1,
        ease: "backOut"
      }
    },
    hover: {
      transition: { duration: 1 }
    }
  };

  return (
    <>
      <HeaderContainer $scrolled={isScrolled && isMobile}>
        <HeaderContent>
          <AvatarContainer onClick={goToTop}>
            <AvatarBorder
              variants={avatarVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Avatar 
                src="/images/avatar.jpg" 
                alt="Daniel Neitzel" 
                loading="eager"
              />
            </AvatarBorder>
          </AvatarContainer>

          <TitleContainer>
            <MainTitle
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              Daniel Neitzel
            </MainTitle>
            <Subtitle
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              Desenvolvedor Front-End
            </Subtitle>
          </TitleContainer>

          {isMobile && (
            <MenuButton onClick={onMenuToggle}>
              <span className="material-symbols-outlined">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </MenuButton>
          )}
        </HeaderContent>
      </HeaderContainer>

      <AnimatePresence>
        {showGoTop && (
          <GoTopButton
            onClick={goToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
          </GoTopButton>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;