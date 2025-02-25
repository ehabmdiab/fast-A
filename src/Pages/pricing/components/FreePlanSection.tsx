import { InfoCard } from "../../../components/InfoCard";
import { PriceBox } from "../../../components/PriceBox";

const freePlanFeatures = [
  "Risk-Free Entry",
  "Start Immediately",
  "No-Code Automation",
  "No Technical Skills Needed",
  "Upgrade Your Operations",
  "24/7 Customer Support",
  "Unlock AI Potential",
  "Time Savings",
  "Seamless Scalability",
  "Optimize Operational Costs",
];

const benefitCards = [
  {
    title: "Select a Pre-Trained AI Agent",
    description:
      "Choose from Lead Generation, Lead Profiling, CRM Cleaning, or Candidate Sourcing. Get hands-on experience with AI-driven task automation",
  },
  {
    title: "100 Data Point Generations Per Month",
    description:
      "Automate up to 100 lead enrichments, customer interactions, or data entries See real-world impact on your business without investment",
  },
  {
    title: "Guided AI Experience for Beginners",
    description:
      "Perfect for those exploring AI's potential Understand which automation solutions fit your business best before upgrading",
  },
];

export function FreePlanSection() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-8 w-full max-w-lg lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Affordable</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Experience AI-Powered Automation – Risk-Free & Effortless
          </h2>
          <p className="md:text-md">
            The FREE plan is designed for beginners and businesses exploring AI
            automation. Select one pre-trained AI agent and generate up to 100
            data points per month—no commitment required. Discover how AI can
            streamline workflows, improve efficiency, save time, and drive
            business growth before scaling up
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
            {benefitCards.map((card, index) => (
              <InfoCard
                variant="inline"
                key={index}
                title={card.title}
                description={card.description}
                className="items-start text-left"
              />
            ))}
          </div>
          <div>
            <PriceBox
              variant="horizontal"
              title="FREE Plan"
              subtitle="Ideal for beginners"
              price="$0 /mo"
              features={freePlanFeatures}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
