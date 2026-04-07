/*
 * Design Reminder — Editorial Hospitality Modernism
 * Bistro als heller Hauptfokus, luftige Kompositionen, warme Materialien,
 * klare Menüstruktur und zugängliche Premium-Wirkung.
 */

import { Coffee, MenuSquare, SunMedium, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  FramedImage,
  InfoCard,
  PageHero,
  ReservationWidgetPlaceholder,
  SectionHeading,
  SectionShell,
  SiteLayout,
} from "@/components/SiteLayout";
import { bistroMenus, foodImages, spaces } from "@/lib/siteData";

export default function BistroPage() {
  const bistro = spaces[0];

  return (
    <SiteLayout>
      <PageHero
        image={bistro.image}
        kicker={bistro.kicker}
        title="Das Bistro – offen, hell und unkompliziert hochwertig."
        text="Als Hauptfokus der Website trägt das Bistro die zugänglichste Seite der Marke Restaurant Linde. Die Seite verbindet grosszügige Bildflächen, klare Typografie und eine Menüpräsentation, die bereits mit deutschsprachigen Platzhaltertexten realistisch getestet wird."
        aside={
          <div className="rounded-[2rem] border border-white/50 bg-white/72 p-7 text-stone-900 shadow-[0_30px_100px_rgba(63,44,28,0.14)] backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Bistro-Charakter</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#f6efe5] p-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500">Atmosphäre</p>
                <p className="mt-2 text-sm leading-6 text-stone-700">Locker & offen</p>
              </div>
              <div className="rounded-2xl bg-[#f6efe5] p-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500">Auftritt</p>
                <p className="mt-2 text-sm leading-6 text-stone-700">Warm & modern</p>
              </div>
            </div>
          </div>
        }
      />

      <SectionShell surface="bg-[#fbf7f2]">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            kicker="Der Hauptbereich"
            title="Ein Bistro, das Alltagstauglichkeit und Wertigkeit sichtbar verbindet."
            text="Die helle, ruhige Raumstimmung aus den Referenzbildern prägt diesen Bereich. So entsteht ein Auftritt, der offen für alle wirkt, ohne beliebig oder standardisiert auszusehen."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard
              label="Mittag"
              title="Unkompliziert"
              text="Platzhaltertext für ein zugängliches Mittagsangebot mit schneller Orientierung und klarer Menülogik."
            />
            <InfoCard
              label="Abend"
              title="Stilvoll"
              text="Platzhaltertext für ein entspanntes Abendgefühl mit warmem Licht und ruhiger Premium-Anmutung."
            />
            <InfoCard
              label="Treffpunkt"
              title="Für alle"
              text="Platzhaltertext für spontane Besuche, kleine Runden und unkomplizierte gastronomische Momente."
            />
            <InfoCard
              label="Marke"
              title="Hauptfokus"
              text="Platzhaltertext für die Rolle des Bistro als sichtbarster und offenster Bereich des Hauses."
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell surface="bg-[#f4ede3]">
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <FramedImage src={bistro.image} alt="Bistro Atmosphäre" tall />
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Raumgefühl</p>
            <h2 className="mt-5 font-serif-display text-4xl leading-tight text-stone-950 sm:text-5xl">
              Grosszügiges Licht, feine Materialien und ein entspannter Ton.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-600 sm:text-lg">{bistro.longText}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] bg-white/80 p-5 shadow-[0_18px_50px_rgba(71,45,23,0.07)]">
                <SunMedium className="h-7 w-7 text-[#8c6b48]" />
                <p className="mt-4 font-serif-display text-2xl text-stone-950">Helle Wirkung</p>
                <p className="mt-2 text-sm leading-7 text-stone-600">Platzhaltertext zur offenen Tagesstimmung und zur einladenden Gesamtwirkung.</p>
              </div>
              <div className="rounded-[1.6rem] bg-white/80 p-5 shadow-[0_18px_50px_rgba(71,45,23,0.07)]">
                <Users className="h-7 w-7 text-[#8c6b48]" />
                <p className="mt-4 font-serif-display text-2xl text-stone-950">Für alle gedacht</p>
                <p className="mt-2 text-sm leading-7 text-stone-600">Platzhaltertext für die zugängliche Positionierung ohne Verlust an Wertigkeit.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell surface="bg-[#fbf7f2]">
        <div className="container">
          <SectionHeading
            kicker="Menü"
            title="Die Speisekarte erscheint aufgeräumt, lesbar und gastronomisch überzeugend."
            text="Die Darstellung vermeidet überladene Kartenoptik und setzt stattdessen auf grosszügige Typografie, klare Preisführung und ruhige Unterteilung."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <img src={foodImages.brunch} alt="Bistro Food Placeholder" className="h-full min-h-[24rem] w-full rounded-[2rem] object-cover shadow-[0_24px_80px_rgba(71,45,23,0.1)]" />
            <div className="grid gap-6 lg:grid-cols-2">
              {bistroMenus.map((menu) => (
                <article key={menu.title} className="rounded-[2rem] border border-[#ddd0c1] bg-white/85 p-6 shadow-[0_24px_80px_rgba(71,45,23,0.08)] sm:p-8">
                  <div className="flex items-center gap-3">
                    <MenuSquare className="h-5 w-5 text-[#8c6b48]" />
                    <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Bistrokarte</p>
                  </div>
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

      <SectionShell surface="bg-[#f4ede3]">
        <div className="container grid gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-[#ddd0c1] bg-white/85 p-7 shadow-[0_24px_80px_rgba(71,45,23,0.08)]">
            <Coffee className="h-8 w-8 text-[#8c6b48]" />
            <h3 className="mt-5 font-serif-display text-3xl text-stone-950">Mittagsmomente</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">Platzhaltertext für schnell verständliche Mittagskommunikation und wechselnde Tagesangebote.</p>
          </article>
          <article className="rounded-[2rem] border border-[#ddd0c1] bg-white/85 p-7 shadow-[0_24px_80px_rgba(71,45,23,0.08)]">
            <SunMedium className="h-8 w-8 text-[#8c6b48]" />
            <h3 className="mt-5 font-serif-display text-3xl text-stone-950">Licht & Offenheit</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">Platzhaltertext zur räumlichen Grosszügigkeit und zur ruhigen, hellen Bistro-Anmutung.</p>
          </article>
          <article className="rounded-[2rem] border border-[#ddd0c1] bg-white/85 p-7 shadow-[0_24px_80px_rgba(71,45,23,0.08)]">
            <Users className="h-8 w-8 text-[#8c6b48]" />
            <h3 className="mt-5 font-serif-display text-3xl text-stone-950">Direkt reservieren</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">Platzhaltertext für eine schnelle Tischbuchung mit klarer, sichtbar platzierter Conversion-Fläche.</p>
          </article>
        </div>
      </SectionShell>

      <SectionShell surface="bg-[#fbf7f2]">
        <div className="container">
          <ReservationWidgetPlaceholder compact />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/reservation">
              <Button className="rounded-full bg-[#2f241c] px-6 text-[#f7f1e8] hover:bg-[#1f1712]">
                Jetzt reservieren
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button variant="outline" className="rounded-full border-stone-400 px-6 text-stone-900 hover:bg-white/70">
                Kontakt
              </Button>
            </Link>
          </div>
        </div>
      </SectionShell>
    </SiteLayout>
  );
}
