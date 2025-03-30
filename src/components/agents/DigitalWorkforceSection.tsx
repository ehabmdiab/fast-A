import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { HashLinkButton } from "../HashLinkButton";

export const DigitalWorkforceSection = () => {
  return (
    <section className="relative w-full bg-neutral-dark flex flex-col items-center justify-center">
      <div
        className="absolute  inset-0 bg-[url('/agent-sec-2.png')] bg-cover bg-center bg-no-repeat opacity-[0.5]"
        aria-hidden="true"
      ></div>

      <div
        id="relume"
        className=" relative z-10 w-full px-[5%] py-16 md:py-24 lg:py-28"
      >
        <div className="container">
          <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Meet Your Digital Workforce
            </h1>
            <p className="md:text-md">
              Empowering your business with intelligent automation.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
            <div className="flex flex-col border border-border-primary">
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img src="/tiara.png" alt="Relume placeholder image 1" />
              </div>
              <div className="flex flex-1 flex-col  p-6 md:p-8 justify-between">
                <div>
                  <p className="mb-2 font-semibold">Innovative</p>
                  <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    Introducing Tiara, Your HR Specialist
                  </h2>
                  <p>Automates applicant tracking and interview scheduling.</p>
                </div>
                <div className="mt-5 md:mt-6">
                  <HashLinkButton to="/contact#contact-form" asChild>
                    <Button
                      title="Learn More"
                      variant="link"
                      size="link"
                      className="bg-neutral-800"
                      iconRight={<RxChevronRight />}
                    >
                      Learn More
                    </Button>
                  </HashLinkButton>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img src="/Jasmin.png" alt="Relume placeholder image 1" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                <div>
                  <p className="mb-2 font-semibold">Expert</p>
                  <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    Meet Jasmin, Your Data Expert
                  </h2>
                  <p>Handles data validation, migration, and integration.</p>
                </div>
                <div className="mt-5 md:mt-6">
                  <HashLinkButton to="/contact#contact-form" asChild>
                    <Button
                      title="Discover"
                      variant="link"
                      size="link"
                      className="bg-neutral-800"
                      iconRight={<RxChevronRight />}
                    >
                      Discover
                    </Button>
                  </HashLinkButton>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img src="/Ramsey.png" alt="Relume placeholder image 1" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                <div>
                  <p className="mb-2 font-semibold">Efficient</p>
                  <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    Introducing Ramsey, Your Operations Specialist
                  </h2>
                  <p>Optimizes workflow automation and quality control.</p>
                </div>
                <div className="mt-5 md:mt-6">
                  <HashLinkButton to="/contact#contact-form" asChild>
                    <Button
                      title="Explore"
                      variant="link"
                      className="bg-neutral-800"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Explore
                    </Button>
                  </HashLinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
