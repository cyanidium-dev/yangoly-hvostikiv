import Image from "next/image";

const LargePhotoModal = ({
  photoSrc,
  onClose,
}: {
  photoSrc: string;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative w-full h-full max-w-[90vw] max-h-[90vh]">
        <div className="relative w-full h-full">
          <Image
            src={photoSrc}
            alt="Large Photo"
            layout="fill"
            quality={100}
            className="rounded-lg object-contain cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2 z-10 hover:bg-opacity-75 hover:scale-110 transition duration-300 ease-in-out"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M17.75 2.0125L15.9875 0.25L9 7.2375L2.0125 0.25L0.25 2.0125L7.2375 9L0.25 15.9875L2.0125 17.75L9 10.7625L15.9875 17.75L17.75 15.9875L10.7625 9L17.75 2.0125Z"
                fill="white"
              />
            </svg>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default LargePhotoModal;
