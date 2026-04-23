import { LinkCard } from "./components/LinkCard";
import { Leaf } from "./components/Leaf";
import { buildVCardUrl } from "./lib/vcard";
import {
  CalendarIcon,
  GlobeIcon,
  InstagramIcon,
  MailIcon,
  UserPlusIcon,
} from "./components/icons";

const JULIE = {
  firstName: "Julie",
  lastName: "Bauza",
  title: "Nutritionniste et chef à domicile",
  email: "contact@julie-nutrition.fr",
  phone: "+33783809486",
  website: "https://julie-nutrition.fr",
  instagram: "https://instagram.com/julie.batchcooking",
  instagramHandle: "@julie.batchcooking",
  calendar: "https://cal.com/julie-nutrition",
  photo: "/img/julie.jpg",
};

function App() {
  const vcardHref = buildVCardUrl({
    firstName: JULIE.firstName,
    lastName: JULIE.lastName,
    title: JULIE.title,
    email: JULIE.email,
    phone: JULIE.phone,
    website: JULIE.website,
    instagram: JULIE.instagram,
  });

  return (
    <div className="relative min-h-dvh overflow-hidden bg-cream-100 text-forest-700">
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,var(--color-cream-50),var(--color-cream-100)_60%,var(--color-cream-200))]"
      />
      <Leaf
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-16 -z-10 h-80 w-80 rotate-[18deg] text-forest-500/15 sm:h-[28rem] sm:w-[28rem]"
      />
      <Leaf
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/3 -z-10 h-72 w-72 -rotate-[42deg] text-forest-500/10 sm:h-[24rem] sm:w-[24rem]"
      />
      <Leaf
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rotate-[150deg] text-forest-500/15 sm:h-[26rem] sm:w-[26rem]"
      />

      <main className="mx-auto flex w-full max-w-md flex-col items-center px-5 pb-16 pt-10 sm:max-w-lg sm:pt-16">
        {/* Photo */}
        <div className="relative">
          <span
            aria-hidden
            className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-[2.2rem] bg-forest-700"
          />
          <img
            src={JULIE.photo}
            alt="Julie Bauza, nutritionniste et chef à domicile"
            className="h-40 w-40 rounded-[2rem] object-cover shadow-[0_12px_30px_-12px_rgba(11,74,42,0.45)] ring-4 ring-cream-50 sm:h-48 sm:w-48"
            loading="eager"
          />
        </div>

        {/* Name + eyebrow */}
        <p className="mt-6 flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-forest-500">
          <span className="inline-block h-px w-6 bg-forest-400" />
          Batchcooking à domicile · Nutritionniste
          <span className="inline-block h-px w-6 bg-forest-400" />
        </p>
        <h1 className="mt-3 text-center font-display text-5xl leading-[0.95] text-forest-700 sm:text-6xl">
          Julie Bauza
        </h1>
        <p className="mt-3 max-w-sm text-center text-base leading-relaxed text-forest-700/80">
          Nutritionniste et chef à domicile. Bilan personnalisé, suivi sur
          mesure et batch cooking à domicile pour une alimentation équilibrée et
          savoureuse.
        </p>

        {/* Links */}
        <nav
          aria-label="Liens de contact"
          className="mt-10 flex w-full flex-col gap-3"
        >
          <LinkCard
            href={vcardHref}
            download="julie-bauza.vcf"
            icon={<UserPlusIcon />}
            label="Ajouter à mes contacts"
            hint="VCard"
            variant="primary"
          />
          <LinkCard
            href={JULIE.calendar}
            icon={<CalendarIcon />}
            label="Réserver une prestation"
            hint="cal.com"
            variant="accent"
            external
          />
          <LinkCard
            href={JULIE.website}
            icon={<GlobeIcon />}
            label="Site web"
            hint="julie-nutrition.fr"
            external
          />
          <LinkCard
            href={JULIE.instagram}
            icon={<InstagramIcon />}
            label="Instagram"
            hint={JULIE.instagramHandle}
            external
          />
          <LinkCard
            href={`mailto:${JULIE.email}`}
            icon={<MailIcon />}
            label="Écrire un email"
            hint={JULIE.email}
          />
        </nav>

        <footer className="mt-14 flex flex-col items-center gap-2 text-xs text-forest-700/60">
          <img
            src="/img/logo-wordmark.svg"
            alt="Julie Bauza"
            className="h-9 w-auto"
            loading="lazy"
          />
          <p>© {new Date().getFullYear()} · Tous droits réservés</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
