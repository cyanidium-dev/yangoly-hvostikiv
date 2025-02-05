import { IImageGalleryProps } from "@/shared/types";
import Image from "next/image";

const ImageGallery = ({
  images,
  variant,
  className = "",
}: IImageGalleryProps) => {
  if (variant === "splitLayout") {
    return (
      <div className={`grid grid-cols-2  gap-4 xl:gap-5 ${className}`}>
        <div className="relative w-full h-full">
          {" "}
          {/* Прибрали aspect-ratio для мобільної версії */}
          <div className="absolute inset-0">
            {" "}
            {/* Додали wrapper для повного заповнення */}
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover rounded-lg xl:rounded-[16px]"
              sizes="(max-width: 1280px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 xl:gap-5 h-full">
          <div className="relative w-full aspect-[170/156] xl:aspect-[329/331]">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover rounded-lg xl:rounded-[16px]"
              sizes="(max-width: 1280px) 50vw, 33vw"
            />
          </div>
          {images[2] && (
            <div className="relative w-full aspect-[170/156] xl:aspect-[329/331]">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                className="object-cover rounded-lg xl:rounded-[16px]"
                sizes="(max-width: 1280px) 50vw, 33vw"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
  if (variant === "fourGrid") {
    return (
      <div className={`grid grid-cols-2 gap-4 ${className}`}>
        {images.slice(0, 4).map((image, index) => (
          <div key={index} className="relative w-full aspect-square">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 1280px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default ImageGallery;
