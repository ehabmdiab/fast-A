import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { HashLinkButton } from "../HashLinkButton";

export const TechnologyBenefitsSection = () => {
  return (
    <section className="w-full transform-gpu bg-[linear-gradient(to_bottom_right,#141E2B,#0D1017,#11191E)] flex flex-col items-center justify-center">
      <div
        id="relume"
        className="w-full relative z-10 px-[5%] py-16 md:py-24 lg:py-28"
      >
        <div className="container">
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-16">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Digital Shadowing</p>
              <h3 className="mb-5 text-3xl font-bold leading-[1.2] md:mb-6 md:text-4xl lg:text-6xl">
                Intelligent RPA: Crush the Mundane, Elevate Your Focus
              </h3>
              <p className="mt-5 md:mt-6">
                FastAutomate’s Intelligent RPA relentlessly tackles repetitive,
                rules-based tasks with unerring precision. By automating data
                entry, invoice processing, and other time-consuming workflows,
                your team is freed to concentrate on high-impact, creative
                endeavors. It’s the first pillar of our hybrid strategy—enabling
                you to scale vital processes without sacrificing accuracy or
                speed.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <HashLinkButton to="/contact#contact-form" asChild>
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="bg-neutral-800"
                  >
                    Demo
                  </Button>
                </HashLinkButton>
              </div>
            </div>
            <div>
              <p className="mb-3 font-semibold md:mb-4">Innovation</p>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                Agentic AI: Adapt on the Fly, Engage with Purpose
              </h3>
              <p className="mt-5 md:mt-6">
                For customer-facing or dynamic operations, FastAutomate’s
                Agentic AI adds a layer of creativity and real-time
                adaptability. Armed with advanced language models, these agents
                interpret context, handle exceptions, and engage in fluid,
                human-like interactions. Coupled with Intelligent RPA, they form
                a seamless, end-to-end solution—powerfully blending rule-based
                consistency with the flexibility to evolve alongside your
                business.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <HashLinkButton to="/contact#contact-form" asChild>
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="bg-neutral-800"
                  >
                    Explore
                  </Button>
                </HashLinkButton>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
