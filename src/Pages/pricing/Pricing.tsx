import { Header } from "../../components/Header";
import { AutomationCallToAction } from "./components/AutomationCallToAction";
import { FreePlanSection } from "./components/FreePlanSection";
import { BasicPlanSection } from "./components/BasicPlanSection";
import { PricingPlansSection } from "./components/PricingPlansSection";
import { TestimonialCard } from "../../components/TestimonialCard";

const testimonial = {
  quote:
    "FastAutomate has transformed our operations, allowing us to focus on strategic initiatives rather than mundane tasks. The efficiency gains have been remarkable!",
  author: {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    name: "John Doe",
    position: "CEO, TechCorp",
  },
  companyLogo: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
};

export default function PricingPage() {
  return (
    <>
      <Header
        tagline="Affordable"
        title="Flexible Pricing Plans"
        description="Choose the plan that fits your needs and start automating your business today."
        buttons={[
          {
            title: "Get Started",
          },
        ]}
        containerWidth="lg"
        className="py-16 md:py-24 lg:py-28"
      />
      <FreePlanSection />
      <PricingPlansSection />
      <BasicPlanSection />
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto w-full max-w-lg">
            <TestimonialCard {...testimonial} variant="centered" />
          </div>
        </div>
      </section>
      <AutomationCallToAction />
    </>
  );
}
