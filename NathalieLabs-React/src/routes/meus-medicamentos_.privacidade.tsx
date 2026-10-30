import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/meus-medicamentos_/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Meus Medicamentos" },
      { name: "description", content: "Como o aplicativo Meus Medicamentos trata e protege seus dados: armazenamento apenas no seu celular, sem servidores externos." },
      { property: "og:title", content: "Política de Privacidade — Meus Medicamentos" },
      { property: "og:description", content: "Seus dados ficam apenas no seu celular. Veja a política de privacidade do Meus Medicamentos." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Privacidade,
});

const H = ({ children }: { children: React.ReactNode }) => <h2 className="mt-10 text-2xl">{children}</h2>;
const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">{children}</ul>
);

function Privacidade() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24 leading-relaxed">
      <Link to="/meus-medicamentos" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary">
        <ArrowLeft size={16} /> Voltar para Meus Medicamentos
      </Link>
      <h1 className="mt-8 text-4xl md:text-5xl">Política de Privacidade — Meus Medicamentos</h1>
      <p className="mt-4 text-sm text-muted-foreground"><strong>Última atualização:</strong> 6 de setembro de 2026</p>
      <p className="mt-6">
        O aplicativo <strong>Meus Medicamentos</strong>, desenvolvido por <strong>Nathalie Barros</strong>, tem como compromisso a transparência, a segurança e a proteção da privacidade de seus usuários. Esta Política de Privacidade descreve como as informações são tratadas e armazenadas ao utilizar nosso aplicativo mobile.
      </p>

      <H>1. Coleta e Armazenamento de Dados</H>
      <p className="mt-4">O <strong>Meus Medicamentos</strong> opera sob o princípio de <strong>privacidade por padrão</strong> (<em>Privacy by Design</em>) e <strong>armazenamento local exclusivo</strong>:</p>
      <UL>
        <li><strong>Dados Pessoais e de Saúde:</strong> Informações cadastradas no perfil do paciente e dados de medicamentos são armazenados <strong>exclusivamente na memória interna do seu dispositivo móvel</strong>, através de banco de dados local.</li>
        <li><strong>Sem Servidores Externos:</strong> O aplicativo <strong>não coleta, não transmite, não compartilha e não armazena</strong> dados pessoais ou de saúde em servidores externos ou na nuvem. Todos os registros permanecem restritos ao aparelho do usuário.</li>
        <li><strong>Uso Sem Acesso à Internet:</strong> O aplicativo opera de forma autônoma e não exige conexão contínua com a internet.</li>
      </UL>

      <H>2. Permissões do Dispositivo</H>
      <p className="mt-4">Para que as funcionalidades de alerta e controle operem corretamente, o aplicativo solicita as seguintes permissões do sistema operacional Android:</p>
      <UL>
        <li><strong>Notificações (POST_NOTIFICATIONS):</strong> Utilizada exclusivamente para exibir alertas visuais e sonoros no horário programado.</li>
        <li><strong>Alarmes Exatos (SCHEDULE_EXACT_ALARM / USE_EXACT_ALARM):</strong> Necessária para agendar e disparar o alarme exatamente no horário correto definido pelo usuário.</li>
        <li><strong>Vibração (VIBRATE):</strong> Utilizada para acionar o alerta vibratório do dispositivo.</li>
        <li><strong>Iniciar no Boot (RECEIVE_BOOT_COMPLETED):</strong> Utilizada para reagendar automaticamente os lembretes quando o dispositivo for reiniciado.</li>
      </UL>

      <H>3. Compartilhamento de Dados com Terceiros</H>
      <UL>
        <li><strong>Não Venda e Não Compartilhamento:</strong> Não vendemos, alugamos, comercializamos nem compartilhamos quaisquer dados pessoais ou de saúde com terceiros.</li>
        <li><strong>Sem Ferramentas de Rastreamento:</strong> O aplicativo não utiliza ferramentas de rastreamento de terceiros (SDKs publicitários ou analytics).</li>
      </UL>

      <H>4. Exclusão de Dados e Direitos do Usuário (LGPD)</H>
      <p className="mt-4">Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018):</p>
      <UL>
        <li><strong>Acesso e Alteração:</strong> Você pode visualizar, editar ou atualizar todas as suas informações diretamente no aplicativo.</li>
        <li><strong>Exclusão Definitiva:</strong> Para apagar permanentemente todos os seus dados, basta desinstalar o aplicativo do seu celular ou limpar o armazenamento nas configurações do sistema.</li>
      </UL>

      <H>5. Contato</H>
      <p className="mt-4">Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato:</p>
      <UL>
        <li><strong>Responsável:</strong> Nathalie Barros</li>
        <li><strong>Aplicativo:</strong> Meus Medicamentos</li>
        <li><strong>Localidade:</strong> Pinheiral - RJ, Brasil</li>
      </UL>
    </article>
  );
}
