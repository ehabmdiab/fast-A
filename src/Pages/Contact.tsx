import { Header } from "../components/Header";
import { ContactFormSection } from "../components/contact/ContactFormSection";
import { ContactInfoSection } from "../components/contact/ContactInfoSection";

export default function ContactPage() {
  return (
    <>
      <Header
        tagline="Tagline"
        title="Contact FastAutomate"
        description="Our team is ready to assist you in transforming your business with intelligent automation solutions."
        containerWidth="lg"
        className="py-16 md:py-24 lg:py-28"
      />
      <ContactInfoSection />
      <ContactFormSection />
    </>
  );
}
