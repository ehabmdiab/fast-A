import { IndustryCard } from "../IndustryCard";

const industryCards = [
  {
    image: "/healthcare.jpg",
    industry: "Healthcare",
    tagline:
      "Streamline Patient Care or Risk Overwhelming Administrative Burdens",
    description:
      "Automated patient onboarding, claims processing, and record updates streamline every touchpoint—reducing wait times and administrative errors. By combining intelligent RPA for routine tasks with generative agents for adaptive engagement, healthcare providers deliver smoother patient experiences and gain more time for patient-focused innovation.",
  },
  {
    image: "/banking.jpg",
    industry: "Banking & Financial Services",
    tagline: "Speed Up Compliance or Lose Ground in a High-Stakes Environment",
    description:
      "Automating document workflows, KYC checks, and loan approvals drastically cuts manual overhead, ensuring faster transactions and fewer errors. Intelligent RPA maintains precision for compliance, while generative agents enhance decision-making—driving seamless customer journeys in an industry where speed and trust are paramount.",
  },
  {
    image: "/ecommerce.jpg",
    industry: "E-commerce & Retail",
    tagline: "Elevate Customer Experience or Fall Behind Customer Expectations",
    description:
      "End-to-end order handling, inventory updates, and returns become frictionless with an intelligent RPA backbone. Layering generative agents on top personalizes the shopping experience—offering tailored product suggestions and dynamic support—leading to higher conversions, repeat business, and elevated customer satisfaction.",
  },
];

export function IndustriesSection() {
  return (
    <section className="relative w-full transform-gpu bg-[linear-gradient(to_bottom_right,#0D1A24,#0C141D,#0F1219,#0D1623)] flex flex-col items-center justify-center">
      <div id="relume" className="  w-full px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
            <h2 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Automate or Be Left Behind
            </h2>
            <p className="md:text-md">
              Harness hybrid intelligent RPA and generative agents to optimize
              your operations and thrive in any market. From healthcare to
              e-commerce, discover how seamless automation elevates every
              customer touchpoint—propelling efficiency, cost savings, and
              measurable growth.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {industryCards.map((card, index) => (
              <IndustryCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24" />
        </div>
      </div>
    </section>
  );
}
