import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site";
import { Video } from "lucide-react";

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
      <PageHero
        eyebrow="Pesquisa & Acadêmico"
        title="Ética e tecnologia na comunicação."
        text="Investigação científica (PIBIC – Unicesumar) sobre os impactos e dilemas éticos das novas tecnologias no ecossistema da comunicação."
      />
      
      <section className="mx-auto max-w-4xl px-6 py-20">
        {/* Card da Publicação Oficial */}
        <article className="bg-card p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Anais do EPCC</p>
          <h2 className="mt-3 text-3xl">A Percepção dos Formandos de Publicidade sobre o Uso de Inteligências Artificiais Generativas</h2>
          <a
            href={URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex max-w-full items-center overflow-hidden border-2 border-doi bg-card"
          >
            <span className="bg-doi px-3 py-1.5 font-extrabold text-doi-foreground">doi</span>
            <span className="truncate px-4 font-mono text-xs text-doi-foreground">10.29327/epcc-encontro-internacional-de-producao-cientifica-538953.1315721</span>
          </a>
          <div className="mt-8">
            <a href={URL} target="_blank" rel="noreferrer" className="link-underline">Acessar publicação oficial &rarr;</a>
          </div>
        </article>

        {/* Seção das Apresentações em Vídeo */}
        <div className="mt-14">
          <h3 className="text-2xl font-display text-foreground">Apresentações em Vídeo</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Comunicações científicas apresentando a metodologia e os resultados da pesquisa:
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* Vídeo XIV EPCC */}
            <a
              href="https://youtu.be/DCYImMnmNqo"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between bg-card p-6 transition hover:-translate-y-1"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Video size={22} />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary">
                  XIV EPCC
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  Encontro Internacional de Produção Científica
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Apresentação oficial com a contextualização, dados empíricos e conclusões do estudo.
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                Assistir no YouTube &rarr;
              </span>
            </a>

            {/* Vídeo XIII Mostra Interna */}
            <a
              href="https://youtu.be/vXqz6r6_kuo"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between bg-card p-6 transition hover:-translate-y-1"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Video size={22} />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary">
                  XIII Mostra Interna
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  Mostra de Trabalhos de Iniciação Científica
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Defesa e comunicação acadêmica interna do projeto desenvolvido no ciclo de pesquisa.
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                Assistir no YouTube &rarr;
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  ),
});
