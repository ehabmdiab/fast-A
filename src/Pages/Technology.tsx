import { Header } from "../components/Header";
import { BusinessResultsSection } from "../components/technology/BusinessResultsSection";
import { BusinessSegmentsSection } from "../components/technology/BusinessSegmentsSection";
import { TechnologyBenefitsSection } from "../components/technology/TechnologyBenefitsSection";
import { TechnologyDemoSection } from "../components/technology/TechnologyDemoSection";
import { TechnologyFeaturesSection } from "../components/technology/TechnologyFeaturesSection";

export default function TechnologyPage() {
  return (
    <>
      <Header
        title="Record Once, Automate Forever with AI-Powered Learning"
        description="Our patent-pending screen recording technology teaches AI agents complex workflows instantly—train them in minutes, automate for life."
        buttons={[
          {
            title: "Customize Workflow",
          },
          {
            title: "Start Free Trial",
            variant: "secondary-alt",
          },
        ]}
      />
      <TechnologyBenefitsSection />
      <TechnologyFeaturesSection />
      <TechnologyDemoSection />
      <BusinessSegmentsSection />
      <BusinessResultsSection />
    </>
  );
}
