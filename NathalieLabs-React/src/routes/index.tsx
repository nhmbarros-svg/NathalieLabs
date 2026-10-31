import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, BookOpen, Mail } from "lucide-react";
import { LED_URL, ProjectCard, projects } from "@/components/site";
import logoAsset from "@/assets/nb-02.svg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nathalie Labs | Design, Mobile & IA" },
      { property: "og:title", content: "Nathalie Labs | Design, Mobile & IA" },
      { property: "og:description", content: "Laboratório de Nathalie Barros: desenvolvimento mobile, estratégia criativa e pesquisa em inteligência artificial." },
      {
        name: "description",
        content: "Laboratório de Nathalie Barros: desenvolvimento mobile, estratégia criativa e pesquisa em inteligência artificial.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Topo / Hero */}
      <section className="relative overflow-hidden bg-blush/60 py-20 md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
          style={{
            backgroundImage: `url(${logoAsset.url})`,
            backgroundRepeat: "repeat",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent backdrop-blur">
            <Sparkles size={14} /> Design · Inovação · Tecnologia
          </p>
          <h1 className="font-display text-4xl font-medium leading-tight text-primary md:text-5xl lg:text-6xl">
            Design, tecnologia e inteligência artificial na prática.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Portfólio e laboratório de Nathalie Barros: desenvolvimento mobile, estratégia criativa e pesquisa em IA.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/projetos"
              className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-accent"
            >
              Ver Projetos
            </Link>
            <Link
              to="/sobre"
              className="inline-flex items-center justify-center border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white"
            >
              Sobre Mim
            </Link>
          </div>
        </div>
      </section>

      {/* Destaque Maratona LED */}
      <section className="border-y bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            <span className="mr-3 text-xs font-semibold uppercase tracking-[0.2em] opacity-75">Destaque</span>
            Top 80 universitários na Maratona de IA da Globo (Academia LED).
          </p>
          <a
            href={LED_URL}
            target="_blank"
            rel="noreferrer"
            className="w-fit border-b border-primary-foreground/50 font-medium hover:border-primary-foreground"
          >
            Ver cobertura oficial &rarr;
          </a>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Cases Selecionados</p>
            <h2 className="mt-2 text-3xl md:text-4xl">Projetos em destaque</h2>
          </div>
          <Link
            to="/projetos"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:text-accent"
          >
            Todos os projetos <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const isMeusMedicamentos = p.name.toLowerCase().includes("meus medicamentos");

            if (isMeusMedicamentos && p.href === "/meus-medicamentos") {
              return (
                <Link
                  to="/meus-medicamentos"
                  key={p.name}
                  className="block transition-transform hover:scale-[1.02]"
                >
                  <ProjectCard p={p} />
                </Link>
              );
            }

            return <ProjectCard key={p.name} p={p} />;
          })}
        </div>
      </section>

      {/* Pesquisa Acadêmica PIBIC */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Pesquisa & Academia</p>
              <h2 className="mt-2 font-display text-3xl text-primary md:text-4xl">
                Inteligência Artificial na Comunicação
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Investigação científica (PIBIC) sobre o impacto e os dilemas éticos do uso de IAs generativas na formação e no mercado de comunicação.
              </p>
              <div className="mt-6">
                <Link
                  to="/pesquisa"
                  className="inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-accent"
                >
                  <BookOpen size={16} /> Acessar pesquisa completa
                </Link>
              </div>
            </div>
            <div className="border border-border bg-card p-8 shadow-sm">
              <span className="inline-block bg-doi px-3 py-1 font-mono text-xs font-bold text-doi-foreground">
                DOI 10.29327/epcc...
              </span>
              <h3 className="mt-4 font-display text-xl text-foreground">
                A Percepção dos Formandos sobre IAs Generativas
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Artigo publicado e apresentado nos Anais do EPCC com foco nas transformações profissionais na era da inteligência artificial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Contato */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl text-primary md:text-4xl">Vamos criar algo juntos?</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Disponível para projetos mobile, parcerias, palestras e consultoria em IA.
        </p>
        <div className="mt-8">
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-accent"
          >
            <Mail size={16} /> Fale comigo
          </Link>
        </div>
      </section>
    </>
  );
}
