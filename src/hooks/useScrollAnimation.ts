import { useState, useEffect, useRef, RefObject } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

const useScrollAnimation = <T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
): [RefObject<T>, boolean] => {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once the element is visible, we can unobserve it
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
};

export default useScrollAnimation;