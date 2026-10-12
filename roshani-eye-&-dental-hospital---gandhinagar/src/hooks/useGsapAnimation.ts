import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGsapContext(scopeRef: React.RefObject<HTMLElement | null>) {
  const isReducedMotion = useRef(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    isReducedMotion.current = mediaQuery.matches;

    const handleChange = (e: MediaQueryListEvent) => {
      isReducedMotion.current = e.matches;
    };
    mediaQuery.addEventListener('change', handleChange);

    if (!scopeRef.current) return;

    // Use GSAP context for safe React 19 scoped lifecycle management
    const ctx = gsap.context(() => {
      // Ensure all elements are immediately visible by default
      gsap.set('[data-animate], [data-scroll-item], [data-scroll-title]', {
        opacity: 1,
        y: 0,
        scale: 1,
      });

      if (isReducedMotion.current) {
        return;
      }

      // 1. Hero Entrance Animations (Top of page - immediate timeline)
      const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

      heroTimeline
        .fromTo(
          '[data-animate="hero-badge"]',
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, delay: 0.05 }
        )
        .fromTo(
          '[data-animate="hero-title"]',
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 },
          '-=0.2'
        )
        .fromTo(
          '[data-animate="hero-copy"]',
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          '[data-animate="hero-ctas"]',
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          '-=0.3'
        )
        .fromTo(
          '[data-animate="hero-stats"]',
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          '-=0.2'
        )
        .fromTo(
          '[data-animate="hero-visual"]',
          { scale: 0.96, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.1)' },
          '-=0.5'
        );

      // Continuous subtle pulse on optical HUD rings
      gsap.to('[data-animate="lens-pulse"]', {
        rotation: 360,
        transformOrigin: 'center center',
        duration: 90,
        repeat: -1,
        ease: 'none',
      });

      // 2. Journey progress indicator animation
      const journeyLine = scopeRef.current?.querySelector('[data-journey-line]');
      if (journeyLine) {
        gsap.fromTo(
          journeyLine,
          { scaleX: 0.2 },
          {
            scaleX: 1,
            transformOrigin: 'left center',
            duration: 1.2,
            ease: 'power2.inOut',
          }
        );
      }
    }, scopeRef);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      ctx.revert();
    };
  }, [scopeRef]);

  return { isReducedMotion: isReducedMotion.current };
}
