import Image from "next/image";
import Link from "next/link";
import Button from "@/shared/components/Button/Button";
import { IBlogCardProps } from "@/shared/types";

export default function BlogCard({
  blogItem,
  className = "",
  translation,
}: IBlogCardProps) {
  const { mainPhoto, date, title, description, id } = blogItem;
  const { detailsButton } = translation;

  return (
    <li
      className={`max-w-[343px] desk:max-w-[436px] pt-8 pb-5 px-6 bg-white rounded-[20px] shadow-blogCard ${className}`}
    >
      <Link href={`/blog/${id}`} className="block mb-[26px]">
        <div className="relative w-full h-[246px] desk:h-[323px] aspect-[295/246] rounded-[11.25px]">
          <Image
            src={mainPhoto}
            alt={title}
            fill
            className="object-cover object-center rounded-[11.25px]"
            sizes="(max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </Link>
      <p className="mb-3  text-dark text-[16px] font-medium leading-[20.8px]">
        {date}
      </p>
      <Link href={`/blog/${id}`}>
        <h2
          className="mb-3 text-dark text-[20px] font-semibold leading-[26px] line-clamp-2 focus-visible:text-primary-gray xl:hover:text-primary-gray 
        transition duration-300 ease-out"
        >
          {title}
        </h2>
      </Link>
      <p className="mb-5 text-dark font-normal text-[14px] leading-[18.2px] line-clamp-4">
        {description}
      </p>
      <Link href={`/blog/${id}`}>
        <Button text={detailsButton} fullWidth />
      </Link>
    </li>
  );
}
