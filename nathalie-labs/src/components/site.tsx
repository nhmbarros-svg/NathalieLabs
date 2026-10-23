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
          {/* Ícone e link do Behance */}
          <a
            href="https://www.behance.net/nathaliebarros2"
            target="_blank"
            rel="noreferrer"
            aria-label="Behance"
            title="Behance"
            className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/25 transition hover:bg-primary-foreground/10"
          >
            <svg
              viewBox="0 0 24 24"
              width="19"
              height="19"
              fill="currentColor"
            >
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.109 0-5.467-2.079-5.467-5.5 0-3.218 2.305-5.5 5.371-5.5 3.325 0 5.096 2.378 5.096 5.5 0 .408-.046.793-.074.969h-7.892c.071 1.636 1.349 2.731 2.966 2.731 1.342 0 2.215-.658 2.584-1.2h2.142zm-5.064-5.3c-1.242 0-2.193.854-2.384 2.1h4.74c-.059-1.233-.949-2.1-2.356-2.1zm-10.662 5.3h-3.5v-10h3.818c2.193 0 3.682 1.127 3.682 2.923 0 1.234-.735 2.16-1.848 2.574 1.488.423 2.25 1.642 2.25 3.033 0 2.05-1.748 3.47-4.402 3.47zm-1.5-6h1.8c1.077 0 1.95-.49 1.95-1.47 0-.961-.852-1.43-1.95-1.43h-1.8v2.9zm0 4.1h2.051c1.234 0 2.209-.529 2.209-1.61 0-1.11-.996-1.59-2.209-1.59h-2.051v3.2z" />
            </svg>
          </a>
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
