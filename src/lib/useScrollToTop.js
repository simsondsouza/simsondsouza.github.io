import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to scroll to top when the component mounts or when the location changes
 * @param {boolean} smooth - Whether to use smooth scrolling (default: true)
 */
export const useScrollToTop = (smooth = true) => {
  const location = useLocation();

  useEffect(() => {
    // Small delay to ensure the component is fully rendered
    const timer = setTimeout(() => {
      if (smooth) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash, smooth]);
};
