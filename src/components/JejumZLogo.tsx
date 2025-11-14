import { JejumZIcon } from './JejumZIcon';

interface JejumZLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

export function JejumZLogo({ size = 'md', showIcon = true, className = '' }: JejumZLogoProps) {
  const sizes = {
    sm: { icon: 24, text: 'text-xl' },
    md: { icon: 32, text: 'text-2xl' },
    lg: { icon: 40, text: 'text-3xl' },
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showIcon && <JejumZIcon size={currentSize.icon} />}
      <div className="flex flex-col leading-none">
        <span className={`${currentSize.text} tracking-tight`}>
          <span className="text-gray-800">jejum</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-amber-500">Z</span>
        </span>
      </div>
    </div>
  );
}
