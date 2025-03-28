import { Button } from "@relume_io/relume-ui";
import { HashLink } from "react-router-hash-link";
import { HashLinkButton } from "../HashLinkButton";

export const AutomationCallToAction = () => {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl">
            Unlock Your Automation Potential
          </h1>
        </div>
        <div>
          <p className="md:text-md">
            Experience the future of automation with our AI-driven solutions.
            Take the first step towards transforming your business operations
            today.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <HashLinkButton to="/contact#contact-form" asChild>
              <Button title="Start Free Trial">Start Free Trial</Button>
            </HashLinkButton>
            <HashLinkButton to="/contact#contact-form" asChild>
              <Button title="Contact Sales" variant="secondary">
                Contact Sales
              </Button>
            </HashLinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};
