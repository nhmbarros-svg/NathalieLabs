import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Mim | Nathalie Labs" },
      { name: "description", content: "Conheça a trajetória de Nathalie Barros: estudante de Publicidade, pesquisadora de IA e idealizadora do Nathalie Labs." },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Sobre mim"
        title="Continuamos avançando, abrindo novas portas(...)."
        text="Conheça a trajetória"
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div className="mx-auto w-full max-w-sm">
            <div className="rotate-1 rounded bg-card p-3 pb-8 shadow-soft">
              <img
                src="https://raw.githubusercontent.com/nhmbarros-svg/NathalieLabs/main/perfil-novo.png"
                alt="Nathalie Barros"
                className="w-full h-auto object-cover rounded"
              />
              <p className="mt-3 text-center font-display text-primary">Nathalie Barros</p>
            </div>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Eu me chamo Nathalie. Nasci nos anos 90 e sempre fui movida pela curiosidade e pelo gosto de fazer planos e  tirá-los do papel.
            </p>
            <p>
              No momento, estou concluindo a faculdade de Publicidade e Propaganda. Além de me despertar o interesse genuíno pela área de design e criação de marcas, a graduação me deu a chance de encarar a pesquisa bem antes do TCC, por meio da iniciação científica.
            </p>
            <p>
              Foi pelo PIBIC que iniciei a junção da publicidade com a tecnologia. Minha pesquisa sobre o uso de inteligência artificial pelos estudantes de publicidade me fez conhecer a fundo essas ferramentas e enxergar novas possibilidades na criação.
            </p>
            <p>
              E assim nasceu essa relação: o olhar visual da publicidade alimentando o desenvolvimento prático de ferramentas, aplicativos e experimentos dentro do <strong className="text-foreground">Nathalie Labs</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
