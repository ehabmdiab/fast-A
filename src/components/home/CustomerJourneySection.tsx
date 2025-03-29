import { Button } from "@relume_io/relume-ui";
import { InfoCard } from "../InfoCard";
import { HashLinkButton } from "../HashLinkButton";

const journeySteps = [
  {
    title: "1. Discovery",
    description:
      "Begin with an in-depth needs assessment to uncover operational bottlenecks, chart objectives, and align automation goals to measurable business outcomes.",
  },
  {
    title: "2. Design",
    description:
      "Craft a tailored blueprint that pinpoints each customer touchpoint, defines data flows, and seamlessly integrates hybrid RPA plus generative agents.",
  },
  {
    title: "3. Deployment",
    description:
      "Implement secure, API-driven workflows, monitor analytics, maintain compliance, and ensure smooth operations for consistent, high-quality results.",
  },
  {
    title: "4. Optimization",
    description:
      "Continuously refine processes with performance insights, automate iterative enhancements, and proactively drive ongoing retention, broader expansion, and measurable ROI improvements.",
  },
];

export function CustomerJourneySection() {
  return (
    <section className="relative w-full bg-neutral-dark flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-[url('/home-sec-3.webp')] bg-cover bg-center bg-no-repeat opacity-[0.5]"
        aria-hidden="true"
      ></div>
      <div
        id="relume"
        className="relative z-10 w-full px-[5%] py-16 md:py-24 lg:py-28"
      >
        <div className="container">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
                How It Works: The Customer Journey Blueprint
              </h2>
              <p className="md:text-md">
                Eliminate manual inefficiencies and drive measurable ROI with
                FastAutomate. Our patent-pending technology leverages a hybrid
                model—integrating intelligent RPA with advanced generative
                agents—to enhance every phase of your customer's journey with
                improved accuracy and real-time responsiveness. Every step is
                engineered to reduce friction, deliver seamless experiences, and
                fuel business growth.
              </p>
            </div>
          </div>
          <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
            <div className=" h-full grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
              <InfoCard
                title={journeySteps[0].title}
                description={journeySteps[0].description}
              />
              <InfoCard
                className="self-end"
                title={journeySteps[1].title}
                description={journeySteps[1].description}
              />
            </div>
            <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
              <img
                src="customer-blueprint.png"
                alt="Customer Journey illustration"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className=" h-full grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
              <InfoCard
                title={journeySteps[2].title}
                description={journeySteps[2].description}
              />
              <InfoCard
                className="self-end"
                title={journeySteps[3].title}
                description={journeySteps[3].description}
              />
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <HashLinkButton to="/contact#contact-form" asChild>
              <Button className="bg-neutral-light-dark " variant="secondary">
                Request Demo
              </Button>
            </HashLinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
