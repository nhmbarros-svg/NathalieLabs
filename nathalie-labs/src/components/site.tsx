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
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Nathalie Labs</p>
          <p className="mt-2 text-sm opacity-80">Laboratório de Publicidade, Inovação e Tecnologia.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="opacity-80 hover:opacity-100">{l.label}</Link>
          ))}
        </div>
        <blockquote className="mx-auto mb-6 max-w-xl text-center italic text-muted-foreground opacity-90 font-display">
  “Continuamos avançando, abrindo novas portas e fazendo coisas novas, porque somos curiosos e a curiosidade continua nos levando por novos caminhos.”
  <span className="mt-2 block font-sans text-xs font-semibold not-italic tracking-wider uppercase opacity-75">
    — Walt Disney
  </span>
</blockquote>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "E-mail", href: "mailto:nhmbarros@gmail.com", Icon: AtSign },
            { label: "Instagram", href: "https://www.instagram.com/oficialnathalielabs/", Icon: Instagram },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/nathalie-barros/", Icon: Linkedin },
          ].map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/25 transition hover:bg-primary-foreground/10"
            >
              <Icon size={19} />
            </a>
          ))}
        </div>
      </div>
      <p className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-70">
        © 2026 Nathalie Labs. Desenvolvido com direção de arte autoral e código personalizado.
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
      {p.href && <a href={p.href} target="_blank" rel="noreferrer" className="link-underline mt-5 w-fit text-sm">{p.cta} →</a>}
    </div>
  );
}
