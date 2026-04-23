/**
 * Header.jsx - Navigation header component
 * 
 * Sticky header with:
 * - Logo/branding
 * - Navigation links to main sections (with smooth scroll)
 * - Theme toggle button
 * 
 * Features:
 * - Sticky positioning at top of page
 * - Strong backdrop blur effect (frosted glass look)
 * - Smooth scroll navigation to page sections
 */

import { useEffect, useRef, useState } from 'react';

export const Header = ({ isDark, isSwedish, onToggleTheme, onToggleLanguage }) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);

  // Track scroll position to show/hide header and apply scrolled styles
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY || 0;
      const previousY = lastScrollYRef.current;
      const isTopNow = currentY <= 2;

      setIsAtTop(isTopNow);

      if (isTopNow) {
        setIsHeaderVisible(true);
      } else if (currentY > previousY) {
        // Scrolling down: keep header in place but fade it out.
        setIsHeaderVisible(false);
      } else if (currentY < previousY) {
        // Scrolling up slightly: fade header back in.
        setIsHeaderVisible(true);
      }

      lastScrollYRef.current = currentY;
    };

    lastScrollYRef.current = window.scrollY || 0;
    onScroll();
    // Use passive listener for better scroll performance
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when user presses Escape (accessibility)
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Auto-close mobile menu when viewport widens past the mobile breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 840) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Toggle body class to lock scrolling while mobile menu is open
  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', isMobileMenuOpen);

    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  /**
   * Smoothly scroll to a section by ID
   * @param {string} sectionId - The ID of the section to scroll to
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsMobileMenuOpen(false);
      // Use smooth behavior for animated scroll
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`site-header ${isAtTop ? 'header-at-top' : 'header-scrolled'} ${(isHeaderVisible || isMobileMenuOpen) ? 'header-visible' : 'header-hidden'}`}
    >
      <div className="container">
        <div className="header-content">
          {/* Logo/branding - acts as a home link */}
          <button
            className="logo logo-link"
            onClick={scrollToTop}
            type="button"
            aria-label={isSwedish ? 'Till toppen' : 'Go to top'}
          >
            BJÖRN OHLSSON
          </button>

          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
            title={isMobileMenuOpen ? (isSwedish ? 'Stang meny' : 'Close menu') : (isSwedish ? 'Oppna meny' : 'Open menu')}
            aria-label={isMobileMenuOpen ? (isSwedish ? 'Stang meny' : 'Close menu') : (isSwedish ? 'Oppna meny' : 'Open menu')}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-panel"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            type="button"
          >
            <span className={`hamburger-line ${isMobileMenuOpen ? 'is-open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'is-open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'is-open' : ''}`}></span>
          </button>
          
          {/* Navigation menu */}
          <nav className="header-nav">
            <div className="header-nav-links">
              {/* Navigation links with smooth scroll to sections */}
              <a className="nav-link" onClick={() => scrollToSection('experience')}>
                {isSwedish ? 'ERFARENHET' : 'EXPERIENCE'}
              </a>
              <a className="nav-link" onClick={() => scrollToSection('project')}>
                {isSwedish ? 'PROJEKT' : 'PROJECT'}
              </a>
              <a className="nav-link" onClick={() => scrollToSection('education')}>
                {isSwedish ? 'UTBILDNING' : 'EDUCATION'}
              </a>
              <a className="nav-link" onClick={() => scrollToSection('skills')}>
                {isSwedish ? 'FÄRDIGHETER' : 'SKILLS'}
              </a>
              {/* <a className="nav-link" onClick={() => scrollToSection('certifications-courses')}>
                {isSwedish ? 'CERTIFIERINGAR & KURSER' : 'CERTIFICATIONS & COURSES'}
              </a> */}
            </div>

            <div className="header-nav-actions">
              <button
                className="language-toggle"
                title={isSwedish ? 'Byt till engelska' : 'Switch to Swedish'}
                aria-label={isSwedish ? 'Byt till engelska' : 'Switch to Swedish'}
                onClick={onToggleLanguage}
                type="button"
              >
                {isSwedish ? 'SV' : 'EN'}
              </button>

              {/* Theme toggle - switches between light and dark mode */}
              <button
                className="theme-toggle"
                title={isSwedish ? `Vaxla till ${isDark ? 'ljust' : 'morkt'} lage` : `Switch to ${isDark ? 'light' : 'dark'} mode`}
                aria-label={isSwedish ? `Vaxla till ${isDark ? 'ljust' : 'morkt'} lage` : `Switch to ${isDark ? 'light' : 'dark'} mode`}
                onClick={onToggleTheme}
                type="button"
              >
                {isDark ? '◑' : '◐'}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Dimmed backdrop behind the mobile menu panel — clicking it closes the menu */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Slide-in side panel for mobile navigation */}
      <aside id="mobile-menu-panel" className={`mobile-menu-panel ${isMobileMenuOpen ? 'is-open' : ''}`}>
        

        <nav className="mobile-menu-nav">
          <button className="mobile-nav-link" onClick={() => scrollToSection('project')} type="button">
            {isSwedish ? 'PROJEKT' : 'PROJECT'}
          </button>
          <button className="mobile-nav-link" onClick={() => scrollToSection('experience')} type="button">
            {isSwedish ? 'ERFARENHET' : 'EXPERIENCE'}
          </button>
          <button className="mobile-nav-link" onClick={() => scrollToSection('education')} type="button">
            {isSwedish ? 'UTBILDNING' : 'EDUCATION'}
          </button>
          <button className="mobile-nav-link" onClick={() => scrollToSection('skills')} type="button">
            {isSwedish ? 'FÄRDIGHETER' : 'SKILLS'}
          </button>
        </nav>

        <div className="mobile-menu-actions">
          <button
            className="language-toggle"
            title={isSwedish ? 'Byt till engelska' : 'Switch to Swedish'}
            aria-label={isSwedish ? 'Byt till engelska' : 'Switch to Swedish'}
            onClick={onToggleLanguage}
            type="button"
          >
            {isSwedish ? 'SV' : 'EN'}
          </button>

          <button
            className="theme-toggle"
            title={isSwedish ? `Vaxla till ${isDark ? 'ljust' : 'morkt'} lage` : `Switch to ${isDark ? 'light' : 'dark'} mode`}
            aria-label={isSwedish ? `Vaxla till ${isDark ? 'ljust' : 'morkt'} lage` : `Switch to ${isDark ? 'light' : 'dark'} mode`}
            onClick={onToggleTheme}
            type="button"
          >
            {isDark ? '◑' : '◐'}
          </button>
        </div>
      </aside>
    </header>
  );
};
