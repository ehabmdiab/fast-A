import { Header } from "../../components/Header";
import { Cta13 } from "./components/Cta13";
import { Header50 } from "./components/Header50";
import { Pricing25 } from "./components/Pricing25";
import { Pricing5 } from "./components/Pricing5";
import { Pricing5_1 } from "./components/Pricing5_1";
import { Testimonial4 } from "./components/Testimonial4";

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
      <Pricing5 />
      <Pricing25 />
      <Pricing5_1 />
      <Testimonial4 />
      <Cta13 />
    </>
  );
}
