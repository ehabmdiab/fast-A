"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing5() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-8 w-full max-w-lg lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Affordable</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Experience AI-Powered Automation – Risk-Free & Effortless
          </h2>
          <p className="md:text-md">
            The FREE plan is designed for beginners and businesses exploring AI
            automation. Select one pre-trained AI agent and generate up to 100
            data points per month—no commitment required. Discover how AI can
            streamline workflows, improve efficiency, save time, and drive
            business growth before scaling up
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-8"
                  alt="Relume logo 1"
                />
              </div>
              <div>
                <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Select a Pre-Trained AI Agent
                </h3>
                <p>
                  Choose from Lead Generation, Lead Profiling, CRM Cleaning, or
                  Candidate Sourcing. Get hands-on experience with AI-driven
                  task automation
                </p>
              </div>
            </div>
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-8"
                  alt="Relume logo 1"
                />
              </div>
              <div>
                <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  100 Data Point Generations Per Month
                </h3>
                <p>
                  Automate up to 100 lead enrichments, customer interactions, or
                  data entries See real-world impact on your business without
                  investment
                </p>
              </div>
            </div>
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-8"
                  alt="Relume logo 1"
                />
              </div>
              <div>
                <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Guided AI Experience for Beginners
                </h3>
                <p>
                  Perfect for those exploring AI's potential Understand which
                  automation solutions fit your business best before upgrading
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="h-full border border-border-primary px-6 py-8 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="mb-2 text-xl font-bold md:text-2xl">
                    FREE Plan
                  </h4>
                  <p>Ideal for beginners</p>
                </div>
                <h5 className="justify-self-end text-6xl font-bold md:text-9xl lg:text-10xl">
                  $0 /mo
                </h5>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2 md:grid-cols-2 md:gap-x-6">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Risk-Free Entry</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Start Immediately</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>No-Code Automation</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>No Technical Skills Needed</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Upgrade Your Operations</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>24/7 Customer Support</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Unlock AI Potential</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Time Savings</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Seamless Scalability</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Optimize Operational Costs</p>
                </div>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
