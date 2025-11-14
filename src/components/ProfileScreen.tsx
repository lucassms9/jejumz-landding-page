import { useState } from 'react';
import { User, Moon, Crown } from 'lucide-react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';

export function ProfileScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [profile, setProfile] = useState({
    age: '30',
    weight: '75',
    height: '175',
    goal: 'Perda de gordura',
    defaultFastingHours: 16,
  });

  const fastingOptions = [12, 14, 16, 18, 24];

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-8 pb-6">
        <h1 className="text-gray-800 text-center">Perfil</h1>
      </div>

      {/* Avatar */}
      <div className="px-6 mb-6 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
          <User className="text-white" size={40} strokeWidth={2} />
        </div>
        <h2 className="text-gray-800">Usuário jejumZ</h2>
      </div>

      {/* Profile Information */}
      <div className="px-6 mb-6 space-y-4">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-4">
          <h3 className="text-gray-800 mb-4">Informações Pessoais</h3>
          
          <div className="grid grid-cols-3 gap-3">
            <div>
              <Label htmlFor="age" className="text-xs text-gray-600 mb-1 block">
                Idade
              </Label>
              <Input
                id="age"
                type="number"
                value={profile.age}
                onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                className="text-center"
              />
            </div>
            
            <div>
              <Label htmlFor="weight" className="text-xs text-gray-600 mb-1 block">
                Peso (kg)
              </Label>
              <Input
                id="weight"
                type="number"
                value={profile.weight}
                onChange={(e) => setProfile({ ...profile, weight: e.target.value })}
                className="text-center"
              />
            </div>
            
            <div>
              <Label htmlFor="height" className="text-xs text-gray-600 mb-1 block">
                Altura (cm)
              </Label>
              <Input
                id="height"
                type="number"
                value={profile.height}
                onChange={(e) => setProfile({ ...profile, height: e.target.value })}
                className="text-center"
              />
            </div>
          </div>
        </div>

        {/* Fasting Goal */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-gray-800 mb-4">Meta de Jejum Padrão</h3>
          
          <div className="flex gap-2 flex-wrap">
            {fastingOptions.map((hours) => (
              <button
                key={hours}
                onClick={() => setProfile({ ...profile, defaultFastingHours: hours })}
                className={`px-4 py-2 rounded-full transition-all ${
                  profile.defaultFastingHours === hours
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {hours}h
              </button>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-gray-800 mb-4">Configurações</h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Moon className="text-gray-600" size={20} strokeWidth={2} />
              <span className="text-gray-700">Modo Escuro</span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                darkMode ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  darkMode ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Pro Subscription */}
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-6 shadow-lg">
          <div className="flex items-start gap-3 mb-4">
            <Crown className="text-white" size={28} strokeWidth={2} />
            <div className="flex-1">
              <h3 className="text-white mb-2">jejumZ Pro</h3>
              <p className="text-sm text-amber-50 leading-relaxed">
                Acesse recursos avançados, insights personalizados e suporte prioritário
              </p>
            </div>
          </div>
          
          <Button className="w-full bg-white text-amber-600 hover:bg-amber-50 h-12 rounded-full shadow-md">
            Assinar por R$ 14,99/mês
          </Button>
        </div>
      </div>
    </div>
  );
}
