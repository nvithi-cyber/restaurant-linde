/*
 * Design Reminder — Editorial Hospitality Modernism
 * Klassische Raumwirkung, ruhige Hierarchie, warmes Licht,
 * feierliche Eleganz ohne visuelle Überladung.
 */

import { Building2, GlassWater, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  InfoCard,
  PageHero,
  ReservationWidgetPlaceholder,
  SectionHeading,
  SectionShell,
  SiteLayout,
  SplitFeature,
} from "@/components/SiteLayout";
import { spaces } from "@/lib/siteData";
import { Link } from "wouter";

export default function SaeaeliPage() {
  const saeaeli = spaces[1];

  return (
    <SiteLayout>
      <PageHero
        image={saeaeli.image}
        kicker={saeaeli.kicker}
        title="Sääli für Anlässe, Gruppen und Firmenessen."
        text="Das Sääli wird als eigenständiger Bereich mit klassischer, hochwertiger Stimmung inszeniert. Aktuell sind alle Inhalte bewusst als deutsche Platzhalter formuliert, damit Struktur, Typografie und Raumwirkung bereits realistisch beurteilt werden können."
        aside={
          <div className="rounded-[2rem] border border-white/50 bg-white/72 p-7 text-stone-900 shadow-[0_30px_100px_rgba(63,44,28,0.14)] backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Geeignet für</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
              <p>Firmenessen · Gruppen · Familienfeiern · private Anlässe</p>
              <p>Ruhiger Rahmen mit klassischer Premium-Anmutung.</p>
            </div>
          </div>
        }
      />

      <SectionShell surface="bg-[#fbf7f2]">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            kicker="Der Raum"
            title="Feierlich, gepflegt und bewusst etwas formeller erzählt."
            text="Im Kontrast zum offenen Bistro vermittelt das Sääli mehr Ruhe, Struktur und klassische Wertigkeit. So entsteht ein klar lesbarer Unterschied innerhalb derselben Marke."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard
              label="Firmen"
              title="Business Lunches"
              text="Platzhaltertext für konzentrierte Geschäftsessen, kleine Workshops oder bewirtete Besprechungen im stilvollen Rahmen."
            />
            <InfoCard
              label="Privat"
              title="Familienanlässe"
              text="Platzhaltertext für Geburtstage, Taufen oder kleinere Gesellschaften mit wertiger, persönlicher Atmosphäre."
            />
            <InfoCard
              label="Abend"
              title="Dinner-Formate"
              text="Platzhaltertext für gesetzte Abende mit Menücharakter und einer ruhigen, klassischen Raumwirkung."
            />
            <InfoCard
              label="Flexibel"
              title="Individuelle Nutzung"
              text="Platzhaltertext für verschiedene Tischkonfigurationen, Gruppenstärken und auf den Anlass abgestimmte Abläufe."
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell surface="bg-[#f4ede3]">
        <div className="container">
          <SplitFeature
            kicker="Klassischer Charakter"
            title="Ein Raum für Gruppen mit zurückhaltender Noblesse."
            text={saeaeli.longText}
            image={saeaeli.image}
            imageAlt="Klassisches Sääli"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] bg-white/80 p-5 shadow-[0_18px_50px_rgba(71,45,23,0.07)]">
                <Users className="h-7 w-7 text-[#8c6b48]" />
                <p className="mt-4 font-serif-display text-2xl text-stone-950">Gruppenformat</p>
                <p className="mt-2 text-sm leading-7 text-stone-600">Deutscher Platzhaltertext für Gästezahlen, Bestuhlungen und Ablaufoptionen.</p>
              </div>
              <div className="rounded-[1.6rem] bg-white/80 p-5 shadow-[0_18px_50px_rgba(71,45,23,0.07)]">
                <Building2 className="h-7 w-7 text-[#8c6b48]" />
                <p className="mt-4 font-serif-display text-2xl text-stone-950">Firmenessen</p>
                <p className="mt-2 text-sm leading-7 text-stone-600">Platzhaltertext für Business-Dinner, Kundenanlässe oder interne Teamabende.</p>
              </div>
            </div>
          </SplitFeature>
        </div>
      </SectionShell>

      <SectionShell surface="bg-[#fbf7f2]">
        <div className="container grid gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-[#ddd0c1] bg-white/85 p-7 shadow-[0_24px_80px_rgba(71,45,23,0.08)]">
            <GlassWater className="h-8 w-8 text-[#8c6b48]" />
            <h3 className="mt-5 font-serif-display text-3xl text-stone-950">Ablauf & Service</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              Platzhaltertext für Aperitif, Menüfolge, Tischservice und individuelle Abstimmungen für Gruppen.
            </p>
          </article>
          <article className="rounded-[2rem] border border-[#ddd0c1] bg-white/85 p-7 shadow-[0_24px_80px_rgba(71,45,23,0.08)]">
            <Sparkles className="h-8 w-8 text-[#8c6b48]" />
            <h3 className="mt-5 font-serif-display text-3xl text-stone-950">Atmosphäre</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              Platzhaltertext zur ruhigen, klassischen Raumstimmung mit warmem Licht und wertigen Materialien.
            </p>
          </article>
          <article className="rounded-[2rem] border border-[#ddd0c1] bg-white/85 p-7 shadow-[0_24px_80px_rgba(71,45,23,0.08)]">
            <Users className="h-8 w-8 text-[#8c6b48]" />
            <h3 className="mt-5 font-serif-display text-3xl text-stone-950">Reservation</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              Platzhaltertext für eine direkte Anfrage oder Reservierung des Sääli für kleinere und mittlere Gesellschaften.
            </p>
          </article>
        </div>
      </SectionShell>

      <SectionShell surface="bg-[#f4ede3]">
        <div className="container">
          <SectionHeading
            kicker="Reservieren"
            title="Für das Sääli ist eine direkte und hochwertige Anfrageführung entscheidend."
            text="Die nachfolgende Fläche ist als realistischer Placeholder für die spätere produktive Reservierung oder Anfrage über Lightspeed vorbereitet."
          />
          <div className="mt-10">
            <ReservationWidgetPlaceholder compact />
          </div>
          <div className="mt-8 flex justify-start">
            <Link href="/reservation">
              <Button className="rounded-full bg-[#2f241c] px-6 text-[#f7f1e8] hover:bg-[#1f1712]">
                Zur Reservierungsseite
              </Button>
            </Link>
          </div>
        </div>
      </SectionShell>
    </SiteLayout>
  );
}
