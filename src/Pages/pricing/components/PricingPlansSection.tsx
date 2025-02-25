import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import { PriceBox } from "../../../components/PriceBox";

const monthlyPlans = [
  {
    title: "Basic Plan",
    subtitle: "Ideal for small teams",
    price: "$19/mo",
    features: [
      "Smart Screen Capture",
      "Adaptive AI Agents",
      "No-Code Automation",
    ],
  },
  {
    title: "Business Plan",
    subtitle: "Perfect for growing businesses",
    price: "$29/mo",
    features: [
      "Enterprise-Grade Security",
      "24/7 Customer Support",
      "Regular Feature Updates",
      "All Basic Plan Features",
    ],
  },
  {
    title: "Enterprise Plan",
    subtitle: "Best for individuals and startups",
    price: "$49/mo",
    features: [
      "Advanced Analytics Tools",
      "Custom Integration Options",
      "Dedicated Account Manager",
      "Priority Support Access",
      "Enhanced Security Features",
    ],
  },
];

const yearlyPlans = [
  {
    title: "Basic Plan",
    subtitle: "Designed for larger teams",
    price: "$180/yr",
    saveText: "Save 20%",
    features: [
      "Monthly Performance Reports",
      "Team Collaboration Tools",
      "Flexible User Management",
    ],
  },
  {
    title: "Business Plan",
    subtitle: "For large organizations and enterprises",
    price: "$280/yr",
    saveText: "Save 20%",
    features: [
      "Regular Training Sessions",
      "All Basic Plan Features",
      "Advanced Analytics Tools",
      "Custom Integration Options",
    ],
  },
  {
    title: "Enterprise Plan",
    subtitle: "Comprehensive solutions for businesses",
    price: "$480/yr",
    saveText: "Save 20%",
    features: [
      "Dedicated Account Manager",
      "Priority Support Access",
      "Enhanced Security Features",
      "All Business Plan Features",
      "Team Collaboration Tools",
    ],
  },
];

export const PricingPlansSection = () => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Pricing</p>
          <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
            Pricing Plans
          </h1>
          <p className="md:text-md">
            Choose the plan that fits your business needs.
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            {monthlyPlans.map((plan, index) => (
              <PriceBox key={index} {...plan} />
            ))}
          </TabsContent>
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            {yearlyPlans.map((plan, index) => (
              <PriceBox key={index} {...plan} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
