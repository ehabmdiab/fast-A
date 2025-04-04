import { Button } from "@relume_io/relume-ui";
import { HashLinkButton } from "../HashLinkButton";

export const BlogSubscriptionSection = () => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Stay Updated with Our Insights
            </h2>
            <p className="md:text-md">
              Join our community for the latest news, tips, and insights on AI
              automation.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <HashLinkButton to="/contact#contact-form" asChild>
                <Button title="Subscribe">Subscribe</Button>
              </HashLinkButton>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
