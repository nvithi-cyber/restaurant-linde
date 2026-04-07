/*
 * Design Reminder — Editorial Hospitality Modernism
 * Juristische Inhalte ruhig, lesbar und hochwertig setzen,
 * mit klarer Typografie und viel Weissraum statt technischer Anmutung.
 */

import { FileText, ShieldCheck } from "lucide-react";
import { PageHero, SectionShell, SiteLayout } from "@/components/SiteLayout";
import { heroImage, legalPlaceholders, siteMeta } from "@/lib/siteData";

export default function LegalPage() {
  return (
    <SiteLayout>
      <PageHero
        image={heroImage}
        kicker="Impressum & Datenschutz"
        title="Rechtliche Informationen klar und hochwertig integriert."
        text="Auch rechtliche Inhalte werden hier nicht als gestalterischer Fremdkörper behandelt. Die Seite ist bewusst ruhig, lesbar und mit deutscher Platzhalterstruktur aufgebaut, sodass sie nach der finalen juristischen Prüfung direkt befüllt werden kann."
      />

      <SectionShell surface="bg-[#fbf7f2]">
        <div className="container grid gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[#ddd0c1] bg-white/90 p-8 shadow-[0_24px_80px_rgba(71,45,23,0.08)] sm:p-10">
            <div className="inline-flex rounded-full bg-[#f6efe5] p-3 text-[#8c6b48]">
              <FileText className="h-6 w-6" />
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-stone-500">Impressum</p>
            <h2 className="mt-4 font-serif-display text-4xl text-stone-950">{siteMeta.legalName}</h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-stone-600">
              <p>{siteMeta.address}</p>
              <p>{siteMeta.phone}</p>
              <p>{siteMeta.email}</p>
              <p>{legalPlaceholders.impressum}</p>
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#ddd0c1] bg-white/90 p-8 shadow-[0_24px_80px_rgba(71,45,23,0.08)] sm:p-10">
            <div className="inline-flex rounded-full bg-[#f6efe5] p-3 text-[#8c6b48]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-stone-500">Datenschutz</p>
            <h2 className="mt-4 font-serif-display text-4xl text-stone-950">Datenschutzerklärung</h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-stone-600">
              <p>{legalPlaceholders.datenschutz}</p>
              <p>
                Zusätzliche Hinweise zu Reservierungsdiensten, Kontaktformularen, Social Media, Hosting und allfälligen Analysewerkzeugen können in dieser Struktur ohne Layoutänderung ergänzt werden.
              </p>
            </div>
          </article>
        </div>
      </SectionShell>
    </SiteLayout>
  );
}
