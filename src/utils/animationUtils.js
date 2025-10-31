import { useState, useEffect } from 'react';

// Utilitários para controle de animações

/**
 * Limpa todas as flags de animação do localStorage
 * Útil para testar as animações novamente
 */
export const resetAllAnimations = () => {
  localStorage.removeItem('projects-animated');
  localStorage.removeItem('skills-animated');
  localStorage.removeItem('about-animated');
//   console.log('🎬 Flags de animação resetadas! Recarregue a página para ver as animações novamente.');
};

/**
 * Verifica se uma seção já foi animada
 * @param {string} section - Nome da seção (projects, skills, about)
 * @returns {boolean}
 */
export const hasBeenAnimated = (section) => {
  return localStorage.getItem(`${section}-animated`) === 'true';
};

/**
 * Marca uma seção como animada
 * @param {string} section - Nome da seção (projects, skills, about)
 */
export const markAsAnimated = (section) => {
  localStorage.setItem(`${section}-animated`, 'true');
};

/**
 * Hook customizado para controle de animações uma única vez
 * @param {string} section - Nome da seção
 * @param {boolean} isVisible - Se a seção está visível
 * @returns {object} - { shouldAnimate, animationState, markAsAnimated }
 */
export const useOneTimeAnimation = (section, isVisible) => {
  const [hasAnimated, setHasAnimated] = useState(() => {
    return hasBeenAnimated(section);
  });

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      markAsAnimated(section);
    }
  }, [isVisible, hasAnimated, section]);

  return {
    shouldAnimate: !hasAnimated,
    animationState: hasAnimated ? "visible" : (isVisible ? "visible" : "hidden"),
    markAsAnimated: () => {
      setHasAnimated(true);
      markAsAnimated(section);
    }
  };
};

// Para usar no console do navegador:
// resetAllAnimations() - limpa todas as animações
// Depois recarregue a página para ver as animações novamente
if (typeof window !== 'undefined') {
  window.resetAllAnimations = resetAllAnimations;
}