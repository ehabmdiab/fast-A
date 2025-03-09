import { IndustryCard } from "../IndustryCard";

const industries = [
  {
    image: "/Creator.png",
    industry: "Creator / Entrepreneur",
    tagline: "Freedom to Focus on Growth",
    description:
      "Creators and entrepreneurs often operate with limited resources, wearing multiple hats and juggling countless responsibilities. By leveraging our hybrid automation—combining intelligent RPA with generative agents—these small teams can offload repetitive tasks, gain real-time insights into business metrics, and free up bandwidth to innovate and grow without the burden of manual inefficiencies.",
  },
  {
    image: "/Corporate.png",
    industry: "Medium-Sized Business / Corporate",
    tagline: "Streamlined Operations for Sustainable Scaling",
    description:
      "Medium-sized organizations frequently face fragmented processes across multiple departments and a lack of cohesive data insights. With FastAutomate's unified workflows, they can streamline operations, eliminate departmental silos, and maintain consistent customer experiences throughout periods of scaling—ultimately boosting efficiency and agility in a competitive market.",
  },
  {
    image: "/Enterprise.png",
    industry: "Enterprise",
    tagline: "Optimize Complexity, Drive Global Excellence",
    description:
      "Enterprises grapple with complex legacy systems, stringent compliance standards, and vast operational demands. Our automation model integrates seamlessly into existing tech stacks, reduces costly manual overhead, and provides robust security features—empowering large organizations to optimize processes at scale and continuously evolve while safeguarding their data and reputation.",
  },
];

export function BusinessSegmentsSection() {
  return (
    <section className="w-full bg-neutral-dark flex flex-col items-center justify-center ">
      <div id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-12 max-w-[800px] text-center md:mb-18 lg:mb-20">
            <h2 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Smarter Automation, Faster Growth
            </h2>
            <p className="md:text-md">
              FastAutomate streamlines workflows, cuts costs, and delivers
              scalable automation—no coding required.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} />
            ))}
          </div>
          <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24" />
        </div>
      </div>
    </section>
  );
}
