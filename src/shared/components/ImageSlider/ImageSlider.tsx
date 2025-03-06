"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/shared/utils";
import { CloseIcon } from "../../../../public/images/icons";

const ImageSlider = ({ images }: { images: string[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [thumbs, setThumbs] = useState(images.slice(0, 3));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThumbClick = (index: number) => {
    setSelectedIndex(index);
    if (index > 0 && index < images.length - 1) {
      setThumbs(images.slice(index - 1, index + 2));
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 items-start w-full lg:w-auto lg:bg-white">
      <div className="flex lg:flex-col gap-[15px] lg:gap-6 w-full lg:w-auto max-w-[678px] lg:max-w-full mx-auto lg:mx-0">
        <AnimatePresence mode="popLayout">
          {thumbs.map((image, index) => {
            const globalIndex = images.indexOf(image);
            return (
              <motion.button
                key={`${image}-${index}`}
                layout
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={cn(
                  "relative aspect-[99/104] lg:aspect-[101/142] min-w-[99px] lg:min-w-[101px] min-h-[104px] lg:min-h-[142px] rounded-[6px] lg:rounded-[10px] cursor-pointer",
                  globalIndex === selectedIndex &&
                    "border-2 border-primary-orange"
                )}
                onClick={() => handleThumbClick(globalIndex)}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${image}`}
                  fill={true}
                  className="object-cover rounded-[4px] lg:rounded-[8px]"
                />
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      <motion.div
        key={selectedIndex}
        className="w-full max-w-[678px] lg:max-w-full aspect-[328/264] lg:aspect-auto lg:w-[420px] xl:w-[580px] lg:h-[474px] mx-auto lg:mx-0 relative rounded-[8px] lg:rounded-r-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          className="object-cover hover:scale-[1.05] transition duration-1000 ease-in-out cursor-pointer"
          src={images[selectedIndex]}
          alt={`Selected Image ${selectedIndex}`}
          fill={true}
          priority
          onClick={() => setIsModalOpen(true)}
        />
      </motion.div>

      {/* Модальне вікно */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="relative w-[90vw] max-w-[800px] h-[90vh] max-h-[600px] rounded-lg overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-6 top-6 p-2 hover:bg-gray-100 bg-opacity-[1%] rounded-full z-10 transition duration-300 ease-in-out"
              >
                <CloseIcon variant="secondary" className="w-6 h-6" />
              </button>
              <Image
                src={images[selectedIndex]}
                alt="Full-size Image"
                fill={true}
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
