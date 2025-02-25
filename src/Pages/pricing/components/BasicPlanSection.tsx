import { InfoCard } from "../../../components/InfoCard";
import { PriceBox } from "../../../components/PriceBox";

const planFeatures = [
  "Smart Screen Capture",
  "Adaptive AI Agents",
  "No-Code Automation",
  "Enterprise-Grade Security",
  "24/7 Customer Support",
  "Feature text goes here",
  "Feature text goes here",
  "Feature text goes here",
  "Feature text goes here",
  "Feature text goes here",
];

const keyFeatures = [
  {
    title: "Key feature heading",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    title: "Key feature heading",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    title: "Key feature heading",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];

export const BasicPlanSection = () => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-8 w-full max-w-lg lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Affordable</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Pricing Plans
          </h2>
          <p className="md:text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
            {keyFeatures.map((feature, index) => (
              <InfoCard
                key={index}
                title={feature.title}
                description={feature.description}
                variant="inline"
              />
            ))}
          </div>
          <div>
            <PriceBox
              variant="horizontal"
              title="Basic Plan"
              subtitle="Ideal for small teams"
              price="$19/mo"
              features={planFeatures}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
