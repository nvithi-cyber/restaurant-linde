/*
 * Design Reminder — Editorial Hospitality Modernism
 * Klare Conversion-Hierarchie, warme Premiumflächen,
 * ruhige Formularnähe ohne technische Kälte.
 */

import { CalendarClock, Mail, Phone, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  PageHero,
  ReservationWidgetPlaceholder,
  SectionHeading,
  SectionShell,
  SiteLayout,
} from "@/components/SiteLayout";
import { heroImage, reservationReasons, siteMeta } from "@/lib/siteData";

export default function ReservationPage() {
  return (
    <SiteLayout>
      <PageHero
        image={heroImage}
        kicker="Reservation"
        title="Tisch, Raum oder Anlass direkt anfragen."
        text="Diese Seite ist vollständig auf Conversion und Orientierung ausgelegt. Das finale Lightspeed-Widget kann hier unmittelbar eingebettet werden. Bis dahin zeigt die Oberfläche einen hochwertigen, realistischen Placeholder mit klarer Informationsstruktur."
        aside={
          <div className="rounded-[2rem] border border-white/45 bg-white/72 p-7 text-stone-900 shadow-[0_30px_100px_rgba(63,44,28,0.14)] backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Geeignet für</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {reservationReasons.map((reason) => (
                <span key={reason} className="rounded-full bg-[#f6efe5] px-4 py-2 text-sm text-stone-700">
                  {reason}
                </span>
              ))}
            </div>
          </div>
        }
      />

      <SectionShell surface="bg-[#fbf7f2]">
        <div className="container grid gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-[#ddd0c1] bg-white/85 p-7 shadow-[0_24px_80px_rgba(71,45,23,0.08)]">
            <CalendarClock className="h-8 w-8 text-[#8c6b48]" />
            <h3 className="mt-5 font-serif-display text-3xl text-stone-950">Online buchen</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">Platzhaltertext für schnelle Tischreservationen über das produktive Widget.</p>
          </article>
          <article className="rounded-[2rem] border border-[#ddd0c1] bg-white/85 p-7 shadow-[0_24px_80px_rgba(71,45,23,0.08)]">
            <Users className="h-8 w-8 text-[#8c6b48]" />
            <h3 className="mt-5 font-serif-display text-3xl text-stone-950">Gruppen & Anlässe</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">Platzhaltertext für grössere Gruppen, Firmenessen und geschlossene Gesellschaften.</p>
          </article>
          <article className="rounded-[2rem] border border-[#ddd0c1] bg-white/85 p-7 shadow-[0_24px_80px_rgba(71,45,23,0.08)]">
            <Phone className="h-8 w-8 text-[#8c6b48]" />
            <h3 className="mt-5 font-serif-display text-3xl text-stone-950">Direkter Kontakt</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">Für besondere Wünsche ist der direkte Kontakt per Telefon oder E-Mail prominent mitgedacht.</p>
          </article>
        </div>
      </SectionShell>

      <SectionShell surface="bg-[#f4ede3]">
        <div className="container">
          <SectionHeading
            kicker="Lightspeed"
            title="Der offizielle Reservierungs-Embed ist an der vorgesehenen Stelle vorbereitet."
            text="Sobald der definitive Widget-Code vorliegt, ersetzt er diese Fläche ohne strukturelle Änderung des Layouts. Damit bleibt die Gestaltung konsistent und die Conversion sofort einsatzbereit."
          />
          <div id="reservieren" className="mt-10">
            <ReservationWidgetPlaceholder />
          </div>
        </div>
      </SectionShell>

      <SectionShell surface="bg-[#fbf7f2]">
        <div className="container grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[2rem] border border-[#ddd0c1] bg-white/85 p-8 shadow-[0_24px_80px_rgba(71,45,23,0.08)]">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Hinweis</p>
            <h2 className="mt-4 font-serif-display text-4xl text-stone-950">Reservationen mit klarer Wegführung.</h2>
            <p className="mt-5 text-base leading-8 text-stone-600">
              Platzhaltertext für Hinweise zu Buchungsfenstern, Gruppengrössen, Absagen oder Sonderwünschen. Die Seite ist so gestaltet, dass auch spätere Produktivtexte ruhig und hochwertig wirken.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${siteMeta.phone.replace(/\s+/g, "")}`}>
                <Button className="rounded-full bg-[#2f241c] px-6 text-[#f7f1e8] hover:bg-[#1f1712]">
                  {siteMeta.phone}
                </Button>
              </a>
              <a href={`mailto:${siteMeta.email}`}>
                <Button variant="outline" className="rounded-full border-stone-400 px-6 text-stone-900 hover:bg-white/70">
                  <Mail className="mr-2 h-4 w-4" />
                  {siteMeta.email}
                </Button>
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#2f241c] p-8 text-[#f3e8d7] shadow-[0_30px_100px_rgba(47,36,28,0.18)]">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cab9a1]">Bereiche</p>
            <div className="mt-6 space-y-3">
              {reservationReasons.map((reason) => (
                <div key={reason} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                  {reason}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/kontakt">
                <Button className="rounded-full bg-[#f3e8d7] px-6 text-[#2f241c] hover:bg-white">
                  Kontaktseite öffnen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SectionShell>
    </SiteLayout>
  );
}
