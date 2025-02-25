import { Button } from "@relume_io/relume-ui";

export const BlogCallToAction = () => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start justify-start gap-6 border border-border-primary p-8 md:grid-cols-[1fr_max-content] md:items-center md:justify-between md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:p-12">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-[600px]">
              <h3 className="mb-3 text-3xl font-bold leading-[1.2] md:mb-4 md:text-4xl lg:text-6xl">
                Take the Next Step
              </h3>
              <p className="md:text-md">
                Explore more insights and automation tips today!
              </p>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-center justify-start gap-4 md:w-auto md:justify-end">
            <Button title="Read">Read</Button>
            <Button title="Subscribe" variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
