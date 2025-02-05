import ProgressBar from "@/shared/components/ProgressBar/ProgressBar";
import { IFundraisingGoalProps } from "@/shared/types";
import { cn, formatAmount } from "@/shared/utils";
import JarWithPaw from "./JarWithPaw/JarWithPaw";

const FundraisingGoal = ({
  fundraisingTitle,
  goal,
  currency,
  totalAmount,
  currentAmount,
  styles,
  imageVariant ,
  ...props
}: IFundraisingGoalProps) => {
  return (
    <div className="px-4" {...props}>
      <h2
        className={cn(
          "text-primary-black text-[18px] font-normal leading-[130%] text-center",
          styles?.titleClassName
        )}
      >
        {fundraisingTitle}
      </h2>

      <div className="relative flex justify-center mt-4 mb-3">
        <JarWithPaw variant={imageVariant} />
      </div>

      <div className="w-full max-w-[300px] mx-auto">
        <div className="flex justify-between text-sm mb-2">
          <span
            className={cn(
              "text-primary-gray-100 leading-[24px]",
              styles?.goalClassName
            )}
          >
            {goal}
          </span>
          <span className="text-white px-1 no-ligatures  bg-primary-orange font-bold rounded-[32px]">
            {formatAmount(totalAmount)} {currency}
          </span>
        </div>

        <ProgressBar totalAmount={totalAmount} currentAmount={currentAmount} />

        <div className="mt-2">
          <span
            className={cn(
              "text-[14px] leading-[170%] no-ligatures ml-[60px] font-normal text-primary-gray-100",
              styles?.currentAmountClassName
            )}
          >
            {formatAmount(currentAmount)} {currency}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FundraisingGoal;
