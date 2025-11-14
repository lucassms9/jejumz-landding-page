import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

export function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <h1 className="text-4xl font-bold text-blue-600 mb-2">Política de Privacidade</h1>
        <p className="text-gray-600 mb-8">Última atualização: 14 de novembro de 2025</p>

        <div className="prose prose-blue max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Introdução</h2>
            <p className="text-gray-700 leading-relaxed">
              Bem-vindo ao JejumZ. Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. 
              Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações quando 
              você usa nosso aplicativo de jejum intermitente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Informações que Coletamos</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2.1 Informações Fornecidas por Você</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Nome e informações de perfil</li>
              <li>Endereço de e-mail</li>
              <li>Dados de jejum (horários de início e término, durações)</li>
              <li>Preferências e configurações do aplicativo</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2.2 Informações Coletadas Automaticamente</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Dados de uso do aplicativo</li>
              <li>Informações do dispositivo (modelo, sistema operacional)</li>
              <li>Logs de acesso e tempo de uso</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Como Usamos Suas Informações</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Utilizamos suas informações para:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Fornecer e melhorar nossos serviços de rastreamento de jejum</li>
              <li>Personalizar sua experiência no aplicativo</li>
              <li>Enviar notificações sobre seus jejuns e lembretes</li>
              <li>Analisar tendências e padrões de uso para melhorar o aplicativo</li>
              <li>Comunicar atualizações e informações importantes</li>
              <li>Garantir a segurança e prevenir fraudes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Compartilhamento de Informações</h2>
            <p className="text-gray-700 leading-relaxed">
              Não vendemos suas informações pessoais. Podemos compartilhar seus dados apenas nas seguintes circunstâncias:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li><strong>Prestadores de Serviços:</strong> Com empresas que nos auxiliam na operação do aplicativo (hospedagem, análise de dados)</li>
              <li><strong>Requisitos Legais:</strong> Quando exigido por lei ou para proteger nossos direitos legais</li>
              <li><strong>Com Seu Consentimento:</strong> Quando você autorizar explicitamente o compartilhamento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Segurança dos Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, 
              alteração, divulgação ou destruição. Isso inclui criptografia de dados, controles de acesso e auditorias regulares de segurança.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Seus Direitos</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Você tem o direito de:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir informações incorretas ou desatualizadas</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Exportar seus dados em formato portável</li>
              <li>Revogar consentimentos previamente fornecidos</li>
              <li>Opor-se ao processamento de seus dados em certas situações</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Para exercer qualquer desses direitos, entre em contato conosco através do e-mail: 
              <a href="mailto:privacidade@jejumz.com" className="text-blue-600 hover:underline ml-1">
                privacidade@jejumz.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Retenção de Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              Mantemos suas informações pessoais apenas pelo tempo necessário para os propósitos descritos nesta política, 
              ou conforme exigido por lei. Quando você solicita a exclusão de sua conta, seus dados são removidos de nossos 
              sistemas ativos, podendo permanecer em backups por até 90 dias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Cookies e Tecnologias Similares</h2>
            <p className="text-gray-700 leading-relaxed">
              Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso do aplicativo e 
              personalizar conteúdo. Você pode gerenciar suas preferências de cookies nas configurações do aplicativo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Privacidade de Crianças</h2>
            <p className="text-gray-700 leading-relaxed">
              Nosso serviço não se destina a menores de 18 anos. Não coletamos intencionalmente informações de crianças. 
              Se você acredita que coletamos dados de uma criança, entre em contato imediatamente para que possamos 
              removê-los.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Alterações nesta Política</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças significativas 
              através do aplicativo ou por e-mail. Recomendamos revisar esta política regularmente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">11. Transferência Internacional de Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              Seus dados podem ser transferidos e processados em países diferentes do seu país de residência. 
              Garantimos que essas transferências sejam realizadas de acordo com as leis aplicáveis de proteção de dados 
              e com medidas de segurança adequadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">12. Contato</h2>
            <p className="text-gray-700 leading-relaxed">
              Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade ou 
              ao tratamento de seus dados pessoais, entre em contato conosco:
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <p className="text-gray-800"><strong>E-mail:</strong> privacidade@jejumz.com</p>
              <p className="text-gray-800"><strong>Website:</strong> www.jejumz.com</p>
            </div>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Conformidade com LGPD</h2>
            <p className="text-gray-700 leading-relaxed">
              Esta Política de Privacidade está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). 
              Estamos comprometidos em processar seus dados de forma transparente, segura e em conformidade com todas as 
              leis aplicáveis de proteção de dados.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
