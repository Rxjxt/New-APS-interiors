import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactSection from "@/components/contact/ContactSection";
import FAQSection from "@/components/contact/FAQSection";
import ContactCTA from "@/components/contact/ContactCTA";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoCards />
      <ContactSection />
      <FAQSection />
      <ContactCTA />
    </>
  );
}