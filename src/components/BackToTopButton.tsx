// components/BackToTopButton.tsx

'use client';

import { useState, useEffect } from 'react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = () => {
    if (!isVisible && window.pageYOffset > 300) {
      setIsVisible(true);
    } else if (isVisible && window.pageYOffset <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [isVisible]);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        aria-label="Back to top"
      >
        ↑
      </button>
    )
  );
}
