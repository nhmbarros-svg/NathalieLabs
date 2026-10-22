import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG, LED_URL, ProjectCard, projects } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nathalie Labs | Publicidade, Inovação & Tecnologia" },
      { name: "description", content: "Laboratório de Nathalie Barros: publicidade, inovação, apps mobile e pesquisa em IA." },
      { property: "og:title", content: "Nathalie Labs | Publicidade, Inovação & Tecnologia" },
      { property: "og:description", content: "Publicidade, inovação, apps mobile e pesquisa em IA." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="bg-blush/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Design · Inovação · Tecnologia</p>
            <h1 className="mt-4 text-5xl leading-tight md:text-7xl">
              Estratégia <em>e</em> códigos.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Nathalie Labs é o meu espaço de criatividade, desenvolvimento e conquistas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/projetos" className="rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground hover:bg-accent">Ver projetos</Link>
              <Link to="/sobre" className="rounded-full border border-primary px-7 py-3 font-medium text-primary hover:bg-card">Conheça a Nathalie</Link>
            </div>
          </div>
          <div className="relative mx-auto">
            <div className="rotate-2 rounded bg-card p-3 pb-10 shadow-soft">
              <img src={`${IMG}/.perfil-novo.jpg`} alt="Nathalie Barros" className="h-96 w-72 object-cover" />
              <p className="mt-3 text-center font-display text-primary">Nathalie Barros</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 rounded-3xl bg-primary p-10 text-primary-foreground md:grid-cols-[auto_1fr] md:p-14">
          <p className="font-display text-7xl leading-none">80</p>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">Destaque nacional</span>
            <h2 className="mt-2 text-3xl text-primary-foreground">Selecionada na Maratona de IA da Academia LED Globo</h2>
            <p className="mt-3 opacity-80">Entre os 80 universitários de todo o Brasil na imersão em inteligência artificial, inovação e criatividade na comunicação.</p>
            <a href={LED_URL} target="_blank" rel="noreferrer" className="mt-5 inline-block border-b-2 border-primary-foreground/50 pb-0.5 font-semibold">Leia a cobertura oficial →</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-4xl">Projetos em destaque</h2>
          <Link to="/projetos" className="link-underline text-sm">Todos os projetos →</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p) => <ProjectCard key={p.name} p={p} />)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <Link to="/pesquisa" className="group rounded-3xl border bg-card p-10 transition hover:shadow-soft">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Pesquisa · PIBIC</p>
            <h3 className="mt-3 text-2xl">IA generativa na formação publicitária</h3>
            <p className="mt-3 text-muted-foreground">Publicado nos Anais do EPCC.</p>
            <span className="link-underline mt-6 inline-block text-sm">Ler sobre a pesquisa →</span>
          </Link>
          <Link to="/contato" className="rounded-3xl bg-secondary p-10 transition hover:shadow-soft">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Contato</p>
            <h3 className="mt-3 text-2xl">Vamos conversar?</h3>
            <p className="mt-3 text-muted-foreground">Aberta a conexões, parcerias e novos desafios.</p>
            <span className="link-underline mt-6 inline-block text-sm">Entrar em contato →</span>
          </Link>
        </div>
      </section>
    </>
  );
}
