import { Header } from "../../components/Header";
import { CompanyJourneySection } from "./components/CompanyJourneySection";
import { MissionSection } from "./components/MissionSection";
import { LeadershipTeamSection } from "./components/LeadershipTeamSection";

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
