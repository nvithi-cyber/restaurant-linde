/*
 * Design Reminder — Editorial Hospitality Modernism
 * Dunkle, intime Premiumflächen, ruhige Dramaturgie,
 * elegante Materialität und klare Differenzierung zwischen Lounge und Wine Room.
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  PageHero,
  ReservationWidgetPlaceholder,
  SectionHeading,
  SectionShell,
  SiteLayout,
  SplitFeature,
} from "@/components/SiteLayout";
import { spaces } from "@/lib/siteData";

export default function LoungeWineRoomPage() {
  const lounge = spaces[2];
  const wineRoom = spaces[3];

  return (
    <SiteLayout>
      <PageHero
        image={lounge.image}
        dark
        kicker="Zigarrenlounge & Wine Room"
        title="Zwei Rückzugsräume für Ruhe, Genuss und private Momente."
        text="Die Website inszeniert beide Bereiche mit dunklerer, intimerer Anmutung als Kontrast zum hellen Bistro. Dadurch entsteht ein klar lesbarer Premium-Auftritt für Gäste, die eine ruhigere und exklusivere Atmosphäre suchen."
        aside={
          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-7 text-[#f3e8d7] shadow-[0_30px_100px_rgba(0,0,0,0.18)] backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d9c7af]">Zwei Charaktere</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[#e2d3c0]">
              <p>Zigarrenlounge: gediegen, ruhig, leder- und holzbetont.</p>
              <p>Wine Room: warm, exklusiv, kuratiert und zurückhaltend luxuriös.</p>
            </div>
          </div>
        }
      />

      <SectionShell surface="bg-[#241a16]">
        <div className="container">
          <SectionHeading
            kicker="Zigarrenlounge"
            title="Gedämpftes Licht, dunkle Tiefe und eine ruhige, gediegene Haltung."
            text="Die Zigarrenlounge wird digital so erzählt, wie es der Raumcharakter verlangt: zurückhaltend, souverän und mit bewusst reduziertem visuellen Tempo."
            light
          />
          <div className="mt-12">
            <SplitFeature
              kicker={lounge.kicker}
              title={lounge.title}
              text={lounge.longText}
              image={lounge.image}
              imageAlt="Zigarrenlounge Restaurant Linde"
              dark
            >
              <div className="flex flex-wrap gap-3">
                <Link href="/reservation">
                  <Button className="rounded-full bg-[#f3e8d7] px-6 text-[#2f241c] hover:bg-white">
                    Lounge reservieren
                  </Button>
                </Link>
                <Link href="/kontakt">
                  <Button variant="outline" className="rounded-full border-[#d9c7af] px-6 text-[#f3e8d7] hover:bg-white/10">
                    Anfrage senden
                  </Button>
                </Link>
              </div>
            </SplitFeature>
          </div>
        </div>
      </SectionShell>

      <SectionShell surface="bg-[#2f241c]">
        <div className="container">
          <SectionHeading
            kicker="Wine Room"
            title="Ein exklusiver Raum mit Wärme, Holz und kuratierter Ruhe."
            text="Der Wine Room wirkt exklusiv, aber nicht demonstrativ. Die Website übernimmt diese Haltung durch strukturierte Typografie, dunklere Oberflächen und grosszügige Bildflächen."
            light
          />
          <div className="mt-12">
            <SplitFeature
              kicker={wineRoom.kicker}
              title={wineRoom.title}
              text={wineRoom.longText}
              image={wineRoom.image}
              imageAlt="Wine Room Restaurant Linde"
              reverse
              dark
            >
              <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 text-[#e7d7c2]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#cab9a1]">Nutzung</p>
                <p className="mt-4 text-sm leading-7 text-[#e2d3c0]">
                  Deutscher Platzhaltertext für Degustationen, kleinere Gruppen, exklusive Runden oder private Genussformate.
                </p>
              </div>
            </SplitFeature>
          </div>
        </div>
      </SectionShell>

      <SectionShell surface="bg-[#f4ede3]">
        <div className="container grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[#ddd0c1] bg-white/85 p-7 shadow-[0_24px_80px_rgba(71,45,23,0.08)]">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Zigarrenlounge</p>
            <h3 className="mt-4 font-serif-display text-3xl text-stone-950">Für ruhige Gespräche und gediegene Abende.</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              Platzhaltertext zu Atmosphäre, Nutzung und Positionierung der Lounge als intimer Rückzugsraum innerhalb des Hauses.
            </p>
          </article>
          <article className="rounded-[2rem] border border-[#ddd0c1] bg-white/85 p-7 shadow-[0_24px_80px_rgba(71,45,23,0.08)]">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Wine Room</p>
            <h3 className="mt-4 font-serif-display text-3xl text-stone-950">Für exklusive Degustationen und private Genussmomente.</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              Platzhaltertext zu Weinabenden, privaten Formaten und kuratierter Nutzung in kleinerem, exklusiverem Rahmen.
            </p>
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
