/*
 * Design Reminder — Editorial Hospitality Modernism
 * Warme Naturtöne, grosszügiger Weissraum, elegante Serif-Headlines,
 * ruhige Premium-Typografie und versetzte Bild-Text-Kompositionen.
 */

import type { PropsWithChildren, ReactNode } from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  navItems,
  openingHours,
  siteMeta,
  socialLinks,
} from "@/lib/siteData";

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const [location] = useLocation();
  const isActive = location === href;

  return (
    <Link href={href}>
      <span
        onClick={onClick}
        className={`group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] transition-colors ${
          isActive ? "text-[#6f4e37]" : "text-stone-700 hover:text-stone-950"
        }`}
      >
        <span>{label}</span>
        <span
          className={`h-px w-6 origin-left bg-current transition-transform ${
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e7dacb]/80 bg-[#f7f1e8]/94 backdrop-blur-xl">
        <div className="container flex h-[5.5rem] items-center justify-between gap-8">
          <Link href="/">
            <span className="flex min-w-[12rem] flex-col text-stone-900">
              <span className="font-serif-display text-[2rem] leading-[0.9] tracking-[0.02em]">Restaurant Linde</span>
              <span className="mt-1.5 text-[9px] uppercase tracking-[0.32em] text-stone-500">
                Bistro zur Linde GmbH
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 xl:gap-10 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={`tel:${siteMeta.phone.replace(/\s+/g, "")}`} className="text-sm text-stone-600 transition hover:text-stone-950">
              {siteMeta.phone}
            </a>
            <Link href="/reservation">
              <Button className="rounded-full bg-[#2f241c] px-6 text-[#f7f1e8] shadow-[0_20px_50px_rgba(47,36,28,0.16)] hover:bg-[#1f1712]">
                Jetzt reservieren
              </Button>
            </Link>
          </div>

          <button
            type="button"
            aria-label="Navigation öffnen"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-white text-stone-900 shadow-sm transition hover:border-stone-400 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-[60] bg-[#201712]/55 backdrop-blur-sm lg:hidden">
          <div className="ml-auto flex h-full w-[min(92vw,24rem)] flex-col bg-[#f7f1e8] px-6 pb-8 pt-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="font-serif-display text-2xl text-stone-950">Restaurant Linde</span>
              <button
                type="button"
                aria-label="Navigation schliessen"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-white text-stone-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-10 flex flex-col gap-6">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} onClick={() => setOpen(false)} />
              ))}
            </div>

            <div className="mt-auto rounded-[2rem] border border-[#dacdbd] bg-white/70 p-5 shadow-[0_24px_80px_rgba(80,54,35,0.08)]">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Reservation & Kontakt</p>
              <p className="mt-3 font-serif-display text-2xl text-stone-900">Planen Sie Ihren Besuch</p>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                Reservieren Sie bequem online oder kontaktieren Sie uns direkt für Gruppen, Anlässe und Firmenessen.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link href="/reservation">
                  <Button className="w-full rounded-full bg-[#2f241c] text-[#f7f1e8] hover:bg-[#1f1712]">
                    Jetzt reservieren
                  </Button>
                </Link>
                <a href={`tel:${siteMeta.phone.replace(/\s+/g, "")}`} className="text-sm text-stone-700">
                  {siteMeta.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#ddd1c2] bg-[#f4ede3] pb-10 pt-18">
      <div className="container grid gap-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Restaurant Linde</p>
          <h2 className="mt-4 max-w-md font-serif-display text-4xl leading-tight text-stone-900 sm:text-5xl">
            Ein warmer Ort für Alltag, Anlass und genussvolle Abende.
          </h2>
          <div className="mt-8 space-y-3 text-sm leading-7 text-stone-600">
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 text-[#8c6b48]" />
              <span>{siteMeta.address}</span>
            </p>
            <p className="flex items-start gap-3">
              <Phone className="mt-1 h-4 w-4 text-[#8c6b48]" />
              <span>{siteMeta.phone}</span>
            </p>
            <p className="flex items-start gap-3">
              <Mail className="mt-1 h-4 w-4 text-[#8c6b48]" />
              <span>{siteMeta.email}</span>
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Öffnungszeiten</p>
          <div className="mt-6 space-y-3">
            {openingHours.map((entry) => (
              <div key={entry.day} className="flex items-start justify-between gap-4 border-b border-stone-200/80 pb-3 text-sm leading-6 text-stone-700">
                <span className="text-stone-900">{entry.day}</span>
                <span className="max-w-[15rem] text-right text-stone-500">{entry.hours}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Mehr entdecken</p>
          <div className="mt-6 flex flex-col gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between rounded-full border border-stone-300/80 bg-white/60 px-5 py-3 text-sm text-stone-700 transition hover:border-stone-400 hover:bg-white"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
            <Link href="/impressum-datenschutz">
              <span className="group inline-flex items-center justify-between rounded-full border border-stone-300/80 bg-white/60 px-5 py-3 text-sm text-stone-700 transition hover:border-stone-400 hover:bg-white">
                <span>Impressum & Datenschutz</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
      <FloatingReservationButton />
    </div>
  );
}

export function FloatingReservationButton() {
  return (
    <Link href="/reservation">
      <span className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-[#2f241c] px-5 py-3 text-sm font-medium text-[#f7f1e8] shadow-[0_24px_80px_rgba(47,36,28,0.24)] transition hover:-translate-y-0.5 hover:bg-[#1f1712] sm:bottom-8 sm:right-8 sm:px-6 sm:py-4">
        <Clock3 className="h-4 w-4" />
        Jetzt reservieren
      </span>
    </Link>
  );
}

export function PageHero({
  image,
  kicker,
  title,
  text,
  dark = false,
  aside,
}: {
  image: string;
  kicker: string;
  title: string;
  text: string;
  dark?: boolean;
  aside?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={`absolute inset-0 ${dark ? "bg-[linear-gradient(90deg,rgba(18,12,9,0.82),rgba(18,12,9,0.52),rgba(18,12,9,0.18))]" : "bg-[linear-gradient(90deg,rgba(245,238,228,0.94),rgba(245,238,228,0.76),rgba(245,238,228,0.18))]"}`} />
      <div className="absolute inset-0 opacity-35" style={{ backgroundImage: "radial-gradient(circle at top left, rgba(255,255,255,0.22), transparent 32%)" }} />

      <div className="container relative grid min-h-[78vh] items-end gap-10 py-20 lg:grid-cols-[1.08fr_0.72fr] lg:py-24">
        <div className={`max-w-[46rem] ${dark ? "text-[#f3e8d7]" : "text-stone-900"}`}>
          <p className={`text-xs uppercase tracking-[0.35em] ${dark ? "text-[#d9c7af]" : "text-stone-600"}`}>{kicker}</p>
          <h1 className="mt-6 max-w-3xl font-serif-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className={`mt-6 max-w-[38rem] text-base leading-8 sm:text-lg ${dark ? "text-[#e6d7c4]" : "text-stone-700"}`}>
            {text}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/reservation">
              <Button className={`rounded-full px-6 ${dark ? "bg-[#f3e8d7] text-[#2f241c] hover:bg-white" : "bg-[#2f241c] text-[#f7f1e8] hover:bg-[#1f1712]"}`}>
                Jetzt reservieren
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button variant="outline" className={`rounded-full border px-6 ${dark ? "border-[#d9c7af] text-[#f3e8d7] hover:bg-white/10" : "border-stone-400 text-stone-900 hover:bg-white/70"}`}>
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </div>

        {aside ? <div className="hidden lg:block lg:justify-self-end lg:w-full lg:max-w-[22rem] xl:max-w-[24rem]">{aside}</div> : <div />}
      </div>
    </section>
  );
}

export function SectionShell({ children, surface = "bg-[#fbf7f2]" }: PropsWithChildren<{ surface?: string }>) {
  return <section className={`${surface} py-18 sm:py-24`}>{children}</section>;
}

export function SectionHeading({
  kicker,
  title,
  text,
  align = "left",
  light = false,
}: {
  kicker: string;
  title: string;
  text: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      <p className={`text-xs uppercase tracking-[0.35em] ${light ? "text-[#d9c7af]" : "text-stone-500"}`}>{kicker}</p>
      <h2 className={`mt-5 font-serif-display text-4xl leading-tight sm:text-5xl ${light ? "text-[#f4e7ce]" : "text-stone-950"}`}>
        {title}
      </h2>
      <p className={`mt-5 text-base leading-8 sm:text-lg ${light ? "text-[#deceb8]" : "text-stone-600"}`}>{text}</p>
    </div>
  );
}

export function InfoCard({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <article className="group rounded-[2rem] border border-[#ddd0c1] bg-white/80 p-6 shadow-[0_24px_80px_rgba(71,45,23,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(71,45,23,0.12)] sm:p-8">
      <p className="text-xs uppercase tracking-[0.35em] text-stone-500">{label}</p>
      <h3 className="mt-5 font-serif-display text-3xl text-stone-900">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">{text}</p>
    </article>
  );
}

export function FramedImage({
  src,
  alt,
  dark = false,
  tall = false,
}: {
  src: string;
  alt: string;
  dark?: boolean;
  tall?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] border ${dark ? "border-white/10 bg-white/5" : "border-[#ddd0c1] bg-white/60"} p-3 shadow-[0_30px_100px_rgba(60,40,24,0.14)]`}>
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      <img
        src={src}
        alt={alt}
        className={`w-full rounded-[1.4rem] object-cover ${tall ? "h-[34rem] sm:h-[42rem]" : "h-[28rem] sm:h-[34rem]"}`}
      />
    </div>
  );
}

