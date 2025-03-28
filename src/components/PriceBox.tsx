import { Button } from "@relume_io/relume-ui";
import { BiCheck } from "react-icons/bi";
import { cn } from "../lib/utils";
import { HashLinkButton } from "./HashLinkButton";

interface PriceBoxProps {
  title: string;
  subtitle: string;
  price: string;
  saveText?: string;
  features: string[];
  variant?: "horizontal" | "vertical";
  className?: string;
}

export function PriceBox({
  title,
  subtitle,
  price,
  saveText,
  features,
  variant = "vertical",
  className,
}: PriceBoxProps) {
  return (
    <div
      className={cn(
        "h-full border border-border-primary px-6 py-8 md:p-8",
        className
      )}
    >
      {variant === "horizontal" ? (
        <>
          <div className="flex items-start justify-between">
            <div>
              <h4 className="mb-2 text-xl font-bold md:text-2xl">{title}</h4>
              <p>{subtitle}</p>
            </div>
            <h5 className="justify-self-end text-3xl font-bold md:text-4xl lg:text-6xl">
              {price}
            </h5>
          </div>
          <div className="my-8 h-px w-full shrink-0 bg-border" />
          <div
            className={cn(
              "grid grid-cols-1 gap-y-4 py-2",
              "md:grid-cols-2 md:gap-x-6"
            )}
          >
            {features.map((feature, index) => (
              <div key={index} className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>{feature}</p>
              </div>
            ))}
          </div>
          <div className="my-8 h-px w-full shrink-0 bg-border" />
          <HashLinkButton to="/contact#contact-form" asChild>
            <Button title="Get started" className="w-full">
              Get started
            </Button>
          </HashLinkButton>
        </>
      ) : (
        <>
          <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
            {title}
          </h2>
          <p>{subtitle}</p>
          <div className="my-8 h-px w-full shrink-0 bg-border" />
          <h3 className="my-2 text-3xl font-bold md:text-4xl lg:text-6xl">
            {price}
          </h3>
          {saveText && <p className="font-medium">{saveText}</p>}
          <div className="mt-6 md:mt-8">
            <HashLinkButton to="/contact#contact-form" asChild>
              <Button title="Get started" className="w-full">
                Get started
              </Button>
            </HashLinkButton>
          </div>
          <div className="my-8 h-px w-full shrink-0 bg-border" />
          <div className="grid grid-cols-1 gap-y-4 py-2">
            {features.map((feature, index) => (
              <div key={index} className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
