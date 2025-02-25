import { AIAssistantSection } from "../components/agents/AIAssistantSection";
import { AutomationWorkflowsSection } from "../components/agents/AutomationWorkflowsSection";
import { CustomizeAgentSection } from "../components/agents/CustomizeAgentSection";
import { DigitalWorkforceSection } from "../components/agents/DigitalWorkforceSection";
import { Header } from "../components/Header";

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
