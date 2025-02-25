import { Header } from "../../components/Header";
import { Header5 } from "./components/Header5";
import { Layout201 } from "./components/Layout201";
import { Layout22 } from "./components/Layout22";
import { Layout298 } from "./components/Layout298";
import { Layout395 } from "./components/Layout395";

export default function AgentsPage() {
  return (
    <div>
      <Header5 />
      <Header
        title="AI Automation... As Easy as Showing, Not Coding"
        description="Simply record your screen once while performing a task, and the AI will 'shadow' your actions, learning and automating the process."
        buttons={[
          {
            title: "Start Free Trial",
            variant: "secondary-alt",
          },
        ]}
      />
      <Layout201 />
      <Layout395 />
      <Layout298 />
      <Layout22 />
    </div>
  );
}
