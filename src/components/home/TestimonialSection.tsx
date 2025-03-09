import { TestimonialCard } from "../TestimonialCard";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    author: {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      name: "Name Surname",
      position: "Position, Company name",
    },
    companyLogo: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    author: {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      name: "Name Surname",
      position: "Position, Company name",
    },
    companyLogo: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    author: {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      name: "Name Surname",
      position: "Position, Company name",
    },
    companyLogo: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
  },
];

export function TestimonialSection() {
  return (
    <section className="w-full bg-neutral-darkest flex flex-col items-center justify-center ">
      <div id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mb-12 w-full md:mb-18 lg:mb-20">
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Customer testimonials
            </h1>
            <p className="md:text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
