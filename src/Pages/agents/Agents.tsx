import { Header } from "../../components/Header";
import { AIAssistantSection } from "./components/AIAssistantSection";
import { CustomizeAgentSection } from "./components/CustomizeAgentSection";
import { AutomationWorkflowsSection } from "./components/AutomationWorkflowsSection";
import { DigitalWorkforceSection } from "./components/DigitalWorkforceSection";

export default function AgentsPage() {
  return (
    <>
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
      <AIAssistantSection />
      <DigitalWorkforceSection />
      <AutomationWorkflowsSection />
      <CustomizeAgentSection />
    </>
  );
}