export function ReservationWidgetPlaceholder({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-[2rem] border border-[#d7cab9] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(244,237,227,0.92))] p-6 shadow-[0_24px_80px_rgba(68,45,25,0.08)] sm:p-8 lg:p-10">
      <div className="flex flex-col gap-4 border-b border-dashed border-stone-300 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Lightspeed Reservations</p>
          <h3 className="mt-3 font-serif-display text-3xl text-stone-900 sm:text-4xl">Widget-Platzhalter für die offizielle Einbindung</h3>
        </div>
        <span className="inline-flex w-fit rounded-full border border-[#cfbfaa] bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-stone-600">
          Embed vorbereitet
        </span>
      </div>

      <div className={`grid gap-6 ${compact ? "lg:grid-cols-1" : "lg:grid-cols-[1.1fr_0.9fr]"} mt-6`}>
        <div className="rounded-[1.6rem] bg-[#2b211b] p-5 text-[#f2e8d9] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#cab9a1]">Reservierungsmodul</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#cab9a1]">Datum</p>
              <p className="mt-3 text-lg">TT.MM.JJJJ</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#cab9a1]">Personen</p>
              <p className="mt-3 text-lg">2 Gäste</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#cab9a1]">Zeit</p>
              <p className="mt-3 text-lg">19:00 Uhr</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#cab9a1]">Bereich</p>
              <p className="mt-3 text-lg">Bistro</p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-dashed border-[#a88b6b] bg-[#3a2d24] px-4 py-5 text-sm leading-7 text-[#e7d7c2]">
            Hier wird nach Erhalt des definitiven Accounts oder Embed-Codes das offizielle Lightspeed-Reservierungswidget eingefügt.
          </div>
        </div>

        <div className="rounded-[1.6rem] border border-[#ddd0c1] bg-white/70 p-5 sm:p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Hinweis zur Integration</p>
          <p className="mt-4 text-sm leading-7 text-stone-600">
            Die Oberfläche ist als realistischer Embed-Bereich vorbereitet. Sobald der definitive Code aus Lightspeed vorliegt, kann die Platzhalterfläche direkt durch das produktive Widget ersetzt werden.
          </p>
          <div className="mt-5 rounded-2xl bg-[#f4ede3] p-4 font-mono text-xs leading-6 text-stone-600">
            &lt;!-- Offizielles Lightspeed Widget hier einfügen --&gt;
            <br />
            &lt;div id="lightspeed-reservation-widget" /&gt;
          </div>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-600">
            <li>• Sichtbar auf der dedizierten Reservierungsseite.</li>
            <li>• Zusätzlich mit permanentem Floating-CTA auf allen Seiten erreichbar.</li>
            <li>• Gestalterisch bereits auf das warme Premium-Layout abgestimmt.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function SplitFeature({
  kicker,
  title,
  text,
  image,
  imageAlt,
  reverse = false,
  dark = false,
  children,
}: {
  kicker: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  dark?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={`grid items-center gap-10 lg:grid-cols-2 ${reverse ? "" : ""}`}>
      <div className={reverse ? "lg:order-2" : ""}>
        <FramedImage src={image} alt={imageAlt} dark={dark} tall />
      </div>
      <div className={reverse ? "lg:order-1" : ""}>
        <p className={`text-xs uppercase tracking-[0.35em] ${dark ? "text-[#d9c7af]" : "text-stone-500"}`}>{kicker}</p>
        <h3 className={`mt-5 font-serif-display text-4xl leading-tight sm:text-5xl ${dark ? "text-[#f4e7ce]" : "text-stone-950"}`}>{title}</h3>
        <p className={`mt-5 text-base leading-8 sm:text-lg ${dark ? "text-[#e2d3c0]" : "text-stone-600"}`}>{text}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </div>
  );
}
