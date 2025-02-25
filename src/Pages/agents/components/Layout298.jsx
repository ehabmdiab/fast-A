"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Layout298() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 max-w-lg md:mb-18 lg:mb-20">
            <div>
              <p className="mb-3 text-center font-semibold md:mb-4">
                Explore Our Existing Workflows
              </p>
              <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Ready-Made Automations for Every Customer Touchpoint
              </h2>
              <p className="text-center md:text-md">
                FastAutomate offers a suite of pre-built workflows that
                streamline critical stages of the customer journey. Each
                workflow harnesses the power of Intelligent RPA and Agentic AI,
                merging rules-based precision with adaptive, real-time
                engagement. By tapping into these proven templates, you can
                quickly optimize processes that traditionally slow your growth,
                ensuring a seamless experience from first contact to long-term
                loyalty.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Lead Generation & Prospect Engagement
              </h3>
              <p className="text-center">
                Quickly capture, qualify, and nurture potential customers.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Order Fulfillment & Logistics
              </h3>
              <p className="text-center">
                Automate inventory checks, shipping updates, and order tracking.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Customer Service & Post-Sale Support
              </h3>
              <p className="text-center">
                Handle tickets, returns, and ongoing client communication
                effortlessly.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Data Maintenance & Continuous Improvement
              </h3>
              <p className="text-center">
                Keep your CRM or ERP records accurate and actionable at all
                times.
              </p>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="Deploy Your Agent" variant="secondary">
              Deploy Your Agent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
