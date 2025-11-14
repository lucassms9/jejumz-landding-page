import { useState } from 'react';
import { User, Mail, Lock, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { JejumZLogo } from './JejumZLogo';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SignUpScreenProps {
  onSignUp: () => void;
  onNavigateToLogin: () => void;
}

export function SignUpScreen({ onSignUp, onNavigateToLogin }: SignUpScreenProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
    
    // Simulação de cadastro - em produção, aqui faria a chamada à API
    onSignUp();
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="h-full flex flex-col overflow-y-auto">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1722094250550-4993fa28a51b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBjYWxtfGVufDF8fHx8MTc2Mjg1OTAxNnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Wellness background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col justify-center px-8 py-12">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <JejumZLogo size="lg" />
        </div>

        {/* Motivational Message */}
        <div className="bg-blue-50 rounded-3xl p-4 mb-8 flex items-start gap-3">
          <Sparkles className="text-amber-500 shrink-0 mt-0.5" size={20} strokeWidth={2} />
          <p className="text-sm text-gray-700 leading-relaxed">
            Comece seu primeiro jejum com consciência 🌙☀️
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">
              Nome completo
            </Label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="Seu nome"
                className="pl-12 h-14 rounded-2xl border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              E-mail
            </Label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="seu@email.com"
                className="pl-12 h-14 rounded-2xl border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">
              Senha
            </Label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => updateField('password', e.target.value)}
                placeholder="••••••••"
                className="pl-12 h-14 rounded-2xl border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-gray-700">
              Confirmar senha
            </Label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => updateField('confirmPassword', e.target.value)}
                placeholder="••••••••"
                className="pl-12 h-14 rounded-2xl border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <Button
            type="submit"
            className="w-full h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg transition-all mt-6"
          >
            Criar conta
          </Button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Já tem uma conta?{' '}
          <button
            onClick={onNavigateToLogin}
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            Entrar
          </button>
        </p>
      </div>
    </div>
  );
}