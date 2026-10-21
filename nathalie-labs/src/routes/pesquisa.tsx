import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site";

const URL =
  "https://www.even3.com.br/anais/epcc-encontro-internacional-de-producao-cientifica-538953/1315721-a-percepcao-dos-formandos-de-publicidade-sobre-o-uso-de-inteligencias-artificiais-generativas--desafios-e-oportu/";

export const Route = createFileRoute("/pesquisa")({
  head: () => ({
    meta: [
      { title: "Pesquisa | Nathalie Labs" },
      { name: "description", content: "Pesquisa PIBIC sobre a percepção dos formandos de Publicidade quanto ao uso de IA generativa." },
      { property: "og:title", content: "Pesquisa | Nathalie Labs" },
      { property: "og:description", content: "Pesquisa acadêmica sobre IA generativa na Publicidade." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Pesquisa & Acadêmico" title="Ética e tecnologia na comunicação." text="Investigação científica (PIBIC – Unicesumar) sobre os impactos e dilemas éticos das novas tecnologias no ecossistema da comunicação." />
      <section className="mx-auto max-w-4xl px-6 py-20">
        <article className="rounded-3xl border bg-card p-10 shadow-soft">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Anais do EPCC</p>
          <h2 className="mt-3 text-3xl">A Percepção dos Formandos de Publicidade sobre o Uso de Inteligências Artificiais Generativas</h2>
          <a href={URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex max-w-full items-center overflow-hidden rounded-full border-2 border-doi bg-card">
            <span className="bg-doi px-3 py-1.5 font-extrabold text-doi-foreground">doi</span>
            <span className="truncate px-4 font-mono text-xs text-doi-foreground">10.29327/epcc-encontro-internacional-de-producao-cientifica-538953.1315721</span>
          </a>
          <div className="mt-8">
            <a href={URL} target="_blank" rel="noreferrer" className="link-underline">Acessar publicação oficial →</a>
          </div>
        </article>
      </section>
    </>
  ),
});
