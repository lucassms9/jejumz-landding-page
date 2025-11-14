import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { JejumZLogo } from './JejumZLogo';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LoginScreenProps {
  onLogin: () => void;
  onNavigateToSignUp: () => void;
  onNavigateToForgotPassword: () => void;
}

export function LoginScreen({ onLogin, onNavigateToSignUp, onNavigateToForgotPassword }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login - em produção, aqui faria a chamada à API
    onLogin();
  };

  return (
    <div className="h-full flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1709897633539-68625c0043e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5yaXNlJTIwbW9ybmluZyUyMHBlYWNlZnVsfGVufDF8fHx8MTc2Mjk1MjQ1NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sunrise background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col justify-center px-8">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <JejumZLogo size="lg" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="pl-12 h-14 rounded-2xl border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <button
              type="button"
              onClick={onNavigateToForgotPassword}
              className="text-sm text-blue-500 hover:text-blue-600 transition-colors"
            >
              Esqueci minha senha
            </button>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all"
          >
            Entrar
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400">ou</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Sign Up Button */}
          <Button
            type="button"
            onClick={onNavigateToSignUp}
            variant="outline"
            className="w-full h-14 rounded-full border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-700 transition-all"
          >
            Criar conta
          </Button>
        </form>

        {/* Footer */}
        <p className="text-xs text-center text-gray-400 mt-8 leading-relaxed">
          Ao entrar, você concorda com os<br />
          <span className="text-blue-500">Termos</span> e <span className="text-blue-500">Política de Privacidade</span>
        </p>
      </div>
    </div>
  );
}