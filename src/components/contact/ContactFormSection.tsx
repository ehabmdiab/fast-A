import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";

export const ContactFormSection = () => {
  return (
    <section className="w-full bg-neutral-dark flex flex-col items-center justify-center ">
      <div id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <img
              src="/customer-journey-blueprint.png"
              alt="Relume placeholder image"
              className="size-full object-cover"
            />
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <p className="mb-3 font-semibold md:mb-4">Connect</p>
              <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
                Get in Touch
              </h2>
              <p className="md:text-md">
                We’re here to assist you with any inquiries.
              </p>
            </div>
            <form className="grid grid-cols-1 gap-6">
              <div className="grid w-full items-center">
                <Label htmlFor="name" className="mb-2">
                  Name
                </Label>
                <Input type="text" id="name" />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="email" className="mb-2">
                  Email
                </Label>
                <Input type="email" id="email" />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="message" className="mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message..."
                  className="min-h-[11.25rem] overflow-auto"
                />
              </div>
              <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
                <Checkbox className="bg-neutral-800" id="terms" />
                <Label htmlFor="terms" className="cursor-pointer">
                  I accept the Terms
                </Label>
              </div>
              <div>
                <Button className="bg-neutral-800" title="Submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
