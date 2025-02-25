import { Header } from "../../components/Header";
import { Header50 } from "./components/Header50";
import { Layout22 } from "./components/Layout22";
import { Layout42 } from "./components/Layout42";
import { Team6 } from "./components/Team6";

export default function AboutPage() {
  return (
    <div>
      <Header50 />
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
      <Layout42 />
      <Layout22 />
      <Team6 />
    </div>
  );
}
