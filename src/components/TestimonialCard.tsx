import { BiSolidStar } from "react-icons/bi";
import { cn } from "../lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: {
    image: string;
    name: string;
    position: string;
  };
  companyLogo?: string;
  className?: string;
  variant?: "centered" | "left-aligned";
}

export function TestimonialCard({
  quote,
  author,
  companyLogo,
  className,
  variant = "left-aligned",
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col",
        variant === "centered"
          ? "items-center text-center"
          : "items-start text-left",
        className
      )}
    >
      <div className="mb-6 flex md:mb-8">
        <BiSolidStar className="size-6" />
        <BiSolidStar className="size-6" />
        <BiSolidStar className="size-6" />
        <BiSolidStar className="size-6" />
        <BiSolidStar className="size-6" />
      </div>
      <blockquote
        className={cn(
          "font-bold",
          variant === "centered"
            ? "text-xl md:text-2xl"
            : "text-md leading-[1.4] md:text-xl"
        )}
      >
        {quote}
      </blockquote>
      <div
        className={cn(
          "mt-6 flex w-full md:mt-8",
          variant === "centered"
            ? "flex-col items-center md:w-auto md:flex-row md:gap-5"
            : "flex-col md:w-auto"
        )}
      >
        <div className="mb-4">
          <img
            src={author.image}
            alt={`${author.name}'s avatar`}
            className="size-14 min-h-14 min-w-14 rounded-full object-cover"
          />
        </div>
        <div
          className={cn(
            "mb-3 md:mb-4",
            variant === "centered" && "text-center md:text-left"
          )}
        >
          <p className="font-semibold">{author.name}</p>
          <p>{author.position}</p>
        </div>
        {companyLogo && (
          <>
            <div className="hidden w-px self-stretch bg-black md:block" />
            <div>
              <img
                src={companyLogo}
                alt="Company logo"
                className="max-h-12 icon-white"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
