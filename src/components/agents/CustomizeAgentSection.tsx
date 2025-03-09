import { Button } from "@relume_io/relume-ui";

export const CustomizeAgentSection = () => {
  return (
    <section className="w-full bg-neutral-dark flex flex-col items-center justify-center ">
      <div id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-20 icon-white"
                  alt="Relume logo"
                />
              </div>
              <h2 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
                Customize Your AI Agent Effortlessly
              </h2>
              <p className="md:text-md">
                With our guided setup, you can easily create an AI agent
                tailored to your unique business requirements. Experience the
                power of automation that adapts to your workflows.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  title="Create"
                  className="bg-neutral-800"
                  variant="secondary"
                >
                  Create
                </Button>
              </div>
            </div>
            <div className="h-full w-full  max-h-[600px] max-w-[600px]">
              <img
                src="/customize-agent.png"
                className="w-full  h-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
