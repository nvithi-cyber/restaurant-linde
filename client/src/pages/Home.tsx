/*
 * Design Reminder — Editorial Hospitality Modernism
 * Helle Premiumflächen, starke Bilddramaturgie, klare Typografie,
 * Bistro als Hauptfokus und warme Materialität mit diskreten Goldakzenten.
 */

import { Link } from "wouter";
import { ArrowRight, CalendarDays, Gift, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FramedImage,
  InfoCard,
  PageHero,
  ReservationWidgetPlaceholder,
  SectionHeading,
  SectionShell,
  SiteLayout,
  SplitFeature,
} from "@/components/SiteLayout";
import {
  bistroMenus,
  events,
  foodImages,
  heroImage,
  siteMeta,
  spaces,
} from "@/lib/siteData";

export default function Home() {
  const bistro = spaces[0];
  const saeaeli = spaces[1];
  const lounge = spaces[2];
  const wineRoom = spaces[3];

  return (
    <SiteLayout>
      <PageHero
        image={heroImage}
        kicker="Modern, elegant, warm und einladend"
        title="Restaurant Linde in Oftringen – ein Haus mit vier Atmosphären."
        text="Das Bistro steht im Mittelpunkt: offen, unkompliziert und stilvoll. Ergänzt wird es durch ein klassisches Sääli, eine gediegene Zigarrenlounge und einen exklusiven Wine Room. Alle Texte und Menüs sind aktuell bewusst als hochwertige deutsche Platzhalter gestaltet."
        aside={
          <div className="rounded-[2rem] border border-white/45 bg-white/70 p-7 text-stone-900 shadow-[0_30px_100px_rgba(63,44,28,0.14)] backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Bistro zur Linde GmbH</p>
            <div className="mt-6 space-y-5">
              <div>
                <p className="font-serif-display text-3xl">Bistro im Fokus</p>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  Heller, zugänglicher Hauptbereich mit starker Tages- und Abendwirkung.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#f6efe5] p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Räume</p>
                  <p className="mt-2 font-serif-display text-3xl">4</p>
                </div>
                <div className="rounded-2xl bg-[#f6efe5] p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Ort</p>
                  <p className="mt-2 text-sm leading-6 text-stone-700">Oftringen</p>
                </div>
              </div>
              <p className="text-sm leading-7 text-stone-600">{siteMeta.address}</p>
            </div>
          </div>
        }
      />

      <SectionShell surface="bg-[#fbf7f2]">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeading
            kicker="Das Haus"
            title="Ein gastronomischer Auftritt mit Ruhe, Haltung und viel Weissraum."
            text="Die Website verbindet die warme Hochwertigkeit der Referenzen mit einer klaren, zeitlosen Präsentation. Der Schwerpunkt liegt auf dem Bistro, während die weiteren Bereiche als eigenständige Raumwelten mit differenzierter Stimmung erzählt werden."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            <InfoCard
              label="Alltag"
              title="Mittag & Abend"
              text="Ein lockerer Premium-Ort für spontane Besuche, Lunches und entspannte Abendessen."
            />
            <InfoCard
              label="Anlass"
              title="Sääli"
              text="Klassisch inszenierter Raum für Gruppen, Firmenessen und private Feiern."
            />
            <InfoCard
              label="Genuss"
              title="Lounge & Wein"
              text="Dunklere, ruhigere Rückzugsräume mit gediegener und exklusiver Stimmung."
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell surface="bg-[#f4ede3]">
        <div className="container">
          <SectionHeading
            kicker="Im Mittelpunkt"
            title="Das Bistro ist die offene Bühne des Hauses."
            text="Hell, zugänglich und selbstverständlich hochwertig: Das Bistro prägt den ersten Eindruck der Marke Restaurant Linde. Materialität, Licht und Grosszügigkeit übersetzen genau jene Atmosphäre, die in den nachgereichten Raumreferenzen sichtbar wird."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <FramedImage src={bistro.image} alt="Bistro-Bereich Restaurant Linde" />
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Hauptfokus Bistro</p>
              <h3 className="mt-5 font-serif-display text-4xl leading-tight text-stone-950 sm:text-5xl">
                Offen für den Alltag, gestaltet wie ein ruhiger Premium-Ort.
              </h3>
              <p className="mt-5 text-base leading-8 text-stone-600 sm:text-lg">
                {bistro.longText}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/bistro">
                  <Button className="rounded-full bg-[#2f241c] px-6 text-[#f7f1e8] hover:bg-[#1f1712]">
                    Bistro entdecken
                  </Button>
                </Link>
                <Link href="/reservation">
                  <Button variant="outline" className="rounded-full border-stone-400 px-6 text-stone-900 hover:bg-white/70">
                    Tisch reservieren
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell surface="bg-[#fbf7f2]">
        <div className="container">
          <SectionHeading
            kicker="Raumwelten"
            title="Vier Bereiche, vier klar lesbare Atmosphären."
            text="Jeder Bereich erhält auf der Website eine eigenständige visuelle Haltung, ohne die Gesamtmarke zu verlassen. Dadurch wirkt der Auftritt differenziert, aber nie zersplittert."
          />
          <div className="mt-12 space-y-16">
            <SplitFeature
              kicker={saeaeli.kicker}
              title={saeaeli.title}
              text={saeaeli.longText}
              image={saeaeli.image}
              imageAlt="Sääli des Restaurant Linde"
            >
              <Link href="/saeaeli">
                <Button className="rounded-full bg-[#6f4e37] px-6 text-[#fbf7f2] hover:bg-[#5d402d]">
                  Zum Sääli
                </Button>
              </Link>
            </SplitFeature>

            <section className="rounded-[2.5rem] bg-[#241a16] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
              <SplitFeature
                kicker={lounge.kicker}
                title={lounge.title}
                text={lounge.longText}
                image={lounge.image}
                imageAlt="Zigarrenlounge des Restaurant Linde"
                reverse
                dark
              >
                <Link href="/lounge-wine-room">
                  <Button className="rounded-full bg-[#f3e8d7] px-6 text-[#2f241c] hover:bg-white">
                    Lounge & Wine Room ansehen
                  </Button>
                </Link>
              </SplitFeature>
            </section>

            <SplitFeature
              kicker={wineRoom.kicker}
              title={wineRoom.title}
              text={wineRoom.longText}
              image={wineRoom.image}
              imageAlt="Wine Room des Restaurant Linde"
            >
              <Link href="/lounge-wine-room">
                <Button variant="outline" className="rounded-full border-stone-400 px-6 text-stone-900 hover:bg-white/70">
                  Mehr erfahren
                </Button>
              </Link>
            </SplitFeature>
          </div>
        </div>
      </SectionShell>

      <SectionShell surface="bg-[#f4ede3]">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              kicker="Menükarten"
              title="Klar gegliedert, redaktionell gesetzt und einfach pflegbar."
              text="Die Startseite zeigt bereits die künftige Struktur für Mittags- und Abendkarte. Inhalte sind aktuell als deutschsprachige Platzhalter aufbereitet, damit Wirkung, Dichte und Typografie realistisch geprüft werden können."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {bistroMenus.map((menu) => (
                <article
                  key={menu.title}
                  className="rounded-[2rem] border border-[#ddd0c1] bg-white/85 p-6 shadow-[0_24px_80px_rgba(71,45,23,0.08)] sm:p-8"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Bistro Menü</p>
                  <h3 className="mt-4 font-serif-display text-3xl text-stone-950">{menu.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{menu.description}</p>
                  <div className="mt-6 space-y-4">
                    {menu.items.map((item) => (
                      <div key={item.name} className="border-b border-stone-200/80 pb-4 last:border-b-0 last:pb-0">
                        <div className="flex items-start justify-between gap-4">
                          <p className="text-base text-stone-900">{item.name}</p>
                          <p className="text-sm text-[#8c6b48]">{item.price}</p>
                        </div>
                        <p className="mt-2 text-sm leading-7 text-stone-500">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell surface="bg-[#fbf7f2]">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              kicker="News & Events"
              title="Saisonale Inhalte können prominent und dennoch ruhig präsentiert werden."
              text="Veranstaltungen, Specials und Themenabende bleiben redaktionell klar, damit die Seite hochwertig statt überladen wirkt."
            />
          </div>
          <div className="grid gap-6">
            {events.map((event) => (
              <article
                key={event.title}
                className="grid gap-6 rounded-[2rem] border border-[#ddd0c1] bg-white/90 p-4 shadow-[0_24px_80px_rgba(71,45,23,0.07)] sm:grid-cols-[0.35fr_0.65fr] sm:p-5"
              >
                <img src={event.image} alt={event.title} className="h-56 w-full rounded-[1.4rem] object-cover sm:h-full" />
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-stone-500">
                      <CalendarDays className="h-4 w-4" />
                      {event.date}
                    </p>
                    <h3 className="mt-4 font-serif-display text-3xl text-stone-950">{event.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-stone-600">{event.text}</p>
                  </div>
                  <Button variant="outline" className="mt-6 w-fit rounded-full border-stone-400 px-5 text-stone-900 hover:bg-[#f6efe5]">
                    Details folgen
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell surface="bg-[#241a16]">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              kicker="Gutscheine"
              title="Ein stilvoller Geschenkanlass mit klarer Conversion-Fläche."
              text="Auch Gutscheine erscheinen nicht als technische Nebensache, sondern als bewusst gestalteter Premium-Block mit eigener Wertigkeit."
              light
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.7rem] border border-white/10 bg-white/5 p-6 text-[#e7d7c2]">
                <Gift className="h-8 w-8 text-[#d9c7af]" />
                <p className="mt-5 font-serif-display text-2xl">Geschenkidee</p>
                <p className="mt-3 text-sm leading-7 text-[#d7c7b4]">
                  Platzhalterinhalt für digitale oder physische Gutscheine mit elegantem Call-to-Action.
                </p>
              </div>
              <div className="rounded-[1.7rem] border border-white/10 bg-white/5 p-6 text-[#e7d7c2]">
                <Sparkles className="h-8 w-8 text-[#d9c7af]" />
                <p className="mt-5 font-serif-display text-2xl">Anlässe & Genuss</p>
                <p className="mt-3 text-sm leading-7 text-[#d7c7b4]">
                  Platzhaltertext für besondere Genussmomente, die sich gut verschenken lassen.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.22)] sm:p-8">
            <img src={foodImages.menu} alt="Speiseinszenierung als Gutscheinbereich" className="h-72 w-full rounded-[1.6rem] object-cover" />
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#cab9a1]">Gutscheinbereich</p>
                <p className="mt-2 font-serif-display text-3xl text-[#f4e7ce]">Wertvoll, einfach, hochwertig präsentiert.</p>
              </div>
              <Button className="rounded-full bg-[#f3e8d7] px-6 text-[#2f241c] hover:bg-white">
                Gutschein anfragen
              </Button>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell surface="bg-[#f4ede3]">
        <div className="container">
          <ReservationWidgetPlaceholder />
          <div className="mt-10 flex flex-col gap-4 rounded-[2rem] border border-[#ddd0c1] bg-white/70 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Reservation sichtbar auf jeder Seite</p>
              <p className="mt-3 font-serif-display text-3xl text-stone-950">Der Floating-CTA führt jederzeit direkt zur Buchung.</p>
            </div>
            <Link href="/reservation">
              <Button className="rounded-full bg-[#2f241c] px-6 text-[#f7f1e8] hover:bg-[#1f1712]">
                Zur Reservierung <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </SectionShell>

      <SectionShell surface="bg-[#fbf7f2]">
        <div className="container grid gap-8 rounded-[2.5rem] border border-[#ddd0c1] bg-white/80 p-8 shadow-[0_24px_80px_rgba(71,45,23,0.07)] lg:grid-cols-[1fr_0.8fr] lg:items-center lg:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Kontakt</p>
            <h2 className="mt-4 max-w-2xl font-serif-display text-4xl leading-tight text-stone-950 sm:text-5xl">
              {siteMeta.legalName} in Oftringen – gut erreichbar für Alltag und Anlass.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
              Adresse, Öffnungszeiten und weitere Kontaktpunkte sind bereits im Footer eingebunden. Auf der Kontaktseite wird derselbe Informationsstandard nochmals klar und mobil optimiert dargestellt.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.7rem] bg-[#f6efe5] p-6">
              <Users className="h-8 w-8 text-[#8c6b48]" />
              <p className="mt-5 font-serif-display text-2xl text-stone-950">Gruppen & Firmenessen</p>
              <p className="mt-3 text-sm leading-7 text-stone-600">Anfragebereiche für grössere Formate sind strukturell bereits vorbereitet.</p>
            </div>
            <div className="rounded-[1.7rem] bg-[#f6efe5] p-6">
              <CalendarDays className="h-8 w-8 text-[#8c6b48]" />
              <p className="mt-5 font-serif-display text-2xl text-stone-950">Events & Genussabende</p>
              <p className="mt-3 text-sm leading-7 text-stone-600">News und Eventformate lassen sich ohne Stilbruch prominent ergänzen.</p>
            </div>
          </div>
        </div>
      </SectionShell>
    </SiteLayout>
  );
}
