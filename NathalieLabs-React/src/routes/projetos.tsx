import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, ProjectCard, projects } from "@/components/site";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos | Nathalie Labs" },
      { name: "description", content: "Apps mobile do Nathalie Labs: Meus Medicamentos, versão Cuidador e Alcance." },
      { property: "og:title", content: "Projetos | Nathalie Labs" },
      { property: "og:description", content: "Apps mobile e inovação do Nathalie Labs." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Projetos" title="Inovação mobile com propósito." text="Aplicativos pensados para resolver problemas reais do dia a dia, com design centrado no usuário." />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-3">
        {projects.map((p) => {
          // Verifica se é o projeto "Meus Medicamentos" pelo nome
          const isMeusMedicamentos = p.name.toLowerCase().includes("meus medicamentos");

          if (isMeusMedicamentos) {
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
      </section>
    </>
  ),
});
