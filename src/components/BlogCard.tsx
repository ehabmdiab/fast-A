interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  author: {
    image: string;
    name: string;
    date: string;
    readTime: string;
  };
}

export const BlogCard = ({
  image,
  category,
  title,
  description,
  author,
}: BlogCardProps) => {
  return (
    <div>
      <a href="#" className="mb-6 inline-block w-full max-w-full">
        <div className="w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="aspect-[3/2] size-full object-cover"
          />
        </div>
      </a>
      <a
        href="#"
        className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
      >
        {category}
      </a>
      <a href="#" className="mb-2 block max-w-full">
        <h5 className="text-xl font-bold md:text-2xl">{title}</h5>
      </a>
      <p>{description}</p>
      <div className="mt-6 flex items-center">
        <div className="mr-4 shrink-0">
          <img
            src={author.image}
            alt={`${author.name}'s avatar`}
            className="size-12 min-h-12 min-w-12 rounded-full object-cover"
          />
        </div>
        <div>
          <h6 className="text-sm font-semibold">{author.name}</h6>
          <div className="flex items-center">
            <p className="text-sm">{author.date}</p>
            <span className="mx-2">•</span>
            <p className="text-sm">{author.readTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
