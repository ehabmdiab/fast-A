"use client";

import React from "react";

export function Blog1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Explore Our Latest Insights
            </h1>
            <p className="md:text-md">
              Stay updated with our expert articles and tips.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center justify-start overflow-scroll pl-[5vw] md:mb-16 md:ml-0 md:w-full md:justify-center md:overflow-hidden md:pl-0">
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary bg-background-primary border px-4 py-2 border-border-primary"
            >
              View all
            </a>
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary gap-2 border px-4 py-2 border-transparent"
            >
              Automation Tips
            </a>
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary gap-2 border px-4 py-2 border-transparent"
            >
              AI Innovations
            </a>
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary gap-2 border px-4 py-2 border-transparent"
            >
              Productivity Hacks
            </a>
            <a
              href="#"
              className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary gap-2 border px-4 py-2 border-transparent"
            >
              Success Stories
            </a>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            <div>
              <a href="#" className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a
                href="#"
                className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
              >
                Insights
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Maximizing Efficiency with Automation
                </h5>
              </a>
              <p>
                Discover how automation can transform your business processes
                for the better.
              </p>
              <div className="mt-6 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar 1"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">John Doe</h6>
                  <div className="flex items-center">
                    <p className="text-sm">11 Jan 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">5 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a
                href="#"
                className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
              >
                Automation
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  The Future of AI in Business
                </h5>
              </a>
              <p>
                Explore the impact of AI on modern business strategies and
                operations.
              </p>
              <div className="mt-6 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar 1"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">Jane Smith</h6>
                  <div className="flex items-center">
                    <p className="text-sm">12 Jan 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">5 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a
                href="#"
                className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
              >
                AI
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Streamlining Operations with Intelligent Automation
                </h5>
              </a>
              <p>
                Learn how intelligent automation can enhance operational
                efficiency and reduce costs.
              </p>
              <div className="mt-6 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar 1"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">Alice Johnson</h6>
                  <div className="flex items-center">
                    <p className="text-sm">13 Jan 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">5 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a
                href="#"
                className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
              >
                Operations
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Client Success: Real-World Automation Impact
                </h5>
              </a>
              <p>
                See how our clients have achieved remarkable results through
                automation solutions.
              </p>
              <div className="mt-6 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar 1"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">Bob Brown</h6>
                  <div className="flex items-center">
                    <p className="text-sm">14 Jan 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">5 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a
                href="#"
                className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
              >
                Success
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Understanding No-Code Automation Benefits
                </h5>
              </a>
              <p>
                Unlock the potential of no-code solutions for seamless
                automation in your business.
              </p>
              <div className="mt-6 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar 1"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">Charlie Davis</h6>
                  <div className="flex items-center">
                    <p className="text-sm">15 Jan 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">5 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a
                href="#"
                className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
              >
                No-Code
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  The Role of AI in Customer Experience
                </h5>
              </a>
              <p>
                Discover how AI enhances customer interactions and drives
                satisfaction.
              </p>
              <div className="mt-6 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar 1"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">Eve Wilson</h6>
                  <div className="flex items-center">
                    <p className="text-sm">16 Jan 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">5 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
