"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Layout201() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Meet Adam: Your Prime AI Automation Assistant
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              Adam stands at the forefront of FastAutomate’s hybrid
              approach—combining Intelligent RPA with Generative Agents to
              coordinate every facet of customer interaction. Through
              conversational engagement, Adam monitors incoming inquiries,
              orchestrates task handoffs to specialized agents, and keeps
              real-time visibility on user needs. By aligning data-driven
              precision with human-like dialogue, Adam ensures faster
              resolutions, stronger user experiences, and ongoing opportunities
              for strategic growth.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Conversational Coordination
                </h6>
                <p>
                  Uses natural language understanding to route tasks,
                  collaborate with other agents, and proactively update
                  stakeholders—maintaining high transparency and efficiency.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Intelligent Oversight
                </h6>
                <p>
                  Monitors workflow performance in real time, refining processes
                  on the fly to minimize delays and guarantee each engagement
                  delivers measurable value.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Ask Adam" variant="secondary">
                Ask Adam
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
