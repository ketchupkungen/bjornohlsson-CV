/**
 * useScrollAnimation.js - Custom hook for viewport-based scroll animations
 * 
 * Uses the Intersection Observer API to detect when elements enter the viewport.
 * Triggers animations only for visible content for optimal performance.
 * 
 * Options:
 * - threshold: How much of element must be visible (default: 0.15 = 15%)
 * - root: Scroll container (default: viewport)
 * - rootMargin: Space around root for detection (default: '-10% bottom')
 * - once: Only animate once (default: true)
 * 
 * Returns: [ref, isVisible]
 *   - ref: React ref to attach to element
 *   - isVisible: Boolean indicating if element is in viewport
 */

import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options) => {
  // Extract and set defaults for observer options
  const {
    threshold = 0.15,           // 15% of element must be visible
    root = null,                // Use viewport as root
    rootMargin = '0px 0px -10% 0px', // Trigger 10% before bottom edge
    once = true,                // Only animate once
  } = options || {};

  // React ref to attach to the element we want to observe
  const ref = useRef(null);
  
  // Track if element is currently visible
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return; // Exit if ref doesn't exist

    // Create Intersection Observer to detect when element enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element entered viewport
          setIsVisible(true);
          
          // If 'once' is true, stop observing after first intersection
          if (once) {
            observer.unobserve(entry.target);
          }
          return;
        }

        // Element left viewport
        if (!once) {
          // If not 'once', allow animation to reset when leaving
          setIsVisible(false);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    // Start observing the element
    observer.observe(element);

    // Cleanup: stop observing when component unmounts
    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, once]);

  // Return ref to attach to element, and visibility state
  return [ref, isVisible];
};
