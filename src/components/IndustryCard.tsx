interface IndustryCardProps {
  image: string;
  industry: string;
  tagline: string;
  description: string;
}

export const IndustryCard = ({
  image,
  industry,
  tagline,
  description,
}: IndustryCardProps) => {
  return (
    <div className="flex flex-col text-center">
      <div className="rb-5 mb-5 flex w-full items-center justify-center md:mb-6">
        <img
          src={image}
          alt={`${industry} illustration`}
          className="aspect-square size-full object-cover"
        />
      </div>
      <div className="mb-3 md:mb-4">
        <h5 className="text-md font-semibold md:text-lg">{industry}</h5>
        <h6 className="md:text-md">{tagline}</h6>
      </div>
      <p>{description}</p>
    </div>
  );
};
