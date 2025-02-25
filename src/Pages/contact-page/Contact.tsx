import { Header } from "../../components/Header";
import { Contact17 } from "./components/Contact17";
import { Contact9 } from "./components/Contact9";
import { Header50 } from "./components/Header50";

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
      <Contact17 />
      <Contact9 />
    </div>
  );
}
