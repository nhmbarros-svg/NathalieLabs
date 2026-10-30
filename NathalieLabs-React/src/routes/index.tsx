import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, BookOpen, Mail } from "lucide-react";
import { LED_URL, ProjectCard, projects } from "@/components/site";
import logoAsset from "@/assets/nb-02.svg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nathalie Labs | Publicidade, Inovação & Tecnologia" },
      { property: "og:title", content: "Nathalie Labs | Publicidade, Inovação & Tecnologia" },
      { property: "og:description", content: "Laboratório de Nathalie Barros: publicidade, inovação, apps mobile e pesquisa em IA." },
      {
        name: "description",
        content:
          "Laboratório de Nathalie Barros: publicidade, inovação, apps mobile e pesquisa em IA.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Topo / Abertura refinada com padronagem da logo e proporção correta */}
      <section className="relative overflow-hidden bg-blush/60 py-20 md:py-28">
        {/* Camada da Padronagem (Monograma em Marca d'Água sutil) */}
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
            Seja bem-vindo ao meu laboratório!
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Publicidade, inovação e tecnologia — explorando a intersecção entre estratégia visual e desenvolvimento de software mobile e inteligência artificial.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/projetos"
              className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-accent"
            >
              Conhecer Projetos
            </Link>
            <Link
              to="/sobre"
              className="inline-flex items-center justify-center border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white"
            >
              Sobre a Nathalie
            </Link>
          </div>
        </div>
      </section>

      {/* Destaque Maratona LED */}
      <section className="border-y bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            <span className="mr-3 text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Destaque Nacional</span>
            Selecionada entre os 80 universitários da Maratona de IA da Academia LED Globo.
          </p>
          <a href={LED_URL} target="_blank" rel="noreferrer" className="w-fit border-b border-primary-foreground/50 font-medium hover:border-primary-foreground">
            Ler cobertura oficial &rarr;
          </a>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Inovação Mobile</p>
            <h2 className="mt-2 text-3xl md:text-4xl">Projetos em destaque</h2>
          </div>
          <Link
            to="/projetos"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:text-accent"
          >
            Ver todos os projetos <ArrowRight size={16} />
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
                  className="transition-transform hover:scale-[1.02] block"
                >
                  <ProjectCard p={p} />
                </Link>
              );
            }

            return <ProjectCard key={p.name} p={p} />;
          })}
        </div>
      </section>

      {/* Pesquisa Acadêmica PIBIC Teaser */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Pesquisa & Acadêmico</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-display text-primary">
                Inteligência Artificial na Comunicação
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Investigação científica (PIBIC - Unicesumar) sobre a percepção dos formandos de Publicidade quanto aos impactos, dilemas éticos e oportunidades trazidos pelas inteligências artificiais generativas. Artigo publicado nos Anais do EPCC.
              </p>
              <div className="mt-6">
                <Link
                  to="/pesquisa"
                  className="inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-accent"
                >
                  <BookOpen size={16} /> Conhecer a pesquisa completa
                </Link>
              </div>
            </div>
            <div className="bg-card p-8 border border-border shadow-sm">
              <span className="inline-block bg-doi px-3 py-1 font-mono text-xs font-bold text-doi-foreground">
                DOI 10.29327/epcc...
              </span>
              <h3 className="mt-4 text-xl font-display text-foreground">
                A Percepção dos Formandos de Publicidade sobre o Uso de IAs Generativas
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Estudo premiado e selecionado para apresentação científica, explorando a transição do mercado publicitário para a era da IA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Contato */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-display text-primary">Vamos criar algo juntos?</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Aberta a novas conexões, parcerias profissionais, palestras e desafios em tecnologia e publicidade.
        </p>
        <div className="mt-8">
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-accent"
          >
            <Mail size={16} /> Fale Comigo
          </Link>
        </div>
      </section>
    </>
  );
}
