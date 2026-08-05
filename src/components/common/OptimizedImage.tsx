'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: OptimizedImageProps) {
  const [error, setError] = useState(false);
  const fallbackSrc = '/images/placeholder-thumbnail.png';

  const imageSrc = error || !src ? fallbackSrc : src;

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${fill ? 'w-full h-full' : ''}`}>
      <Image
        src={imageSrc}
        alt={alt}
        width={!fill ? width || 600 : undefined}
        height={!fill ? height || 340 : undefined}
        fill={fill}
        priority={priority}
        sizes={sizes}
        quality={85}
        onError={() => setError(true)}
        className={`object-cover transition-all duration-300 hover:scale-105 ${className}`}
      />
    </div>
  );
}
