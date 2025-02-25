import { Header } from "../../components/Header";
import { Gallery4 } from "./components/Gallery4";
import { Header5 } from "./components/Header5";
import { Layout122 } from "./components/Layout122";
import { Layout298 } from "./components/Layout298";
import { Layout303 } from "./components/Layout303";
import { Team6 } from "./components/Team6";

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
      <Layout122 />
      <Layout298 />
      <Gallery4 />
      <Team6 />
      <Layout303 />
    </>
  );
}
