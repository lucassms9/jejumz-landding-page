import { useState, useEffect } from 'react';
import { Play, Square } from 'lucide-react';
import { CircularTimer } from './CircularTimer';
import { JejumZLogo } from './JejumZLogo';
import { FastingSuccessScreen } from './FastingSuccessScreen';
import { Button } from './ui/button';

export function HomeScreen() {
  const [isFasting, setIsFasting] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [completedDuration, setCompletedDuration] = useState(0);
  
  const targetHours = 16;
  const targetSeconds = targetHours * 3600;

  useEffect(() => {
    if (!isFasting || !startTime) return;

    const interval = setInterval(() => {
      const now = new Date();
      const elapsed = Math.floor((now.getTime() - startTime.getTime()) / 1000);
      setElapsedSeconds(elapsed);
    }, 1000);

    return () => clearInterval(interval);
  }, [isFasting, startTime]);

  const handleToggleFast = () => {
    if (isFasting) {
      // Encerrar jejum e mostrar tela de sucesso
      setCompletedDuration(Math.floor(elapsedSeconds / 60)); // converter para minutos
      setShowSuccess(true);
      setIsFasting(false);
      setStartTime(null);
    } else {
      // Iniciar jejum
      setIsFasting(true);
      setStartTime(new Date());
      setElapsedSeconds(0);
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setElapsedSeconds(0);
  };

  const getPhaseInfo = (hours: number) => {
    if (hours < 4) {
      return {
        phase: 'Digestão',
        description: 'Seu corpo está processando a última refeição e absorvendo nutrientes.',
        color: 'text-blue-400'
      };
    } else if (hours < 12) {
      return {
        phase: 'Queda de Insulina',
        description: 'Os níveis de insulina estão diminuindo e o corpo começa a mobilizar energia.',
        color: 'text-blue-500'
      };
    } else if (hours < 16) {
      return {
        phase: 'Lipólise — queimando gordura',
        description: 'Durante esta fase, o corpo começa a usar gordura como energia.',
        color: 'text-amber-500'
      };
    } else {
      return {
        phase: 'Autofagia',
        description: 'O corpo está realizando limpeza celular profunda e regeneração.',
        color: 'text-amber-600'
      };
    }
  };

  const currentHours = elapsedSeconds / 3600;
  const phaseInfo = getPhaseInfo(currentHours);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-6 pt-8 pb-6">
        <div className="flex items-center justify-center">
          <JejumZLogo size="md" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-8">
        {/* Circular Timer */}
        <CircularTimer 
          elapsedSeconds={elapsedSeconds}
          targetSeconds={targetSeconds}
          isFasting={isFasting}
        />

        {/* Phase Information */}
        <div className="mt-8 text-center max-w-sm">
          <p className={`${phaseInfo.color} mb-2`}>
            {phaseInfo.phase}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            {phaseInfo.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-8 w-full max-w-xs">
          <Button
            onClick={handleToggleFast}
            className={`w-full h-14 rounded-full ${
              isFasting 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white shadow-lg transition-all`}
          >
            {isFasting ? (
              <>
                <Square size={20} className="mr-2" />
                Concluir Jejum
              </>
            ) : (
              <>
                <Play size={20} className="mr-2" fill="currentColor" />
                Iniciar Jejum
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <FastingSuccessScreen
          duration={completedDuration}
          targetDuration={targetHours * 60}
          onClose={handleCloseSuccess}
        />
      )}
    </div>
  );
}