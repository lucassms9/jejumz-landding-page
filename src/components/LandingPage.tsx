import { motion } from 'motion/react';
import { Clock, TrendingUp, Brain, Heart, Sparkles, Download, Apple, Play } from 'lucide-react';
import { Button } from './ui/button';
import { JejumZLogo } from './JejumZLogo';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function LandingPage() {
  const features = [
    {
      icon: Clock,
      title: 'Timer Inteligente',
      description: 'Acompanhe seu jejum em tempo real com um timer circular intuitivo e animado.',
      color: 'text-blue-500',
      bg: 'bg-blue-50',
    },
    {
      icon: Brain,
      title: 'Fases do Corpo',
      description: 'Entenda o que acontece no seu organismo durante cada fase do jejum.',
      color: 'text-purple-500',
      bg: 'bg-purple-50',
    },
    {
      icon: TrendingUp,
      title: 'Histórico Completo',
      description: 'Visualize seu progresso com gráficos e estatísticas detalhadas.',
      color: 'text-amber-500',
      bg: 'bg-amber-50',
    },
    {
      icon: Heart,
      title: 'Bem-estar Total',
      description: 'Design calmo e minimalista para uma experiência de autocuidado.',
      color: 'text-pink-500',
      bg: 'bg-pink-50',
    },
  ];

  const phases = [
    {
      emoji: '🌱',
      time: '0-4h',
      name: 'Digestão',
      description: 'Seu corpo processa os nutrientes da última refeição.',
    },
    {
      emoji: '⚡',
      time: '4-8h',
      name: 'Glicogênio',
      description: 'Início da mobilização de reservas energéticas.',
    },
    {
      emoji: '💪',
      time: '8-12h',
      name: 'Queima de Gordura',
      description: 'Seu corpo começa a usar gordura como energia.',
    },
    {
      emoji: '♻️',
      time: '12-16h',
      name: 'Autofagia',
      description: 'Limpeza e renovação celular profunda.',
    },
    {
      emoji: '🔥',
      time: '16h+',
      name: 'Cetose',
      description: 'Queima máxima de gordura e clareza mental.',
    },
  ];

  const benefits = [
    'Controle do peso de forma natural',
    'Melhora na sensibilidade à insulina',
    'Aumento da clareza mental',
    'Redução da inflamação',
    'Longevidade e saúde celular',
    'Mais energia durante o dia',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <JejumZLogo size="sm" />
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sobre
            </Button>
            <Button variant="ghost" className="hidden sm:inline-flex">
              Recursos
            </Button>
            <Button className="rounded-full bg-gradient-to-r from-blue-500 to-amber-500 hover:from-blue-600 hover:to-amber-600 text-white">
              Baixar App
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-amber-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Sparkles size={16} />
              <span className="text-sm">Jejum intermitente consciente</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight">
              Transforme seu<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
                bem-estar
              </span>
              {' '}com jejum
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Acompanhe seu jejum intermitente com clareza, entenda as fases do seu corpo e alcance seus objetivos de saúde com consciência.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="h-14 px-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg">
                <Apple className="mr-2" size={20} />
                App Store
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-2 hover:bg-gray-50">
                <Play className="mr-2" size={20} />
                Google Play
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-amber-400 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white" />
                </div>
                <span>+10k usuários</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-amber-500">★★★★★</span>
                <span>4.9/5.0</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Phone mockup background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-amber-500 rounded-[3rem] blur-2xl opacity-30" />
              
              {/* Phone frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1596773544141-798fc586f31e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzYyOTk3NzExfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="jejumZ app preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-gray-900">
              Tudo que você precisa para jejuar com consciência
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ferramentas intuitivas para acompanhar, entender e otimizar sua jornada de jejum intermitente.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className={`${feature.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={feature.color} size={28} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-gray-900">
              Entenda as fases do jejum
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra o que acontece no seu corpo durante cada fase do jejum intermitente.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 text-center hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{phase.emoji}</div>
                <div className="text-sm text-blue-600 mb-2">{phase.time}</div>
                <h3 className="text-lg mb-3 text-gray-900">{phase.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-6 text-gray-900">
              Benefícios comprovados do jejum intermitente
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              O jejum intermitente vai além da perda de peso. É uma prática milenar que promove saúde, longevidade e bem-estar.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1592895792095-85fa785192a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwbWluZGZ1bG5lc3N8ZW58MXx8fHwxNzYzMDIzNjM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Meditation wellness"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-500 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 text-white">
            Comece sua jornada de bem-estar hoje
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Baixe o jejumZ e descubra como o jejum intermitente pode transformar sua saúde e qualidade de vida.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="h-16 px-10 rounded-full bg-white text-blue-600 hover:bg-gray-100 shadow-xl text-lg">
              <Download className="mr-2" size={22} />
              Baixar Agora
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 rounded-full border-2 border-white text-white hover:bg-white/10 text-lg">
              Saiba Mais
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <JejumZLogo size="sm" className="brightness-0 invert" />
            </div>
            
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors">Sobre</a>
              <a href="#" className="hover:text-white transition-colors">Recursos</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>© 2024 jejumZ. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
