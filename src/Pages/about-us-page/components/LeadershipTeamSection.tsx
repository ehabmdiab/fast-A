import { BiLogoLinkedinSquare, BiLogoDribbble } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { IndustryCard } from "../../../components/IndustryCard";

const teamMembers = [
  {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    industry: "Mr. Ahmed Ramy",
    tagline: "Chief Executive Officer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    industry: "Mr. Ossama Aziz",
    tagline: "Chief Technology Officer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    industry: "Mr. Adham Maghraby",
    tagline: "Chief Business Officer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];

export const LeadershipTeamSection = () => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Team</p>
          <h2 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
            The Team Driving Innovation in Intelligent Automation
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col">
              <IndustryCard {...member} />
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-[0.875rem] self-center">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#">
                  <BiLogoDribbble className="size-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Committed To Making Intelligent Automation Accessible
          </h4>
        </div>
      </div>
    </section>
  );
};
