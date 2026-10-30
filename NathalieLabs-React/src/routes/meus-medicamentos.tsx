import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BellRing, CalendarClock, CheckCircle2, RefreshCw } from "lucide-react";
import { IMG } from "@/components/site";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=SEU_PACKAGE_NAME";

export const Route = createFileRoute("/meus-medicamentos")({
  head: () => ({
    meta: [
      { title: "Meus Medicamentos | Nathalie Labs" },
      {
        name: "description",
        content:
          "Nunca mais fique em dúvida se tomou ou não o seu remédio. Conheça o aplicativo Meus Medicamentos, desenvolvido por Nathalie Barros.",
      },
      { property: "og:title", content: "Meus Medicamentos | Nathalie Labs" },
      {
        property: "og:description",
        content:
          "Assistente de tratamento medicamentoso focado na confirmação de doses e na adesão ao tratamento de doenças crônicas.",
      },
      { property: "og:url", content: "https://www.nathalielabs.com.br/meus-medicamentos" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://www.nathalielabs.com.br/meus-medicamentos" }],
  }),
  component: MeusMedicamentosPage,
});

const features = [
  {
    Icon: CheckCircle2,
    title: "Confirmação de dose tomada",
    description:
      "Registre o momento em que tomar o medicamento e tenha a segurança de saber exatamente o que já foi feito no seu dia.",
  },
  {
    Icon: BellRing,
    title: "Lembrete de doses atrasadas",
    description:
      "Avisos inteligentes caso o horário passe na correria e a dose ainda não tenha sido confirmada no aplicativo.",
  },
  {
    Icon: RefreshCw,
    title: "Uso contínuo automatizado",
    description:
      "Renovação automática de medicamentos de uso contínuo para manter o acompanhamento sempre ativo sem recadastros manuais.",
  },
  {
    Icon: CalendarClock,
    title: "Renovação de receita e consulta",
    description:
      "Alertas em tempo hábil para agendar consultas médicas ou renovar receitas antes que o medicamento acabe.",
  },
];

function MeusMedicamentosPage() {
  return (
    <>
      {/* Bloco 1: Hero do Projeto */}
      <section className="bg-blush/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
          >
            <ArrowLeft size={16} />
            Voltar para Projetos
          </Link>

          <div className="mt-8 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <img
              src="/meus-medicamentos.png"
              alt="Ícone do aplicativo Meus Medicamentos"
              className="h-20 w-20 object-cover md:h-24 md:w-24"
            />
            <div>
              <span className="inline-block bg-secondary px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
                Disponível no Google Play
              </span>
              <h1 className="mt-3 text-4xl md:text-6xl">Meus Medicamentos</h1>
              <p className="mt-3 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Nunca mais fique em dúvida se tomou ou não o seu remédio.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Baixar no Google Play
            </a>
            <Link
              to="/meus-medicamentos/privacidade"
              className="inline-flex items-center justify-center border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl">Funcionalidades</h2>
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
          {features.map(({ Icon, title, description }) => (
            <div key={title} className="bg-card p-7">
              <Icon className="text-accent" size={28} />
              <h3 className="mt-4 text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
