import { SITE } from "@/lib/site";
import FooterGallery from "@/components/footer-gallery";

export default function Footer() {
  return (
    <footer className="grain relative border-t border-cream/10 bg-aged px-5 py-16 text-cream md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="font-display text-4xl">{SITE.name}</p>
          <p className="mt-3 max-w-sm text-pretty text-cream/60">
            The imaginative country of Kentucky artist Dan Dutton — where the
            garden, the studio, the songs, and the land are one continuous work.
          </p>
        </div>

        <FooterGallery />
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-2 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row">
        <p>© {new Date().getFullYear()} Dan Dutton. All works and images reproduced by permission.</p>
        <p className="font-hand text-base text-cream/50">Made on the land at Dandyland</p>
      </div>
    </footer>
  );
}
