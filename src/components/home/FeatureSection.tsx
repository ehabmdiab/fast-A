import { Icons } from "../Icons";

const featureGridData = {
  sectionTitle: "Revolutionary Automation at Your Fingertips",
  sectionDescription:
    "Experience the future of automation with our patent-pending Smart Screen Understanding technology. Our AI agents recognize UI elements in real-time, ensuring precise and context-aware automation. Say goodbye to manual tasks and hello to efficiency.",
  features: [
    {
      icon: <Icons.patent />,
      title: "Patent-Pending Smart Screen Understanding",
      description:
        "Unlike traditional RPA, our AI recognizes UI elements in real-time, enabling precise, context-aware automation",
    },
    {
      icon: <Icons.automation />,
      title: "No-Code Automation",
      description:
        "Easily deploy AI agents without coding, making automation accessible to all teams",
    },
    {
      icon: <Icons.advancedai />,
      title: "Advanced AI Capabilities",
      description:
        "Powered by Intelligent Computer Vision, FastAutomate understands and interacts with digital environments intelligently.",
    },
    {
      icon: <Icons.scalable />,
      title: "Cost-Effective & Scalable Solutions",
      description:
        "Reduce deployment costs while achieving quick and seamless automation.",
    },
  ],
};

export function FeatureSection() {
  return (
    <section className="bg-neutral-darkest w-full justify-center items-center flex-col flex">
      <div id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Features</p>
              <h2 className="text-3xl font-bold md:text-4xl lg:text-6xl">
                {featureGridData.sectionTitle}
              </h2>
            </div>
            <div>
              <p className="md:text-md">{featureGridData.sectionDescription}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            {featureGridData.features.map((feature, index) => (
              <div key={index}>
                <div className="mb-5 md:mb-6">
                  <div className="size-12">{feature.icon}</div>
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  {feature.title}
                </h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
