/**
 * App.jsx - Main application root component
 * 
 * This component serves as the entry point for the entire React application.
 * It manages the overall layout, state for content visibility, and theme preference detection.
 * 
 * Key responsibilities:
 * - Orchestrates the loading screen lifecycle with content reveal animation
 * - Detects and applies system dark/light mode preference
 * - Renders the main layout structure (header, main content, footer)
 * - Controls smooth fade-in of content after loading completes
 */

import { useEffect, useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Project } from './components/Project';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Hobby } from './components/Hobby';
import { Footer } from './components/Footer';
import { useDarkMode } from './hooks/useDarkMode';
import { useLanguage } from './hooks/useLanguage';
import './styles/main.css';

function App() {
  // Detect system theme and allow a persisted manual override.
  const { isDark, toggleTheme } = useDarkMode();
  const { language, isSwedish, toggleLanguage } = useLanguage();
  
  // Track when loading is complete to trigger content reveal animation
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const supportsScrollRestoration = 'scrollRestoration' in window.history;
    const previousScrollRestoration = supportsScrollRestoration ? window.history.scrollRestoration : null;

    if (supportsScrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    return () => {
      if (supportsScrollRestoration && previousScrollRestoration) {
        window.history.scrollRestoration = previousScrollRestoration;
      }
    };
  }, []);

  return (
    // Apply dark/light mode class based on system preference
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
      {/* Loading screen with spinner - shows for ~2.4s then fades out */}
      <LoadingScreen onComplete={() => setIsContentVisible(true)} language={language} />

      {/* Main app shell - fades in and unblurs after loading completes */}
      <div className={`app-shell ${isContentVisible ? 'is-visible' : ''}`}>
        <Header
          isDark={isDark}
          isSwedish={isSwedish}
          onToggleTheme={toggleTheme}
          onToggleLanguage={toggleLanguage}
        />
        <main className="container" style={{ maxWidth: '1160px' }}>
          {/* Hero section with profile intro and social links */}
          <Hero isSwedish={isSwedish} />
          {/* Work experience timeline */}
          <Experience isSwedish={isSwedish} />
          {/* Project portfolio grouped by area */}
          <Project isSwedish={isSwedish} />
          {/* Education and certifications/courses sections side-by-side */}
          <Education isSwedish={isSwedish} />
          {/* Skills with animated progress bars */}
          <Skills isSwedish={isSwedish} />
          {/* Hobbies and interests section */}
          <Hobby isSwedish={isSwedish} />
        </main>
        <Footer isSwedish={isSwedish} />
      </div>
    </div>
  );
}

export default App;
