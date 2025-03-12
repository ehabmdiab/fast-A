import { useEffect, useState } from "react";

interface ImageModalProps {
  imageSrc: string;
  onClose: () => void;
  alt?: string;
}

export const ImageModal = ({
  imageSrc,
  onClose,
  alt = "Expanded view",
}: ImageModalProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const handleZoom = () => {
    setScale(scale === 1 ? 1.5 : 1);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[9999] transition-all duration-300"
      onClick={onClose}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      <div className="relative max-w-[95vw] max-h-[95vh] rounded-lg overflow-hidden">
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleZoom();
            }}
            className="bg-black/50 hover:bg-black/75 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 group"
            title="Zoom"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
              />
            </svg>
          </button>

          <button
            onClick={onClose}
            className="bg-black/50 hover:bg-black/75 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200"
            title="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div
          className="overflow-auto max-h-[95vh] max-w-[95vw] transition-transform duration-300 ease-out"
          style={{
            cursor: scale > 1 ? "move" : "zoom-in",
          }}
        >
          <img
            src={imageSrc}
            alt={alt}
            className="max-w-full max-h-full object-contain transition-transform duration-300 ease-out"
            style={{ transform: `scale(${scale})` }}
            onClick={(e) => e.stopPropagation()}
            onLoad={handleImageLoad}
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};
