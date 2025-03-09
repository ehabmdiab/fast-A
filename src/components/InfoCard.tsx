import { cn } from "../lib/utils";

interface InfoCardProps {
  title: string;
  description: string;
  className?: string;
  variant?: "default" | "inline";
}

export function InfoCard({
  title,
  description,
  className,
  variant = "default",
}: InfoCardProps) {
  return (
    <div
      className={cn(
        variant === "default" && "flex flex-col items-center text-center",
        variant === "inline" && "flex self-start",
        className
      )}
    >
      <div
        className={cn(
          variant === "default" && "mb-5 md:mb-6",
          variant === "inline" && "mr-6 flex-none self-start"
        )}
      >
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
          className="size-12 icon-white"
          alt="Info icon"
        />
      </div>
      <div>
        <h3
          className={cn(
            "mb-3 text-xl font-bold md:mb-4 md:text-2xl",
            variant === "inline" && "leading-[1.4]"
          )}
        >
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
