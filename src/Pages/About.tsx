import { CompanyJourneySection } from "../components/about/CompanyJourneySection";
import { LeadershipTeamSection } from "../components/about/LeadershipTeamSection";
import { MissionSection } from "../components/about/MissionSection";
import { Header } from "../components/Header";

export default function AboutPage() {
  return (
    <>
      <Header
        tagline="Innovate"
        title="About FastAutomate"
        description="We are transforming business automation through cutting-edge AI technology that enhances efficiency and productivity."
        buttons={[
          {
            title: "Reach Out To Us",
          },
        ]}
        containerWidth="lg"
        className="py-16 md:py-24 lg:py-28"
      />
      <MissionSection />
      <CompanyJourneySection />
      <LeadershipTeamSection />
    </>
  );
}
