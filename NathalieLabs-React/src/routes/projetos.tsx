import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, ProjectCard, projects } from "@/components/site";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos | Nathalie Labs" },
      {
        name: "description",
        content: "Aplicativos mobile e projetos autorais desenvolvidos por Nathalie Barros.",
      },
      { property: "og:title", content: "Projetos | Nathalie Labs" },
      {
        property: "og:description",
        content: "Aplicativos mobile e projetos autorais desenvolvidos por Nathalie Barros.",
      },
    ],
  }),
  component: ProjetosPage,
});

function ProjetosPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfólio"
        title="Soluções digitais e produtos mobile."
        text="Aplicativos desenvolvidos com foco em usabilidade, acessibilidade e impacto prático na rotina."
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-3">
        {projects.map((p) => {
          // Usa href se o projeto tiver rota própria cadastrada ou faz o fallback para o case Meus Medicamentos
          const href = p.href || (p.name.toLowerCase().includes("meus medicamentos") ? "/meus-medicamentos" : null);

          if (href) {
            return (
              <Link
                key={p.name}
                to={href}
                className="block transition-transform hover:scale-[1.02]"
              >
                <ProjectCard p={p} />
              </Link>
            );
          }

          return <ProjectCard key={p.name} p={p} />;
        })}
      </section>
    </>
  );
}
