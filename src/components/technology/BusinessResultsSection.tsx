import { InfoCard } from "../InfoCard";
import { Icons } from "../Icons";

const results = [
  {
    icon: <Icons.insights />,
    title: "Data-Driven Insights",
    description:
      "Real-time analytics illuminate performance across departments, giving leadership the clarity to make informed decisions and quickly pivot where needed.",
  },
  {
    icon: <Icons.disruption />,
    title: "Minimal Disruption",
    description:
      "FastAutomate integrates seamlessly with existing systems and processes, reducing downtime and ensuring a smooth transition to automated workflows.",
  },
  {
    icon: <Icons.ecosystem />,
    title: "Open Ecosystem",
    description:
      "Compatibility with CRMs, ERPs, and specialized industry tools reduces complexity—enabling deeper automation, consistent data flow, and a holistic view of operations.",
  },
  {
    icon: <Icons.support />,
    title: "Dedicated Support",
    description:
      "Our expert team keeps your automations optimized, proactively identifying opportunities for further streamlining and providing swift resolution when issues arise.",
  },
];

export function BusinessResultsSection() {
  return (
    <section className="transform-gpu bg-[linear-gradient(to_bottom_right,#0D131D,#0D141E,#0E151E)] w-full flex flex-col items-center justify-center">
      <div id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mb-12 max-w-[750px] md:mb-18 lg:mb-20 w-full">
            <h2 className="text-3xl font-bold leading-[1.2] md:text-4xl lg:text-6xl">
              Drive Tangible Results and Stay Future-Ready
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            {results.map((result, index) => (
              <div key={index}>
                <InfoCard
                  icon={result.icon}
                  title={result.title}
                  description={result.description}
                  className="items-start text-left"
                />
                {/* <div className="mt-6 md:mt-8">
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="bg-neutral-800"
                  >
                    Button
                  </Button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
