export const TechnologyDemoSection = () => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
            Visual Demo
          </h2>
          <p className="md:text-md">
            Explore our technology in action through interactive demos.
          </p>
        </div>
        <div className="grid grid-cols-2 items-start justify-center gap-6 md:gap-8 lg:grid-cols-4">
          <a href="#">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 1"
              className="size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 2"
              className="size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 3"
              className="size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 4"
              className="size-full object-cover"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
