import { createFileRoute } from "@tanstack/react-router";
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
        {projects.map((p) => <ProjectCard key={p.name} p={p} />)}
      </section>
    </>
  ),
});
