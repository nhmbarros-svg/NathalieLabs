import { createFileRoute } from "@tanstack/react-router";
import { IMG, PageHero } from "@/components/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre mim | Nathalie Labs" },
      { name: "description", content: "Conheça Nathalie Barros, publicitária e desenvolvedora mobile, idealizadora do Nathalie Labs." },
      { property: "og:title", content: "Sobre mim | Nathalie Labs" },
      { property: "og:description", content: "Publicitária e desenvolvedora mobile, idealizadora do Nathalie Labs." },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <PageHero eyebrow="Sobre mim" title="Design estratégico com engenharia de software." text="Idealizadora do Nathalie Labs e acadêmica do último ano de Publicidade e Propaganda na Unicesumar." />
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-[auto_1fr]">
        <div className="-rotate-2 rounded bg-card p-3 pb-10 shadow-soft">
          <img src={`${IMG}/eu.jpg`} alt="Nathalie Barros" className="h-80 w-64 object-cover" />
          <p className="mt-3 text-center font-display text-primary">Nathalie Barros</p>
        </div>
        <div className="space-y-5 text-lg text-muted-foreground">
          <p>Sou idealizadora do <strong className="text-primary">Nathalie Labs</strong>, acadêmica do último ano de Publicidade e Propaganda na Unicesumar e desenvolvedora de soluções mobile.</p>
          <p>Unindo a sensibilidade estratégica do design à engenharia de software, busco explorar novas fronteiras na criação de experiências digitais de impacto.</p>
          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            {[["Publicidade", "Unicesumar"], ["Mobile", "3 apps no lab"], ["Pesquisa", "PIBIC em IA"]].map(([a, b]) => (
              <div key={a} className="rounded-2xl border bg-card p-5">
                <p className="font-display text-xl text-primary">{a}</p>
                <p className="text-sm">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
