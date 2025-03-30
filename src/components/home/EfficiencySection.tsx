import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { HashLinkButton } from "../HashLinkButton";

export function EfficencySection() {
  return (
    <section className="relative w-full bg-neutral-dark flex flex-col items-center justify-center">
      <div
        className="absolute  inset-0 bg-[url('/home-sec-2.png')] bg-cover bg-center bg-no-repeat opacity-[0.5]"
        aria-hidden="true"
      ></div>
      <div
        id="relume"
        className="relative z-10 w-full px-[5%] py-16 md:py-24 lg:py-28"
      >
        <div className="container">
          <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Efficiency</p>
              <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                The Power of a Hybrid Approach
              </h1>
              <p className="mb-6 md:mb-8 md:text-md">
                Experience the transformative power of AI-driven automation.
                Streamline your operations and elevate productivity
                effortlessly.
              </p>
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                <div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    Intelligent RPA: Crush the Mundane, Elevate Your Focus
                  </h6>
                  <p>
                    FastAutomate’s Intelligent RPA relentlessly tackles
                    repetitive, rules-based tasks with unerring precision. By
                    automating data entry, invoice processing, and other
                    time-consuming workflows, your team is freed to concentrate
                    on high-impact, creative endeavors. It’s the first pillar of
                    our hybrid strategy—enabling you to scale vital processes
                    without sacrificing accuracy or speed.
                  </p>
                </div>
                <div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    Agentic AI: Adapt on the Fly, Engage with Purpose
                  </h6>
                  <p>
                    For customer-facing or dynamic operations, FastAutomate’s
                    Agentic AI adds a layer of creativity and real-time
                    adaptability. Armed with advanced language models, these
                    agents interpret context, handle exceptions, and engage in
                    fluid, human-like interactions. Coupled with Intelligent
                    RPA, they form a seamless, end-to-end solution—powerfully
                    blending rule-based consistency with the flexibility to
                    evolve alongside your business.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <HashLinkButton to="/contact#contact-form" asChild>
                  <Button
                    title="Get Started"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Get Started
                  </Button>
                </HashLinkButton>
              </div>
            </div>
            <div className="max-w-[600px] w-full h-full max-h-[600px]">
              <img
                src="/hybrid.png"
                className="w-full h-full rounded-3xl object-cover"
                alt="Relume placeholder image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
