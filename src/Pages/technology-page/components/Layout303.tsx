"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout303() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            Drive Tangible Results and Stay Future-Ready
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Data-Driven Insights
            </h3>
            <p>
              Real-time analytics illuminate performance across departments,
              giving leadership the clarity to make informed decisions and
              quickly pivot where needed.
            </p>
            <div className="mt-6 md:mt-8">
              <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                Button
              </Button>
            </div>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Minimal Disruption
            </h3>
            <p>
              FastAutomate integrates seamlessly with existing systems and
              processes, reducing downtime and ensuring a smooth transition to
              automated workflows.
            </p>
            <div className="mt-6 md:mt-8">
              <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                Button
              </Button>
            </div>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Open Ecosystem
            </h3>
            <p>
              Compatibility with CRMs, ERPs, and specialized industry tools
              reduces complexity—enabling deeper automation, consistent data
              flow, and a holistic view of operations.
            </p>
            <div className="mt-6 md:mt-8">
              <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                Button
              </Button>
            </div>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Dedicated Support
            </h3>
            <p>
              Our expert team keeps your automations optimized, proactively
              identifying opportunities for further streamlining and providing
              swift resolution when issues arise.
            </p>
            <div className="mt-6 md:mt-8">
              <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                Button
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
