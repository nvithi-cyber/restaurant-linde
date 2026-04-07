/*
 * Design Reminder — Editorial Hospitality Modernism
 * Ruhige Informationsarchitektur, warme Premiumflächen,
 * klare Kontaktpunkte und grosszügige Lesbarkeit.
 */

import { Mail, MapPin, Phone, Route, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PageHero,
  SectionHeading,
  SectionShell,
  SiteLayout,
} from "@/components/SiteLayout";
import { heroImage, siteMeta } from "@/lib/siteData";

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        image={heroImage}
        kicker="Kontakt"
        title="Restaurant Linde in Oftringen kontaktieren."
        text="Die Kontaktseite verdichtet Adresse, Erreichbarkeit und Platzhalterinformationen zu Öffnungszeiten in einer klaren, hochwertigen Struktur. Für die finale Version können hier reale Kontaktwege, Social-Media-Profile und ergänzende Hinweise direkt übernommen werden."
      />

      <SectionShell surface="bg-[#fbf7f2]">
        <div className="container grid gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-[#ddd0c1] bg-white/85 p-7 shadow-[0_24px_80px_rgba(71,45,23,0.08)]">
            <MapPin className="h-8 w-8 text-[#8c6b48]" />
            <h3 className="mt-5 font-serif-display text-3xl text-stone-950">Adresse</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">{siteMeta.address}</p>
          </article>
          <article className="rounded-[2rem] border border-[#ddd0c1] bg-white/85 p-7 shadow-[0_24px_80px_rgba(71,45,23,0.08)]">
            <Phone className="h-8 w-8 text-[#8c6b48]" />
            <h3 className="mt-5 font-serif-display text-3xl text-stone-950">Telefon</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">{siteMeta.phone}</p>
          </article>
          <article className="rounded-[2rem] border border-[#ddd0c1] bg-white/85 p-7 shadow-[0_24px_80px_rgba(71,45,23,0.08)]">
            <Mail className="h-8 w-8 text-[#8c6b48]" />
            <h3 className="mt-5 font-serif-display text-3xl text-stone-950">E-Mail</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">{siteMeta.email}</p>
          </article>
        </div>
      </SectionShell>

      <SectionShell surface="bg-[#f4ede3]">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              kicker="Anfahrt"
              title="Gut erreichbar und klar kommuniziert."
              text="Die Anfahrtssektion ist bewusst grosszügig gehalten, damit auch funktionale Informationen denselben hochwertigen Charakter wie die übrige Website tragen."
            />
            <div className="mt-8 space-y-4 text-base leading-8 text-stone-600">
              <p>
                Dies ist ein deutscher Platzhaltertext für Anreiseinformationen mit Auto, ÖV oder zu Fuss. Später können hier Parkmöglichkeiten, Haltestellen und Wegbeschreibungen ergänzt werden.
              </p>
              <p>
                Auch Hinweise zu barrierearmen Zugängen, Anlieferung für Events oder Treffpunkten für Gruppen lassen sich hier strukturiert ergänzen.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${siteMeta.phone.replace(/\s+/g, "")}`}>
                <Button className="rounded-full bg-[#2f241c] px-6 text-[#f7f1e8] hover:bg-[#1f1712]">
                  <Phone className="mr-2 h-4 w-4" />
                  Jetzt anrufen
                </Button>
              </a>
              <a href={`mailto:${siteMeta.email}`}>
                <Button variant="outline" className="rounded-full border-stone-400 px-6 text-stone-900 hover:bg-white/70">
                  <Send className="mr-2 h-4 w-4" />
                  E-Mail senden
                </Button>
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#ddd0c1] bg-white/80 p-4 shadow-[0_24px_80px_rgba(71,45,23,0.08)] sm:p-5">
            <div className="flex h-[28rem] flex-col justify-between rounded-[1.5rem] bg-[linear-gradient(180deg,#f6efe5,#efe3d2)] p-6 text-stone-700">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Standort</p>
                <h3 className="mt-4 font-serif-display text-3xl text-stone-950">Aeschwuhrstrasse 25</h3>
                <p className="mt-3 text-sm leading-7">4665 Oftringen</p>
              </div>
              <div className="rounded-[1.5rem] border border-[#d8c9b7] bg-white/60 p-5 backdrop-blur-sm">
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-stone-500">
                  <Route className="h-4 w-4" />
                  Kartenbereich
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  Diese Fläche ist als visuell integrierter Platzhalter für eine spätere Karten- oder Routenansicht vorbereitet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>
    </SiteLayout>
  );
}
