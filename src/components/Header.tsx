import { Button } from "@relume_io/relume-ui";
import { cn } from "../lib/utils";
import { HashLinkButton } from "./HashLinkButton";

interface ButtonProps {
  title: string;
  variant?: "primary" | "secondary-alt";
  className?: string;
}

interface HeaderProps {
  tagline?: string;
  title: string;
  description: string;
  buttons?: ButtonProps[];
  className?: string;
  containerWidth?: "md" | "lg";
  image?: string;
}

export function Header({
  tagline,
  title,
  description,
  buttons = [],
  className,
  containerWidth = "md",
  image,
}: HeaderProps) {
  return (
    <section id="relume" className={cn("relative px-[5%] w-full", className)}>
      <div className="container relative z-10">
        <div
          className={cn(
            "flex items-center",
            containerWidth === "md"
              ? "max-h-[60rem] min-h-svh py-16 md:py-24 lg:py-28"
              : "py-16 md:py-24 lg:py-28"
          )}
        >
          <div
            className={cn(
              "w-full",
              containerWidth === "md" ? "max-w-md" : "max-w-lg"
            )}
          >
            {tagline && (
              <p className="mb-3 font-semibold text-text-alternative md:mb-4">
                {tagline}
              </p>
            )}
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              {title}
            </h1>
            <p className="text-text-alternative md:text-md">{description}</p>
            {buttons.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {buttons.map((button, index) => (
                  <HashLinkButton to="/contact#contact-form" asChild>
                    <Button
                      key={index}
                      title={button.title}
                      variant={button.variant}
                      className={button.className}
                    >
                      {button.title}
                    </Button>
                  </HashLinkButton>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={
            image ??
            "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          }
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
