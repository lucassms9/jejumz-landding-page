import { X, AlertCircle, Lightbulb } from 'lucide-react';
import { Phase } from './PhasesScreen';
import { motion, AnimatePresence } from 'motion/react';

interface PhaseModalProps {
  phase: Phase;
  onClose: () => void;
}

export function PhaseModal({ phase, onClose }: PhaseModalProps) {
  const Icon = phase.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md bg-white rounded-t-[40px] max-h-[80vh] overflow-y-auto shadow-2xl"
        >
          {/* Header */}
          <div className={`${phase.bgColor} p-6 sticky top-0 z-10`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-sm"
            >
              <X className="text-gray-600" size={20} />
            </button>

            <div className="flex items-center gap-4">
              <div className={`${phase.color}`}>
                <Icon size={40} strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-gray-800">{phase.title}</h2>
                <p className={`text-sm ${phase.color}`}>{phase.timeRange}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* What Happens */}
            <div>
              <h3 className="text-gray-800 mb-3">O que acontece no corpo</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {phase.details.whatHappens}
              </p>
            </div>

            {/* Symptoms */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="text-blue-500" size={20} strokeWidth={2} />
                <h3 className="text-gray-800">Sintomas esperados</h3>
              </div>
              <ul className="space-y-2">
                {phase.details.symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="text-amber-500" size={20} strokeWidth={2} />
                <h3 className="text-gray-800">Dicas</h3>
              </div>
              <ul className="space-y-2">
                {phase.details.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-amber-500 mt-0.5">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
