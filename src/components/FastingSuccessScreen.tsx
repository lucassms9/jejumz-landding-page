import { motion } from 'motion/react';
import { Share2, Download, X, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { JejumZIcon } from './JejumZIcon';

interface FastingSuccessScreenProps {
  duration: number; // in minutes
  targetDuration: number; // in minutes
  onClose: () => void;
}

export function FastingSuccessScreen({ duration, targetDuration, onClose }: FastingSuccessScreenProps) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  
  // Determinar fase alcançada
  const getPhaseReached = () => {
    const hoursCompleted = duration / 60;
    if (hoursCompleted >= 16) return { 
      name: 'Cetose', 
      emoji: '🔥',
      insight: 'Seu corpo está em cetose profunda, queimando gordura como principal fonte de energia. Incrível!'
    };
    if (hoursCompleted >= 12) return { 
      name: 'Autofagia', 
      emoji: '♻️',
      insight: 'Suas células estão em processo de limpeza e renovação. Cada hora conta para sua saúde!'
    };
    if (hoursCompleted >= 8) return { 
      name: 'Queima de Gordura', 
      emoji: '💪',
      insight: 'Você ativou o modo de queima de gordura! Seu corpo está usando reservas de energia.'
    };
    if (hoursCompleted >= 4) return { 
      name: 'Glicogênio', 
      emoji: '⚡',
      insight: 'Seu corpo começou a usar glicogênio como fonte de energia. Continue firme!'
    };
    return { 
      name: 'Digestão', 
      emoji: '🌱',
      insight: 'Primeira fase concluída! Cada passo é uma vitória em direção ao equilíbrio.'
    };
  };

  const phase = getPhaseReached();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'jejumZ - Jejum Concluído!',
        text: `Completei ${hours}h${minutes}m de jejum intermitente e alcancei a fase ${phase.name}! 💪✨`,
      });
    } else {
      alert('Em breve: compartilhe seus resultados! 📸');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Card principal */}
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 bg-white rounded-full p-2.5 shadow-xl hover:scale-110 transition-transform z-20"
          >
            <X size={20} className="text-gray-700" />
          </button>

          {/* Content Card */}
          <div className="bg-gradient-to-br from-blue-500 via-blue-400 to-amber-400 rounded-[32px] overflow-hidden relative shadow-2xl">
            {/* Decorative background elements */}
            <div className="absolute top-8 right-8 w-40 h-40 bg-amber-300 rounded-full opacity-30 blur-3xl" />
            <div className="absolute bottom-16 left-8 w-48 h-48 bg-blue-300 rounded-full opacity-30 blur-3xl" />
            <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-white rounded-full opacity-20 blur-2xl" />
            
            {/* Sparkles */}
            <Sparkles className="absolute top-12 right-12 text-amber-200 opacity-80 animate-pulse" size={24} />
            <Sparkles className="absolute bottom-20 left-10 text-blue-200 opacity-80 animate-pulse" size={20} style={{ animationDelay: '0.7s' }} />
            <Sparkles className="absolute top-24 left-16 text-white opacity-70 animate-pulse" size={18} style={{ animationDelay: '1.2s' }} />

            {/* Main content */}
            <div className="relative z-10 p-8 text-white text-center">
              {/* Logo */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-center gap-2 mb-8"
              >
                <JejumZIcon size={32} className="brightness-0 invert" />
                <span className="text-2xl">jejumZ</span>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-3xl mb-2">Jejum Concluído! 🎉</h2>
                <p className="text-lg text-white/90">Parabéns pela disciplina</p>
              </motion.div>

              {/* Tempo total */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="mb-6"
              >
                <p className="text-base mb-2 text-white/80">Você jejuou por</p>
                <div className="text-8xl mb-1 tracking-tight drop-shadow-lg">
                  {hours > 0 && (
                    <>
                      <span>{hours}</span>
                      <span className="text-5xl align-super">h</span>
                    </>
                  )}
                  {minutes > 0 && (
                    <>
                      <span className={hours > 0 ? 'ml-2' : ''}>{minutes}</span>
                      <span className="text-5xl align-super">m</span>
                    </>
                  )}
                </div>
              </motion.div>

              {/* Phase Card */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, type: 'spring' }}
                className="bg-white/15 backdrop-blur-lg border-2 border-white/40 rounded-3xl p-6 mb-6 shadow-xl"
              >
                <p className="text-sm mb-3 text-white/80">Fase alcançada</p>
                <div className="flex items-center justify-center gap-3 mb-1">
                  <span className="text-5xl">{phase.emoji}</span>
                  <span className="text-3xl">{phase.name}</span>
                </div>
              </motion.div>

              {/* Insight message */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-2xl p-6 mb-8"
              >
                <p className="text-base leading-relaxed text-white/95">
                  {phase.insight}
                </p>
              </motion.div>

              {/* Footer message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-sm text-white/80">
                  Continue essa jornada de autocuidado 💙
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 space-y-3"
        >
          {/* Share button */}
          <Button
            onClick={handleShare}
            className="w-full h-16 rounded-full bg-gradient-to-r from-blue-500 to-amber-500 hover:from-blue-600 hover:to-amber-600 text-white shadow-xl transition-all text-lg"
          >
            <Share2 className="mr-2" size={22} />
            Compartilhar no Instagram
          </Button>

          {/* Download button */}
          <Button
            onClick={() => alert('Download disponível em breve! 📸')}
            variant="outline"
            className="w-full h-14 rounded-full bg-white/95 border-2 border-white hover:bg-white text-gray-800 shadow-lg transition-all"
          >
            <Download className="mr-2" size={20} />
            Salvar Imagem
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}