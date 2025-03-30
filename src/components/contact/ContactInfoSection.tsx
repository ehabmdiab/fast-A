import { BiEnvelope, BiMap } from "react-icons/bi";

export const ContactInfoSection = () => {
  return (
    <section className="w-full transform-gpu bg-[linear-gradient(to_bottom_right,#010308,#010308,#101D2B)] flex flex-col items-center justify-center">
      <div id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-28 gap-y-12 md:grid-cols-2 md:gap-y-16">
            <div>
              <div className="mb-5 lg:mb-6">
                <BiEnvelope className="size-12" />
              </div>
              <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
                Email
              </h3>
              <p className="mb-5 md:mb-6">
                For inquiries, reach us at the email below.
              </p>
              <a className=" !neutral-lightest" href="#">
                hello@fastautomate.com
              </a>
            </div>
            {/* <div>
              <div className="mb-5 lg:mb-6">
                <BiPhone className="size-12" />
              </div>
              <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
                Phone
              </h3>
              <p className="mb-5 md:mb-6 text-white">
                We're available for calls during business hours.
              </p>
              <a className="!neutral-lightest" href="#">
                +1 (555) 123-4567
              </a>
            </div> */}
            <div>
              <div className="mb-5 lg:mb-6">
                <BiMap className="size-12" />
              </div>
              <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
                Office
              </h3>
              <p className="mb-5 md:mb-6">
                Visit us at our headquarters for more information.
              </p>
              <a className="!neutral-lightest" href="#">
                456 Innovation Way, San Francisco CA 94105 US
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
