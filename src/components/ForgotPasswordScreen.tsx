import { useState } from 'react';
import { Mail, MailOpen, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { JejumZLogo } from './JejumZLogo';
import { motion, AnimatePresence } from 'motion/react';

interface ForgotPasswordScreenProps {
  onNavigateToLogin: () => void;
}

export function ForgotPasswordScreen({ onNavigateToLogin }: ForgotPasswordScreenProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio - em produção, aqui faria a chamada à API
    setIsSubmitted(true);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Content */}
      <div className="relative flex-1 flex flex-col justify-center px-8">
        {/* Back Button */}
        <button
          onClick={onNavigateToLogin}
          className="absolute top-8 left-8 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="text-gray-600" size={24} />
        </button>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Logo */}
              <div className="flex items-center justify-center gap-2 mb-8">
                <JejumZLogo size="lg" />
              </div>

              {/* Title */}
              <div className="text-center mb-8">
                <h2 className="text-gray-800 mb-3">Recuperar senha</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Digite seu e-mail e enviaremos um link para redefinir sua senha.
                </p>
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

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all"
                >
                  Enviar link de recuperação
                </Button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, type: 'spring' }}
              className="text-center"
            >
              {/* Success Icon */}
              <div className="mb-6 flex justify-center">
                <div className="bg-gradient-to-br from-blue-100 to-amber-100 rounded-full p-8 inline-flex">
                  <MailOpen className="text-blue-500" size={64} strokeWidth={1.5} />
                </div>
              </div>

              {/* Success Message */}
              <h2 className="text-gray-800 mb-4">Verifique seu e-mail</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-sm mx-auto">
                Enviamos um link para <span className="text-blue-600">{email}</span> para redefinir sua senha.
              </p>

              {/* Back to Login Button */}
              <Button
                onClick={onNavigateToLogin}
                className="w-full max-w-xs h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all"
              >
                Voltar para o login
              </Button>

              {/* Resend Link */}
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-sm text-blue-500 hover:text-blue-600 transition-colors mt-4"
              >
                Não recebeu o e-mail? Reenviar
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}