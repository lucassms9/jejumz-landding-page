import { motion } from 'motion/react';

interface CircularTimerProps {
  elapsedSeconds: number;
  targetSeconds: number;
  isFasting: boolean;
}

export function CircularTimer({ elapsedSeconds, targetSeconds, isFasting }: CircularTimerProps) {
  const progress = Math.min(elapsedSeconds / targetSeconds, 1);
  const hours = Math.floor(elapsedSeconds / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  
  const size = 280;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;

  // Color transition from blue to amber
  const getColor = () => {
    if (progress < 0.5) return '#3b82f6'; // blue-500
    if (progress < 0.75) return '#60a5fa'; // blue-400
    return '#f59e0b'; // amber-500
  };

  return (
    <div className="relative">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />
        
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={getColor()}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="text-gray-800 mb-2">
            {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}h
          </div>
          <div className="text-sm text-gray-500">
            Meta: {targetSeconds / 3600}h
          </div>
        </div>
      </div>
    </div>
  );
}
