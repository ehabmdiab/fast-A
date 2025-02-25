import { cn } from "../lib/utils";

interface InfoCardProps {
  title: string;
  description: string;
  className?: string;
}

export function InfoCard({ title, description, className }: InfoCardProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <div className="mb-5 md:mb-6">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
          className="size-12"
          alt="Info icon"
        />
      </div>
      <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
