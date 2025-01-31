import { IWorkResult } from "@/shared/types";

const AchievementItem = ({ count, action }: IWorkResult) => {
  return (
    <div className="w-[237px] h-[136px] p-[20px] rounded-[16px] flex flex-col justify-center items-center gap-[6px] bg-white border-[1px] border-primary-orange">
      <p className="text-[32px] numeric-font leading-[130%] text-primary-orange">
        {count}
      </p>
      <p className="text-[18px] text-center  leading-[130%]">{action}</p>
    </div>
  );
};

export default AchievementItem;
