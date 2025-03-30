import { Button } from "@relume_io/relume-ui";
import { InfoCard } from "../InfoCard";
import { HashLinkButton } from "../HashLinkButton";

const assistantFeatures = [
  {
    title: "Conversational Coordination",
    description:
      "Uses natural language understanding to route tasks, collaborate with other agents, and proactively update stakeholders—maintaining high transparency and efficiency.",
  },
  {
    title: "Intelligent Oversight",
    description:
      "Monitors workflow performance in real time, refining processes on the fly to minimize delays and guarantee each engagement delivers measurable value.",
  },
];

export const AIAssistantSection = () => {
  return (
    <section className="w-full transform-gpu bg-[linear-gradient(to_bottom_right,#060718,#07071A,#0D1218)] flex flex-col items-center justify-center">
      <div id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 lg:gap-x-20">
            <div className="order-2 md:order-1 flex">
              <img
                src="/adam.png"
                className="w-full  object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
                Meet Adam: Your Prime AI Automation Assistant
              </h2>
              <p className="mb-6 md:mb-8 md:text-md">
                Adam stands at the forefront of FastAutomate's hybrid
                approach—combining Intelligent RPA with Generative Agents to
                coordinate every facet of customer interaction. Through
                conversational engagement, Adam monitors incoming inquiries,
                orchestrates task handoffs to specialized agents, and keeps
                real-time visibility on user needs. By aligning data-driven
                precision with human-like dialogue, Adam ensures faster
                resolutions, stronger user experiences, and ongoing
                opportunities for strategic growth.
              </p>
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                {assistantFeatures.map((feature, index) => (
                  <InfoCard
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    className="items-start text-left"
                  />
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <HashLinkButton to="/contact#contact-form" asChild>
                  <Button
                    title="Ask Adam"
                    className="bg-neutral-800"
                    variant="primary"
                  >
                    Ask Adam
                  </Button>
                </HashLinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
