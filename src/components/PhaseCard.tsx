import { ChevronRight } from 'lucide-react';
import { Phase } from './PhasesScreen';
import { motion } from 'motion/react';

interface PhaseCardProps {
  phase: Phase;
  onClick: () => void;
}

export function PhaseCard({ phase, onClick }: PhaseCardProps) {
  const Icon = phase.icon;

  return (
    <motion.button
      onClick={onClick}
      className={`w-full ${phase.bgColor} rounded-3xl p-6 text-left transition-all hover:shadow-md`}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start gap-4">
        <div className={`${phase.color} shrink-0`}>
          <Icon size={32} strokeWidth={2} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-gray-800">{phase.title}</h3>
            <span className={`text-sm ${phase.color}`}>{phase.timeRange}</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {phase.description}
          </p>
        </div>

        <ChevronRight className="text-gray-400 shrink-0" size={20} />
      </div>
    </motion.button>
  );
}
