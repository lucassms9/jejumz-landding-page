import { ArrowLeft, Mail, Trash2, AlertTriangle, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

export function AccountDeletion() {
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

        <div className="flex items-center gap-3 mb-2">
          <Trash2 className="w-8 h-8 text-red-600" />
          <h1 className="text-4xl font-bold text-gray-900">Remoção de Conta</h1>
        </div>
        <p className="text-gray-600 mb-8">Como solicitar a exclusão da sua conta no JejumZ</p>

        <div className="space-y-6">
          {/* Alert Box */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-red-900 mb-2">Atenção: Esta ação é irreversível</h3>
              <p className="text-red-800 leading-relaxed">
                Ao solicitar a remoção da sua conta, todos os seus dados serão permanentemente excluídos dos nossos 
                sistemas. Esta ação não pode ser desfeita.
              </p>
            </div>
          </div>

          {/* What will be deleted */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              O que será excluído
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Todos os seus dados pessoais (nome, e-mail, foto de perfil)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Histórico completo de jejuns e estatísticas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Configurações e preferências do aplicativo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Acesso à conta e capacidade de fazer login</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Todos os dados associados à sua conta no JejumZ</span>
              </li>
            </ul>
          </section>

          {/* How to request */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Como solicitar a remoção</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Para solicitar a remoção completa da sua conta, siga os passos abaixo:
            </p>
            
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Envie um e-mail</h3>
                  <p className="text-gray-700">
                    Entre em contato conosco através do e-mail abaixo solicitando a remoção da sua conta.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Informe seus dados</h3>
                  <p className="text-gray-700">
                    No e-mail, inclua o endereço de e-mail associado à sua conta JejumZ e confirme que 
                    deseja excluir permanentemente sua conta.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Aguarde a confirmação</h3>
                  <p className="text-gray-700">
                    Nossa equipe processará sua solicitação em até 48 horas úteis e enviará uma confirmação 
                    quando a conta for excluída.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-8 h-8" />
              <h2 className="text-2xl font-semibold">Entre em Contato</h2>
            </div>
            <p className="mb-6 text-blue-100">
              Para solicitar a remoção da sua conta, envie um e-mail para:
            </p>
            <a 
              href="mailto:contato@jejumz.com?subject=Solicitação de Remoção de Conta"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <Mail className="w-5 h-5" />
              contato@jejumz.com
            </a>
            <p className="mt-4 text-sm text-blue-100">
              Assunto sugerido: "Solicitação de Remoção de Conta"
            </p>
          </section>

          {/* Important Notes */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Informações Importantes</h2>
            <div className="space-y-4 text-gray-700">
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h3 className="font-semibold text-gray-900 mb-1">Prazo de Processamento</h3>
                <p className="leading-relaxed">
                  Processamos solicitações de remoção de conta em até 48 horas úteis. Você receberá uma 
                  confirmação por e-mail quando o processo for concluído.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h3 className="font-semibold text-gray-900 mb-1">Backup de Segurança</h3>
                <p className="leading-relaxed">
                  Seus dados podem permanecer em nossos backups de segurança por até 90 dias após a exclusão, 
                  mas não estarão mais acessíveis ou ativos no sistema.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h3 className="font-semibold text-gray-900 mb-1">Conformidade com LGPD</h3>
                <p className="leading-relaxed">
                  Este processo está em conformidade com a Lei Geral de Proteção de Dados (LGPD) e garante 
                  o seu direito à exclusão de dados pessoais.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h3 className="font-semibold text-gray-900 mb-1">Alternativas à Exclusão</h3>
                <p className="leading-relaxed">
                  Se você deseja apenas pausar o uso do aplicativo temporariamente, considere apenas fazer 
                  logout ao invés de excluir sua conta permanentemente.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Perguntas Frequentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Posso recuperar minha conta depois da exclusão?</h3>
                <p className="text-gray-700">
                  Não. A exclusão é permanente e irreversível. Todos os dados são completamente removidos.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Quanto tempo leva para processar?</h3>
                <p className="text-gray-700">
                  Geralmente processamos em até 48 horas úteis após o recebimento da sua solicitação.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Preciso estar logado para solicitar?</h3>
                <p className="text-gray-700">
                  Não. Você pode solicitar a remoção por e-mail mesmo se não conseguir acessar sua conta.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Posso exportar meus dados antes de excluir?</h3>
                <p className="text-gray-700">
                  Sim! Entre em contato conosco solicitando uma cópia dos seus dados antes de pedir a exclusão.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
