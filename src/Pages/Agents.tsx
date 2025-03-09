import { AIAssistantSection } from "../components/agents/AIAssistantSection";
import { AutomationWorkflowsSection } from "../components/agents/AutomationWorkflowsSection";
import { CustomizeAgentSection } from "../components/agents/CustomizeAgentSection";
import { DigitalWorkforceSection } from "../components/agents/DigitalWorkforceSection";
import { Header } from "../components/Header";

export default function AgentsPage() {
  return (
    <>
      <Header
        className="relative before:absolute before:inset-0 before:bg-black/10 before:z-10"
        image="/agents-header.png"
        title="AI Automation... As Easy as Showing, Not Coding"
        description="Simply record your screen once while performing a task, and the AI will 'shadow' your actions, learning and automating the process."
        buttons={[
          {
            title: "Start Free Trial",
            variant: "secondary-alt",
            className: "bg-neutral-dark",
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
