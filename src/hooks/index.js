import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
  const updatePosition = () => {
  setScrollPosition(window.pageYOffset);
  };

  window.addEventListener('scroll', updatePosition);
  updatePosition();

  return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
  width: typeof window !== 'undefined' ? window.innerWidth : 0,
  height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
  const handleResize = () => {
  setWindowSize({
  width: window.innerWidth,
  height: window.innerHeight,
  });
  };

  window.addEventListener('resize', handleResize);
  handleResize();

  return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(prev => !prev);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return [value, { toggle, setTrue, setFalse, setValue }];
};

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
  try {
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : initialValue;
  } catch (error) {
  console.error(`Error reading localStorage key "${key}":`, error);
  return initialValue;
  }
  });

  const setValue = (value) => {
  try {
  const valueToStore = value instanceof Function ? value(storedValue) : value;
  setStoredValue(valueToStore);
  window.localStorage.setItem(key, JSON.stringify(valueToStore));
  } catch (error) {
  console.error(`Error setting localStorage key "${key}":`, error);
  }
  };

  return [storedValue, setValue];
};

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [targetRef, setTargetRef] = useState(null);

  useEffect(() => {
  if (!targetRef) return;

  const observer = new IntersectionObserver(([entry]) => {
  setIsIntersecting(entry.isIntersecting);
  }, options);

  observer.observe(targetRef);

  return () => {
  if (targetRef) {
  observer.unobserve(targetRef);
  }
  };
  }, [targetRef, options]);

  return [setTargetRef, isIntersecting];
};

// Export do novo hook
export { useGitHubRepositories } from './useGitHubRepositories';