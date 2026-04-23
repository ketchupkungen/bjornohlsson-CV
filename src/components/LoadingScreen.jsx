/**
 * LoadingScreen.jsx - Initial page loading animation component
 * 
 * Displays a full-screen loading overlay with animated spinner.
 * - Shows for ~2.4 seconds after page load
 * - Prevents scrolling during loading (via body.is-loading class)
 * - Smooth fade and blur transition when exiting
 * - Calls onComplete callback when fully hidden
 */

import { useState, useEffect } from 'react';

const EXIT_START_MS = 700;
const COMPLETE_MS = 1400;

export const LoadingScreen = ({ onComplete, language = 'en' }) => {
  // Track if loading screen should be rendered
  const [isLoading, setIsLoading] = useState(true);
  
  // Track if loading screen is in exit phase (fade/blur out)
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Add 'is-loading' class to body to disable scrolling during load
    document.body.classList.add('is-loading');

    // Start exit animation.
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, EXIT_START_MS);

    // Remove the loading overlay and unlock scrolling once animation completes.
    const doneTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('is-loading');
      onComplete?.();
    }, COMPLETE_MS);

    // Cleanup: remove timers and class if component unmounts
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      document.body.classList.remove('is-loading');
    };
  }, [onComplete]);

  // Don't render anything once loading is complete
  if (!isLoading) return null;

  return (
    <div className={`loading-screen ${isExiting ? 'is-exiting' : ''}`}>
      {/* Animated spinner circle */}
      <div className="loading-spinner"></div>
      {/* Loading text with pulse animation */}
      <p className="loading-text">{language === 'sv' ? 'LADDAR' : 'LOADING'}</p>
    </div>
  );
};
