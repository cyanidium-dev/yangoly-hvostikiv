import Image from "next/image";

const EventsGrid = ({ images }: { images: string[] }) => {
  return (
    <div className="hidden xl:block">
      <div className="grid grid-cols-[2.92fr_2.82fr_5.92fr] gap-5">
        {/* Перший стовпчик */}
        <div className="flex flex-col gap-5">
          <Image
            src={images[0]}
            alt="Event 1"
            layout="responsive"
            width={349}
            height={228}
            className="rounded-[8px] object-cover "
          />
          <Image
            src={images[1]}
            alt="Event 2"
            layout="responsive"
            width={349}
            height={236}
            className="rounded-[8px] object-cover "
          />
        </div>

        {/* Другий стовпчик */}
        <div className="flex flex-col gap-5">
          <Image
            src={images[2]}
            alt="Event 3"
            layout="responsive"
            width={337}
            height={317}
            className="rounded-[8px] "
          />
          <Image
            src={images[3]}
            alt=""
            layout="responsive"
            width={337}
            height={147}
            className="rounded-[8px] object-cover"
          />
        </div>

        {/* Третій стовпчик */}
        <div className="flex">
          <Image
            src={images[4]}
            alt="Event 4"
            layout="responsive"
            width={706}
            height={484}
            className="rounded-[8px]  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default EventsGrid;
