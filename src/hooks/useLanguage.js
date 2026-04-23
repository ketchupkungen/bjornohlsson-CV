/**
 * useLanguage.js - Custom hook for managing UI language (Swedish / English)
 *
 * Persists the chosen language to localStorage so the preference survives
 * page reloads. On first visit the language is auto-detected from the
 * browser's navigator.language list: Swedish ('sv') becomes the default
 * when any of the browser's preferred languages starts with "sv", otherwise
 * English ('en') is used.
 *
 * Returns: { language, isSwedish, toggleLanguage }
 *   - language:       Current language code ('sv' | 'en')
 *   - isSwedish:      Convenience boolean — true when language === 'sv'
 *   - toggleLanguage: Function that flips between 'sv' and 'en'
 */

import { useState } from 'react';

// localStorage key used to persist the language preference across page reloads
const LANGUAGE_STORAGE_KEY = 'language-preference';

/**
 * Inspects the browser's preferred language list and returns 'sv' if any
 * entry starts with "sv" (e.g. "sv", "sv-SE"), otherwise returns 'en'.
 * Falls back to 'en' when navigator is unavailable (e.g. SSR).
 */
const detectDefaultLanguage = () => {
  if (typeof navigator === 'undefined') {
    return 'en';
  }

  // Combine the primary language with the full preference list and remove nulls
  const languages = [navigator.language, ...(navigator.languages || [])].filter(Boolean);
  const isSwedish = languages.some((lang) => lang.toLowerCase().startsWith('sv'));

  return isSwedish ? 'sv' : 'en';
};

export const useLanguage = () => {
  // Initialize language from localStorage, or fall back to browser detection
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') {
      // Default to English when running outside a browser (e.g. SSR / tests)
      return 'en';
    }

    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    // Only trust values we recognize to avoid stale/corrupted storage data
    if (savedLanguage === 'sv' || savedLanguage === 'en') {
      return savedLanguage;
    }

    // No saved preference — detect from the browser
    return detectDefaultLanguage();
  });

  /**
   * Toggles between 'sv' and 'en', persisting the new value to localStorage
   * so the preference is remembered on the next visit.
   */
  const toggleLanguage = () => {
    setLanguage((currentLanguage) => {
      const nextLanguage = currentLanguage === 'sv' ? 'en' : 'sv';
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);

      return nextLanguage;
    });
  };

  return {
    language,
    isSwedish: language === 'sv', // Convenience flag used throughout the app
    toggleLanguage,
  };
};