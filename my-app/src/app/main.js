import { useEffect } from 'react';

const useClientSideEffect = () => {
  useEffect(() => {
    // Smooth scroll to sections when clicking on navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
      e.preventDefault();

      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }

    // Cleanup event listeners on unmount
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);
};

export default useClientSideEffect;
