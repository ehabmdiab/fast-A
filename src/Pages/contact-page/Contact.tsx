import { Header } from "../../components/Header";
import { ContactFormSection } from "./components/ContactFormSection";
import { ContactInfoSection } from "./components/ContactInfoSection";

export default function ContactPage() {
  return (
    <div>
      <Header
        tagline="Tagline"
        title="Contact FastAutomate"
        description="Our team is ready to assist you in transforming your business with intelligent automation solutions."
        containerWidth="lg"
        className="py-16 md:py-24 lg:py-28"
      />
      <ContactInfoSection />
      <ContactFormSection />
    </div>
  );
}
