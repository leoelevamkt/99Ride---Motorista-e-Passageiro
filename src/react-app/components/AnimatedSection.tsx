import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/react-app/hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fadeIn',
  delay = 0
}: AnimatedSectionProps) {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const animationClasses = {
    fadeIn: hasIntersected 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-4',
    slideUp: hasIntersected 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-8',
    slideLeft: hasIntersected 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 translate-x-8',
    slideRight: hasIntersected 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 -translate-x-8',
    scale: hasIntersected 
      ? 'opacity-100 scale-100' 
      : 'opacity-0 scale-95'
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}