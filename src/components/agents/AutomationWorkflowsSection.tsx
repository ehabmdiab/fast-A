import { InfoCard } from "../InfoCard";
import { Icons } from "../Icons";

const workflows = [
  {
    title: "Lead Generation & Prospect Engagement",
    description: "Quickly capture, qualify, and nurture potential customers.",
    icon: <Icons.lead />,
  },
  {
    title: "Order Fulfillment & Logistics",
    description:
      "Automate inventory checks, shipping updates, and order tracking.",
    icon: <Icons.box />,
  },
  {
    title: "Customer Service & Post-Sale Support",
    description:
      "Handle tickets, returns, and ongoing client communication effortlessly.",
    icon: <Icons.support />,
  },
  {
    title: "Data Maintenance & Continuous Improvement",
    description:
      "Keep your CRM or ERP records accurate and actionable at all times.",
    icon: <Icons.data />,
  },
];

export function AutomationWorkflowsSection() {
  return (
    <section className="w-full transform-gpu bg-[linear-gradient(to_bottom_right,#0D131A,#0D121B,#0D1620)] flex flex-col items-center justify-center">
      <div id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="flex flex-col items-start">
            <div className="mx-auto mb-12 max-w-[750px] md:mb-18 lg:mb-20">
              <div>
                <p className="mb-3 text-center font-semibold md:mb-4">
                  Explore Our Existing Workflows
                </p>
                <h2 className="mb-5 text-center text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
                  Ready-Made Automations for Every Customer Touchpoint
                </h2>
                <p className="text-center md:text-md">
                  FastAutomate offers a suite of pre-built workflows that
                  streamline critical stages of the customer journey. Each
                  workflow harnesses the power of Intelligent RPA and Agentic
                  AI, merging rules-based precision with adaptive, real-time
                  engagement. By tapping into these proven templates, you can
                  quickly optimize processes that traditionally slow your
                  growth, ensuring a seamless experience from first contact to
                  long-term loyalty.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
              {workflows.map((workflow, index) => (
                <InfoCard
                  key={index}
                  title={workflow.title}
                  icon={workflow.icon}
                  description={workflow.description}
                />
              ))}
            </div>
            {/* <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
              <HashLinkButton to="/contact#contact-form" asChild>
                <Button
                  title="Deploy Your Agent"
                  className="bg-neutral-800"
                  variant="secondary"
                >
                  Deploy Your Agent
                </Button>
              </HashLinkButton>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
