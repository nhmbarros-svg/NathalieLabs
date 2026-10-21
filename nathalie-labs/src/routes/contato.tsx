import { createFileRoute } from "@tanstack/react-router";
import { AtSign, Instagram, Linkedin } from "lucide-react";
import { PageHero } from "@/components/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Nathalie Labs" },
      { name: "description", content: "Fale com Nathalie Barros sobre parcerias em inovação e publicidade." },
      { property: "og:title", content: "Contato | Nathalie Labs" },
      { property: "og:description", content: "Parcerias, conexões e desafios em inovação e publicidade." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Contato" title="Vamos conversar?" text="Aberta a novas conexões, parcerias e desafios em inovação e publicidade." />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-3">
        {[
          { label: "E-mail", Icon: AtSign, value: "nhmbarros@gmail.com", href: "mailto:nhmbarros@gmail.com" },
          { label: "Instagram", Icon: Instagram, value: "@oficialnathalielabs", href: "https://www.instagram.com/oficialnathalielabs/" },
          { label: "LinkedIn", Icon: Linkedin, value: "Nathalie Barros", href: "https://www.linkedin.com/in/nathalie-barros/" },
        ].map(({ label, Icon, value, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            className="rounded-3xl border bg-card p-8 transition hover:-translate-y-1 hover:shadow-soft"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-blush text-accent" aria-hidden="true">
              <Icon size={22} />
            </span>
            <p className="mt-4 break-words font-display text-2xl text-primary">{value}</p>
          </a>
        ))}
      </section>
    </>
  ),
});
