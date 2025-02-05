import { IInfoBlockProps } from "@/shared/types";

const InfoBlock = ({
  translation,
  children,
  className = "",
  ...props
}: IInfoBlockProps) => {
  const { paragraphs, title } = translation;
  return (
    <div className={`mx-auto bg-white ${className}`} {...props}>
      <h2 className="text-[24px] xl:text-[32px] text-black leading-[130%]  mb-6">
        {title}
      </h2>
      <div className="space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-black text-[18px] leading-[130%]">
            {paragraph.segments.map((segment, segIndex) => (
              <span
                key={segIndex}
                className={segment.bold ? "font-bold" : "font-normal"}
              >
                {segment.text}
              </span>
            ))}
          </p>
        ))}
      </div>
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
};

export default InfoBlock;
