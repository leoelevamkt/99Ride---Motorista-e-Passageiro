interface SkeletonLoaderProps {
  className?: string;
  lines?: number;
  height?: string;
}

export default function SkeletonLoader({ 
  className = '', 
  lines = 1, 
  height = 'h-4' 
}: SkeletonLoaderProps) {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div 
          key={index}
          className={`bg-gray-200 rounded ${height} ${index > 0 ? 'mt-2' : ''}`}
          style={{ width: `${Math.random() * 40 + 60}%` }}
        />
      ))}
    </div>
  );
}