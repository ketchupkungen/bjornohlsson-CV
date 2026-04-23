/**
 * useDarkMode.js - Custom hook for detecting system dark mode preference
 * 
 * Detects the user's OS-level color scheme preference.
 * Supports:
 * - Windows (prefers-color-scheme media query)
 * - Linux (prefers-color-scheme media query)
 * - iOS (prefers-color-scheme media query)
 * - Android (prefers-color-scheme media query)
 * 
 * Returns: boolean - true if system prefers dark mode, false otherwise
 */

import { useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'theme-preference';

export const useDarkMode = () => {
  // Track whether the user has manually overridden the system theme.
  const [themePreference, setThemePreference] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem(THEME_STORAGE_KEY) || 'system';
    }

    return 'system';
  });

  // Initialize with either the saved preference or the current system theme.
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedPreference = window.localStorage.getItem(THEME_STORAGE_KEY);

      if (savedPreference === 'dark') {
        return true;
      }

      if (savedPreference === 'light') {
        return false;
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    return false;
  });

  useEffect(() => {
    // Get the media query object for dark mode preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    /**
     * Update state when system preference changes
     * This happens when user changes OS theme settings
     */
    const handleChange = (e) => {
      // Only follow the OS when the user has not chosen a manual override.
      setIsDark((currentIsDark) => {
        const savedPreference = window.localStorage.getItem(THEME_STORAGE_KEY) || 'system';

        if (savedPreference !== 'system') {
          return currentIsDark;
        }

        return e.matches;
      });
    };

    // Listen for changes to the media query
    mediaQuery.addEventListener('change', handleChange);
    
    // Cleanup: remove listener when component unmounts
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    // Manual choices should override the OS. Removing the attribute returns
    // control to the prefers-color-scheme media query.
    if (themePreference === 'system') {
      root.removeAttribute('data-theme');
      return;
    }

    root.setAttribute('data-theme', themePreference);
  }, [themePreference]);

  /**
   * Toggles between 'light' and 'dark' manual overrides.
   * Persists the new preference to localStorage so it survives page reloads.
   */
  const toggleTheme = () => {
    setThemePreference((currentPreference) => {
      const nextPreference = currentPreference === 'dark' ? 'light' : 'dark';

      window.localStorage.setItem(THEME_STORAGE_KEY, nextPreference);
      setIsDark(nextPreference === 'dark');

      return nextPreference;
    });
  };

  /**
   * Clears any manual override and returns to following the OS theme.
   * Re-reads the current system preference so the UI updates immediately.
   */
  const resetThemeToSystem = () => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    window.localStorage.setItem(THEME_STORAGE_KEY, 'system');
    setThemePreference('system');
    setIsDark(systemPrefersDark);
  };

  return {
    isDark,
    themePreference,
    toggleTheme,
    resetThemeToSystem,
  };
};
