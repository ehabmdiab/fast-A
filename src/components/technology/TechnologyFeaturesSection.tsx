import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { InfoCard } from "../InfoCard";

const features = [
  {
    title: "Smart Screen Capture",
    description:
      "Automates data entry and process flows using cutting-edge UI recognition technology.",
  },
  {
    title: "Adaptive AI Agents",
    description:
      "AI learns and optimizes workflows autonomously, enhancing productivity over time.",
  },
  {
    title: "No-Code Automation",
    description:
      "Implement automation effortlessly without needing any coding skills or technical expertise.",
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Ensures data protection with compliance, encryption, and robust access control measures.",
  },
];

export function TechnologyFeaturesSection() {
  return (
    <section className="w-full bg-neutral-dark flex flex-col items-center justify-center ">
      <div id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="flex flex-col items-start">
            <div className="mx-auto mb-12 max-w-[660px] md:mb-18 lg:mb-20">
              <div>
                <p className="mb-3 text-center font-semibold md:mb-4">
                  Features
                </p>
                <h2 className="mb-5 text-center text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
                  Innovative Features for Seamless Automation
                </h2>
                <p className="text-center md:text-md">
                  Discover how our advanced features redefine automation.
                  Experience efficiency and adaptability like never before.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
              {features.map((feature, index) => (
                <InfoCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
            <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
              <Button
                title="Learn More"
                className="bg-neutral-800"
                variant="secondary"
              >
                Learn More
              </Button>
              <Button
                title="Sign Up"
                variant="link"
                size="link"
                className="bg-neutral-800"
                iconRight={<RxChevronRight />}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
