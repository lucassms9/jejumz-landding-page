import { useState } from 'react';
import { Utensils, TrendingDown, Flame, Sparkles } from 'lucide-react';
import { PhaseCard } from './PhaseCard';
import { PhaseModal } from './PhaseModal';

export interface Phase {
  id: string;
  title: string;
  timeRange: string;
  icon: typeof Utensils;
  color: string;
  bgColor: string;
  description: string;
  details: {
    whatHappens: string;
    symptoms: string[];
    tips: string[];
  };
}

export function PhasesScreen() {
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);

  const phases: Phase[] = [
    {
      id: '1',
      title: 'Digestão',
      timeRange: '0–4h',
      icon: Utensils,
      color: 'text-blue-400',
      bgColor: 'bg-blue-50',
      description: 'Processamento e absorção de nutrientes da última refeição',
      details: {
        whatHappens: 'O corpo está focado em digerir e absorver os nutrientes da sua última refeição. A insulina está elevada para ajudar as células a absorverem glicose.',
        symptoms: ['Sensação de saciedade', 'Energia estável', 'Foco na digestão'],
        tips: [
          'Mantenha-se hidratado',
          'Evite atividades físicas intensas',
          'É normal sentir um pouco de sonolência'
        ]
      }
    },
    {
      id: '2',
      title: 'Queda de Insulina',
      timeRange: '4–12h',
      icon: TrendingDown,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
      description: 'Níveis de insulina diminuem e o corpo mobiliza energia',
      details: {
        whatHappens: 'Os níveis de insulina começam a cair significativamente. O fígado libera glicose armazenada (glicogênio) para manter os níveis de energia.',
        symptoms: ['Fome leve a moderada', 'Clareza mental aumentando', 'Energia mantida'],
        tips: [
          'Beba água ou chá sem açúcar',
          'Mantenha-se ocupado para distrair da fome',
          'A fome geralmente passa após alguns minutos'
        ]
      }
    },
    {
      id: '3',
      title: 'Lipólise',
      timeRange: '12–16h',
      icon: Flame,
      color: 'text-amber-500',
      bgColor: 'bg-amber-50',
      description: 'O corpo começa a queimar gordura como fonte de energia',
      details: {
        whatHappens: 'Com o glicogênio esgotado, o corpo muda para queimar gordura como combustível principal. Inicia-se a produção de corpos cetônicos.',
        symptoms: ['Fome diminuída', 'Foco mental elevado', 'Energia sustentada', 'Possível hálito cetônico'],
        tips: [
          'Aproveite o pico de clareza mental',
          'Ótimo momento para trabalho focado',
          'Escove os dentes se sentir hálito alterado'
        ]
      }
    },
    {
      id: '4',
      title: 'Autofagia',
      timeRange: '16–24h',
      icon: Sparkles,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
      description: 'Limpeza celular profunda e regeneração',
      details: {
        whatHappens: 'A autofagia se intensifica - o processo onde as células reciclam componentes antigos e danificados. Benefícios anti-envelhecimento e regeneração celular.',
        symptoms: ['Pouca ou nenhuma fome', 'Clareza mental máxima', 'Energia estável', 'Sensação de leveza'],
        tips: [
          'Momento ideal para meditação',
          'Mantenha eletrólitos em equilíbrio',
          'Ouça seu corpo - encerre se sentir muito mal'
        ]
      }
    }
  ];

  return (
    <>
      <div className="flex flex-col h-full overflow-y-auto">
        {/* Header */}
        <div className="px-6 pt-8 pb-6">
          <h1 className="text-gray-800 text-center">Fases do Corpo</h1>
          <p className="text-sm text-gray-600 text-center mt-2">
            Entenda o que acontece em cada etapa do jejum
          </p>
        </div>

        {/* Phases List */}
        <div className="px-6 pb-6 space-y-4">
          {phases.map((phase) => (
            <PhaseCard
              key={phase.id}
              phase={phase}
              onClick={() => setSelectedPhase(phase)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPhase && (
        <PhaseModal
          phase={selectedPhase}
          onClose={() => setSelectedPhase(null)}
        />
      )}
    </>
  );
}
