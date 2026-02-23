'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface StretchyLineProps {
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
  className?: string;
}

export default function StretchyLine({
  width = 1000,
  height = 500,
  strokeColor = "white",
  strokeWidth = 2,
  className = ""
}: StretchyLineProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !pathRef.current || !containerRef.current) return;

    const svg = svgRef.current;
    const path = pathRef.current;
    const container = containerRef.current;

    // Initial and original path
    const initialPath = `M 10 ${height/2} Q ${width/2} ${height/2} ${width-10} ${height/2}`;
    const originalPath = `M 10 ${height/2} Q ${width/2} ${height/2} ${width-10} ${height/2}`;

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      const rect = svg.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      // Much more dramatic stretching - allow extreme vertical movement
      const clampedX = Math.max(10, Math.min(width - 10, x));
      // Allow extreme vertical stretching - up to 3x the height
      const clampedY = Math.max(-height * 4, Math.min(height * 4, y));
      
      const newPath = `M 10 ${height/2} Q ${clampedX} ${clampedY} ${width-10} ${height/2}`;
      
      gsap.to(path, {
        attr: { d: newPath },
        duration: 0.6,
        ease: "power3.out",
      });
    };

    // Mouse leave handler with more bouncy effect
    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: { d: originalPath },
        duration: 2,
        ease: "elastic.out(1,0.1)",
      });
    };

    // Add event listeners
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [width, height]);

  return (
    <div ref={containerRef} className={`cursor-crosshair  ${className}`}>
      <svg 
        ref={svgRef}
        width={width} 
        height={height}
        className="w-full h-full"
      >
        <path 
          ref={pathRef}
          d={`M 10 ${height/2} Q ${width/2} ${height/2} ${width-10} ${height/2}`}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          className="transition-colors duration-300"
        />
      </svg>
    </div>
  );
}
