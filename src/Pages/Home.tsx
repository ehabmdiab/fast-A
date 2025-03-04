import { Header } from "../components/Header";
import { CustomerJourneySection } from "../components/home/CustomerJourneySection";
import { EfficencySection } from "../components/home/EfficiencySection";
import { FeatureSection } from "../components/home/FeatureSection";
import { IndustriesSection } from "../components/home/IndustriesSection";
import { TestimonialSection } from "../components/home/TestimonialSection";

export default function HomePage() {
  return (
    <>
      <Header
        title="Discover the Hybrid AI Edge"
        description="FastAutomate merges Intelligent RPA with Generative Agents to capture on-screen actions in real time and transform them into adaptive, data-driven workflows. From routine data entry to complex, multi-step processes, our hybrid solution frees your teams to focus on strategic innovation—while simultaneously cutting costs, minimizing errors, and boosting efficiency at every stage of the customer journey."
        buttons={[
          {
            title: "Start a conversation",
            variant: "secondary-alt",
          },
        ]}
      />
      <FeatureSection />
      <EfficencySection />
      <IndustriesSection />
      <CustomerJourneySection />
      <TestimonialSection />
    </>
  );
}
