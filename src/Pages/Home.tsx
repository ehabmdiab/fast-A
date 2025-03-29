import { Header } from "../components/Header";
import { CustomerJourneySection } from "../components/home/CustomerJourneySection";
import { EfficencySection } from "../components/home/EfficiencySection";
import { FeatureSection } from "../components/home/FeatureSection";
import { IndustriesSection } from "../components/home/IndustriesSection";

export default function HomePage() {
  return (
    <>
      <Header
        className="relative before:absolute before:inset-0 before:bg-black/10 before:z-10"
        image="/home-header.png"
        title="Discover the Hybrid AI Edge"
        description="FastAutomate merges Intelligent RPA with Generative Agents to capture on-screen actions in real time and transform them into adaptive, data-driven workflows. From routine data entry to complex, multi-step processes, our hybrid solution frees your teams to focus on strategic innovation—while simultaneously cutting costs, minimizing errors, and boosting efficiency at every stage of the customer journey."
        buttons={[
          {
            title: "Start a conversation",
            variant: "secondary-alt",
            className: "bg-neutral-dark",
          },
        ]}
      />
      <FeatureSection />
      <EfficencySection />
      <IndustriesSection />
      <CustomerJourneySection />
      {/* <TestimonialSection /> */}
    </>
  );
}
