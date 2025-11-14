import { Timer, BarChart3, Lightbulb, User } from 'lucide-react';
import { Screen } from '../App';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'home' as Screen, icon: Timer, label: 'Jejum' },
    { id: 'history' as Screen, icon: BarChart3, label: 'Histórico' },
    { id: 'phases' as Screen, icon: Lightbulb, label: 'Fases' },
    { id: 'profile' as Screen, icon: User, label: 'Perfil' },
  ];

  return (
    <div className="bg-white border-t border-gray-200 px-6 py-4 shadow-lg">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center gap-1 transition-colors"
            >
              <Icon
                size={24}
                className={isActive ? 'text-blue-500' : 'text-gray-400'}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-xs ${isActive ? 'text-blue-500' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
