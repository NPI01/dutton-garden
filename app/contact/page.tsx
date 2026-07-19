import type { Metadata } from "next";
import PageHeader from "@/components/section/page-header";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to Dan Dutton — general inquiries, collectors and galleries, press and research, performance and licensing, commissions, and studio visits.",
};

export default function ContactPage() {
  return (
    <div className="ground-cream grain min-h-screen">
      <PageHeader
        kicker="Write to Dandyland"
        title="Contact"
        lede="However you found your way here, we're glad you did. Tell us what you're after and we'll answer as soon as the season allows."
      />
      <div className="mx-auto grid max-w-4xl gap-12 px-5 pb-28 md:grid-cols-[1fr_1.1fr] md:px-8">
        <aside className="text-soil/75">
          <p className="text-pretty">
            Dandyland is a working farm and studio, not a gallery front desk, so
            replies come from Dan and his people directly. For studio visits,
            please don&apos;t send a home address in your first note — we&apos;ll
            arrange details privately.
          </p>
          <p className="mt-6 font-hand text-xl text-terracotta">
            — made on the land, answered by hand
          </p>
        </aside>
        <ContactForm />
      </div>
    </div>
  );
}
