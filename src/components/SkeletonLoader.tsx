'use client';

export const SkeletonLoader = ({ 
  lines = 3, 
  className = '' 
}: { 
  lines?: number; 
  className?: string; 
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div 
          key={i} 
          className="h-4 bg-gray-200 rounded-full animate-pulse"
          style={{ width: i === lines - 1 ? '70%' : '100%' }}
        />
      ))}
    </div>
  );
};