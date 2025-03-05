import { useEffect, useRef } from 'react';
import rough from 'roughjs';

interface Props {
  text: string;
  className?: string;
}

const getLetterPath = (letter: string, x: number, y: number): string => {
  // Basic path data for each letter
  const paths: Record<string, string> = {
    'M': `M${x},${y} L${x},${y-30} L${x+10},${y} L${x+20},${y-30} L${x+20},${y}`,
    'i': `M${x},${y} L${x},${y-20} M${x},${y-25} L${x},${y-26}`,
    'r': `M${x},${y} L${x},${y-20} C${x},${y-25} ${x+15},${y-20} ${x+15},${y-15}`,
    'z': `M${x},${y-20} L${x+15},${y-20} L${x},${y} L${x+15},${y}`,
    'a': `M${x+15},${y-20} C${x+15},${y-25} ${x},${y-25} ${x},${y-15} C${x},${y-5} ${x+15},${y-5} ${x+15},${y-15} L${x+15},${y}`,
    'P': `M${x},${y} L${x},${y-30} C${x+20},${y-30} ${x+20},${y-15} ${x},${y-15}`,
    'l': `M${x},${y} L${x},${y-30}`,
    'u': `M${x},${y-20} L${x},${y} C${x},${y+5} ${x+15},${y+5} ${x+15},${y} L${x+15},${y-20}`,
    's': `M${x+15},${y-20} C${x-5},${y-20} ${x-5},${y-10} ${x+15},${y-10} C${x+15},${y} ${x},${y} ${x},${y}`,
    '!': `M${x},${y-30} L${x},${y-10} M${x},${y-5} L${x},${y-6}`,
    ' ': '',
    '+': `M${x},${y-15} L${x+15},${y-15} M${x+7.5},${y-7.5} L${x+7.5},${y-22.5}`,
  };

  return paths[letter] || `M${x},${y} L${x},${y-20}`;
};

export function HandwrittenText({ text, className = '' }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const stylesRef = useRef<HTMLStyleElement[]>([]);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    const svg = svgRef.current;
    const rc = rough.svg(svg);
    
    // Clear previous content
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }
    
    // Clean up previous styles
    stylesRef.current.forEach(style => style.remove());
    stylesRef.current = [];
    
    let x = 20;
    const y = 60;
    const letterSpacing = 35;
    const baseDelay = 200;
    const totalDuration = text.length * baseDelay + 1000; // Total time for one complete cycle
    
    text.split('').forEach((letter, index) => {
      if (letter === ' ') {
        x += letterSpacing;
        return;
      }

      const letterPath = getLetterPath(letter, x, y);
      
      const node = rc.path(letterPath, {
        roughness: 1.5,
        strokeWidth: 2,
        bowing: 2,
        stroke: 'currentColor',
        fill: 'none'
      });
      
      // Add animation attributes
      node.style.opacity = '0';
      node.style.strokeDasharray = '1000';
      node.style.strokeDashoffset = '1000';
      
      // Create looping animation
      const keyframes = `
        @keyframes write${index} {
          0%, ${(index * baseDelay / totalDuration) * 100}% {
            opacity: 0;
            stroke-dashoffset: 1000;
          }
          ${((index * baseDelay + 200) / totalDuration) * 100}%, ${((index * baseDelay + 1000) / totalDuration) * 100}% {
            opacity: 1;
            stroke-dashoffset: 0;
          }
          ${((totalDuration - 1000) / totalDuration) * 100}%, 100% {
            opacity: 0;
            stroke-dashoffset: 1000;
          }
        }
      `;
      
      // Add keyframes to document
      const style = document.createElement('style');
      style.textContent = keyframes;
      document.head.appendChild(style);
      stylesRef.current.push(style);
      
      // Apply the animation
      node.style.animation = `write${index} ${totalDuration}ms infinite`;
      
      svg.appendChild(node);
      x += letterSpacing;
    });
    
    // Update SVG viewBox with padding
    svg.setAttribute('viewBox', `0 0 ${text.length * letterSpacing + 40} 100`);
    
    // Cleanup function
    return () => {
      stylesRef.current.forEach(style => style.remove());
      stylesRef.current = [];
    };
  }, [text]);
  
  return (
    <svg
      ref={svgRef}
      className={`w-full h-32 ${className}`}
      preserveAspectRatio="xMidYMid meet"
    />
  );
}