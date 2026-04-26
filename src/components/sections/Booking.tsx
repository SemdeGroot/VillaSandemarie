import { CalendarDays, Mail, MessageCircle, Phone } from "lucide-react";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";
import { villa } from "@/lib/villa";
import { site } from "@/lib/site";

export function Booking() {
  return (
    <Section
      id="beschikbaarheid"
      bleed
      className="relative overflow-hidden bg-primary text-paper"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(254,231,169,0.6), transparent 45%), radial-gradient(circle at 80% 80%, rgba(136,167,178,0.4), transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:gap-14 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12 lg:py-32">
        <div className="max-w-xl">
          <Eyebrow tone="warm" className="text-[#fee7a9]">
            Beschikbaarheid & boeken
          </Eyebrow>
          <Display as="h2" className="mt-5 text-[#faf8f3]">
            Stuur een aanvraag, we reageren persoonlijk.
          </Display>
          <p className="mt-7 text-base leading-8 text-[#faf8f3]/82">
            Selecteer jullie data en aantal personen, dan zie je in een
            oogopslag wat het ongeveer gaat kosten. Bevestiging gaat altijd
            via ons: we sturen je persoonlijk een reactie en zetten de boeking
            voor je klaar.
          </p>

          <div className="mt-10 rounded-2xl border border-paper/15 bg-paper/8 p-7 backdrop-blur-md">
            <p className="eyebrow text-highlight">Prijsindicatie</p>
            <ul className="mt-4 space-y-3 text-[15px] leading-7 text-paper/85">
              {villa.pricing.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-highlight" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-6 text-paper/60">
              {villa.pricing.notes}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton
              href={site.whatsapp.nl}
              variant="highlight"
              size="lg"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              WhatsApp
            </LinkButton>
            <LinkButton
              href={`mailto:${site.contact.email}`}
              variant="outline"
              size="lg"
            >
              <Mail size={18} />
              E-mail
            </LinkButton>
          </div>
        </div>

        <form
          name="inquiry"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="rounded-3xl border border-paper/14 bg-paper/8 p-7 backdrop-blur-md sm:p-9"
        >
          <input type="hidden" name="form-name" value="inquiry" />
          <p className="hidden">
            <label>
              Don&apos;t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="flex items-center gap-2 text-paper/85">
            <CalendarDays size={18} className="text-highlight" />
            <p className="font-display text-2xl">Boekingsaanvraag</p>
          </div>
          <p className="mt-2 text-sm text-paper/65">
            Velden met * zijn verplicht. We reageren meestal binnen 24 uur.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Naam *" name="name" type="text" required />
            <Field label="E-mail *" name="email" type="email" required />
            <Field label="Telefoon / WhatsApp" name="phone" type="tel" />
            <Field
              label="Aantal personen *"
              name="guests"
              type="number"
              min={1}
              max={11}
              defaultValue={4}
              required
            />
            <Field label="Aankomst *" name="checkin" type="date" required />
            <Field label="Vertrek *" name="checkout" type="date" required />
          </div>

          <div className="mt-4">
            <label className="block text-xs uppercase tracking-[0.2em] text-paper/65">
              Bericht (optioneel)
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Vertel ons kort wie er meekomen en waar jullie zin in hebben."
              className="mt-2 w-full rounded-2xl border border-paper/15 bg-paper/10 px-4 py-3 text-[15px] text-paper placeholder:text-paper/40 focus:border-highlight focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-highlight px-6 py-4 text-sm font-semibold text-primary transition hover:bg-[#f7dea0]"
          >
            Verstuur aanvraag
          </button>

          <div className="mt-6 flex flex-col gap-2 text-xs text-paper/60 sm:flex-row sm:items-center sm:justify-between">
            <span className="inline-flex items-center gap-2">
              <Phone size={12} /> {site.contact.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail size={12} /> {site.contact.email}
            </span>
          </div>
        </form>
      </div>
    </Section>
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

function Field({ label, name, ...props }: FieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs uppercase tracking-[0.2em] text-paper/65">
        {label}
      </span>
      <input
        name={name}
        {...props}
        className="h-12 rounded-2xl border border-paper/15 bg-paper/10 px-4 text-[15px] text-paper placeholder:text-paper/40 focus:border-highlight focus:outline-none"
      />
    </label>
  );
}
