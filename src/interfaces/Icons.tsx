'use client'

import React, { useEffect, useState } from 'react';

const SIZES = {
  xxs: 10,
  xs: 30,
  sm: 50,
  base: 100,
  md: 150,
  lg: 300,
  xl: 400,
} as const;

type IconSize = keyof typeof SIZES | number;

interface IconProps {
  name: string; // The filename without extension
  size?: keyof typeof SIZES | number;
  className?: string;
}

export const Icons = ({ 
  name,
  size = "md",
  className = "", 
  ...props 
}: IconProps) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  const finalSize = typeof size === 'number' ? size : SIZES[size as keyof typeof SIZES] || SIZES.md;
  const src = `/src/assets/img/${name}.svg`;

 useEffect(() => {
  if (!name) return;

  fetch(src)
    .then((response) => response.text())
    .then((data) => {
  // 1. Isolate the opening <svg> tag
  const svgOpenTagMatch = data.match(/<svg[^>]*>/);
  if (!svgOpenTagMatch) return setSvgContent(data);

  let header = svgOpenTagMatch[0];

  // 2. Clean only the header string
  header = header
    .replace(/\s(width|height)=".*?"/g, '') // Remove w/h from header only
    .replace(/<svg/, `<svg width="${finalSize}" height="${finalSize}" class="${className}"`);

  // 3. Put it back together (replace the old header with the new one)
  const cleaned = data.replace(/<svg[^>]*>/, header);
  
  setSvgContent(cleaned);
})
    .catch((err) => console.error(`Icon "${name}" failed to load:`, err));
}, [name, finalSize, className, src]);

  if (!svgContent) return <i style={{ width: finalSize, height: finalSize }} className="inline-block" />;

  return (
    <i
      role="img"
      aria-label={`${name} icon`}
      className={`ui-icon-wrapper inline-flex items-center justify-center ${className}`}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      {...props}
    />
  );
};