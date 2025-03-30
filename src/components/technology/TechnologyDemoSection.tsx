import { useState } from "react";
import { ImageModal } from "../ImageModal";

export const TechnologyDemoSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "how-it-works-1.png",
    "how-it-works-2.png",
    "how-it-works-3.png",
    "how-it-works-4.png",
  ];
  return (
    <section className="transform-gpu bg-[linear-gradient(to_bottom_right,#0D131D,#0D141E,#0E151E)] w-full flex-col items-center justify-center">
      <div id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Visual Demo
            </h2>
            <p className="md:text-md">
              Explore our technology in action through interactive demos.
            </p>
          </div>
          <div className="grid grid-cols-2 items-start justify-center gap-6 md:gap-8 min-h-[300px] lg:grid-cols-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="h-full cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Demo image ${index + 1}`}
                  className="size-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedImage && (
        <ImageModal
          imageSrc={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};
