"use client";

import React from "react";

export function Team6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Smarter Automation, Faster Growth
          </h2>
          <p className="md:text-md">
            FastAutomate streamlines workflows, cuts costs, and delivers
            scalable automation—no coding required.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col text-center">
            <div className="rb-5 mb-5 flex w-full items-center justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Creator / Entrepreneur
              </h5>
              <h6 className="md:text-md">Freedom to Focus on Growth</h6>
            </div>
            <p>
              Creators and entrepreneurs often operate with limited resources,
              wearing multiple hats and juggling countless responsibilities. By
              leveraging our hybrid automation—combining intelligent RPA with
              generative agents—these small teams can offload repetitive tasks,
              gain real-time insights into business metrics, and free up
              bandwidth to innovate and grow without the burden of manual
              inefficiencies.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <div className="rb-5 mb-5 flex w-full items-center justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Medium-Sized Business / Corporate
              </h5>
              <h6 className="md:text-md">
                Streamlined Operations for Sustainable Scaling
              </h6>
            </div>
            <p>
              Medium-sized organizations frequently face fragmented processes
              across multiple departments and a lack of cohesive data insights.
              With FastAutomate’s unified workflows, they can streamline
              operations, eliminate departmental silos, and maintain consistent
              customer experiences throughout periods of scaling—ultimately
              boosting efficiency and agility in a competitive market.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <div className="rb-5 mb-5 flex w-full items-center justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Enterprise</h5>
              <h6 className="md:text-md">
                Optimize Complexity, Drive Global Excellence
              </h6>
            </div>
            <p>
              Enterprises grapple with complex legacy systems, stringent
              compliance standards, and vast operational demands. Our automation
              model integrates seamlessly into existing tech stacks, reduces
              costly manual overhead, and provides robust security
              features—empowering large organizations to optimize processes at
              scale and continuously evolve while safeguarding their data and
              reputation.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24" />
      </div>
    </section>
  );
}
