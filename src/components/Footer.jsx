import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from '../styles/GlobalStyles';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.backgroundAlt};
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.xxl} 0 ${props => props.theme.spacing.lg};
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${props => props.theme.spacing.lg};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  flex-wrap: wrap;
  justify-content: center;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    color: ${props => props.theme.colors.background};
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.medium};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.colors.gradientText};
    transform: scale(0);
    border-radius: 50%;
    transition: transform 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    transform: scale(1);
  }

  i {
    position: relative;
    z-index: 1;
  }

  // Cores específicas para cada rede social
  &.facebook:hover {
    border-color: #1877f2;
    &::before { background: #1877f2; }
  }

  &.instagram:hover {
    border-color: #e4405f;
    &::before { background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); }
  }

  &.github:hover {
    border-color: #333;
    &::before { background: #ffffff; }
  }

  &.linkedin:hover {
    border-color: #0077b5;
    &::before { background: #0077b5; }
  }

  &.steam:hover {
    border-color: #171a21;
    &::before { background: linear-gradient(45deg, #171a21, #66c0f4); }
  }
`;

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  
  .year {
    font-size: 1.5rem;
    font-weight: 700;
    background: ${props => props.theme.colors.gradientText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .text {
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textMuted};
  }
`;

const BackToTop = styled(motion.button)`
  background: none;
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }

  i {
    font-size: 0.8rem;
  }
`;

const QuickInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  margin-bottom: ${props => props.theme.spacing.md};

  .status {
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.xs};
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textMuted};

    .indicator {
      width: 8px;
      height: 8px;
      background: ${props => props.theme.colors.primary};
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  }

  .location {
    font-size: 0.8rem;
    color: ${props => props.theme.colors.textMuted};
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.xs};
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.facebook.com/DanielVNeitzel",
      icon: "fa-brands fa-facebook",
      label: "Facebook",
      className: "facebook"
    },
    {
      href: "https://www.instagram.com/danielneitzel_dev/",
      icon: "fa-brands fa-instagram",
      label: "Instagram",
      className: "instagram"
    },
    {
      href: "https://github.com/DanVNeitzel",
      icon: "fa-brands fa-square-github",
      label: "GitHub",
      className: "github"
    },
    {
      href: "https://www.linkedin.com/in/danielneitzel",
      icon: "fa-brands fa-linkedin",
      label: "LinkedIn",
      className: "linkedin"
    },
    {
      href: "#",
      icon: "fa fa-gamepad",
      label: "Steam",
      className: "steam"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <FooterContainer>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <FooterContent>
            <motion.div variants={itemVariants}>
              <QuickInfo>
                <div className="status">
                  <span className="indicator"></span>
                  Disponível para novos projetos
                </div>
                <div className="location">
                  <i className="fa fa-map-marker-alt"></i>
                  São Paulo, Brasil
                </div>
              </QuickInfo>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SocialLinks>
                {socialLinks.map((link, index) => (
                  <SocialLink
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link.className}
                    variants={socialVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={link.label}
                  >
                    <i className={link.icon}></i>
                  </SocialLink>
                ))}
              </SocialLinks>
            </motion.div>

            <motion.div variants={itemVariants}>
              <BackToTop
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fa fa-arrow-up"></i>
                Voltar ao topo
              </BackToTop>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Copyright>
                <span className="year">{currentYear}</span>
                <span className="text">© Todos os direitos reservados • Daniel Neitzel</span>
              </Copyright>
            </motion.div>
          </FooterContent>
        </motion.div>
      </Container>
    </FooterContainer>
  );
};

export default Footer;