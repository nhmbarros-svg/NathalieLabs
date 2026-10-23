import { Link } from "@tanstack/react-router";
import { AtSign, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/nb-02.svg.asset.json";

export const IMG = "https://raw.githubusercontent.com/nhmbarros-svg/NathalieLabs/main";
export const LED_URL =
  "https://somos.globo.com/movimento-led/academia-led/noticia/conheca-os-80-estudantes-selecionados-para-maratona-de-ia-da-academia-led-globo.ghtml";

const links = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre mim" },
  { to: "/projetos", label: "Projetos" },
  { to: "/pesquisa", label: "Pesquisa" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5 md:gap-3">
          <img src={logoAsset.url} alt="" className="h-9 w-auto lg:h-11" />
          <span className="relative top-[0.06em] whitespace-nowrap font-display text-2xl font-semibold leading-none tracking-tight text-primary lg:top-[0.11em] lg:text-4xl lg:font-normal">
            Nathalie Labs
          </span>
        </Link>
        <nav className="hidden items-center gap-5 md:flex lg:gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-semibold" }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contato" className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-accent">
            Fale comigo
          </Link>
        </nav>
        <button className="md:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2 text-muted-foreground" activeOptions={{ exact: true }} activeProps={{ className: "text-primary font-semibold" }}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">Nathalie Labs</p>
            <p className="mt-2 text-sm opacity-80">Laborat&oacute;rio de Publicidade, Inova&ccedil;&atilde;o e Tecnologia.</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="opacity-80 hover:opacity-100">{l.label}</Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="mailto:nhmbarros@gmail.com"
              aria-label="E-mail"
              title="E-mail"
              className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/25 transition hover:bg-primary-foreground/10"
            >
              <AtSign size={19} />
            </a>
            <a
              href="https://www.instagram.com/oficialnathalielabs/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/25 transition hover:bg-primary-foreground/10"
            >
              <Instagram size={19} />
            </a>
            <a
              href="https://www.linkedin.com/in/nathalie-barros/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/25 transition hover:bg-primary-foreground/10"
            >
              <Linkedin size={19} />
            </a>
            <a
              href="https://www.behance.net/nathaliebarros2"
              target="_blank"
              rel="noreferrer"
              aria-label="Behance"
              title="Behance"
              className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/25 transition hover:bg-primary-foreground/10"
            >
              <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.109 0-5.467-2.079-5.467-5.5 0-3.218 2.305-5.5 5.371-5.5 3.325 0 5.096 2.378 5.096 5.5 0 .408-.046.793-.074.969h-7.892c.071 1.636 1.349 2.731 2.966 2.731 1.342 0 2.215-.658 2.584-1.2h2.142zm-5.064-5.3c-1.242 0-2.193.854-2.384 2.1h4.74c-.059-1.233-.949-2.1-2.356-2.1zm-10.662 5.3h-3.5v-10h3.818c2.193 0 3.682 1.127 3.682 2.923 0 1.234-.735 2.16-1.848 2.574 1.488.423 2.25 1.642 2.25 3.033 0 2.05-1.748 3.47-4.402 3.47zm-1.5-6h1.8c1.077 0 1.95-.49 1.95-1.47 0-.961-.852-1.43-1.95-1.43h-1.8v2.9zm0 4.1h2.051c1.234 0 2.209-.529 2.209-1.61 0-1.11-.996-1.59-2.209-1.59h-2.051v3.2z" />
              </svg>
            </a>
          </div>
        </div>

        <blockquote className="mx-auto mt-12 max-w-2xl border-t border-primary-foreground/15 pt-8 text-center font-display italic text-primary-foreground/90">
          &ldquo;Continuamos avan&ccedil;ando, abrindo novas portas e fazendo coisas novas, porque somos curiosos e a curiosidade continua nos levando por novos caminhos.&rdquo;
          <span className="mt-2 block font-sans text-xs font-semibold not-italic tracking-wider uppercase opacity-75">
            &mdash; Walt Disney
          </span>
        </blockquote>
      </div>

      <p className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-70">
        &copy; 2026 Nathalie Labs. Desenvolvido por Nathalie Barros.
      </p>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-blush/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{text}</p>
      </div>
    </section>
  );
}

export const projects = [
  { name: "Meus Medicamentos", icon: "meus-medicamentos.png", text: "Solução mobile para otimizar o gerenciamento autônomo de rotinas medicamentosas, unindo utilidade diária e design centrado no usuário.", cta: "Participe como testador", href: LED_URL },
  { name: "Meus Medicamentos – Cuidador", icon: "meus-medicamentos-cuidador.png", text: "Extensão voltada a cuidadores e familiares, facilitando o monitoramento seguro e humanizado de tratamentos complexos.", cta: "Acesse a página de testes", href: LED_URL },
  { name: "Alcance", icon: "icone-alcance.png", text: "Nova iniciativa em fase inicial de concepção, explorando fronteiras de expansão digital e engajamento multiplataforma.", badge: "Em desenvolvimento" },
];

export function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <div className="flex flex-col rounded-2xl border bg-card p-7 transition hover:-translate-y-1 hover:shadow-soft">
      <img src={`${IMG}/${p.icon}`} alt="" className="h-14 w-14 rounded-xl border object-cover" />
      <h3 className="mt-5 text-xl">{p.name}</h3>
      {p.badge && <span className="mt-2 w-fit rounded-full bg-secondary px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-secondary-foreground">{p.badge}</span>}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
      {p.href && <a href={p.href} target="_blank" rel="noreferrer" className="link-underline mt-5 w-fit text-sm">{p.cta} &rarr;</a>}
    </div>
  );
}
