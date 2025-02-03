import ProgressBar from "@/shared/components/ProgressBar/ProgressBar";
import { IFundraisingGoalProps } from "@/shared/types";
import Image from "next/image";

const FundraisingGoal = ({
  fundraisingTitle,
  goal,
  currency,
  totalAmount,
  currentAmount,
}: IFundraisingGoalProps) => {
  return (
    <div className="px-4">
      <p className="text-primary-black text-[18px] font-normal leading-[130%] text-center mt-6">
        {fundraisingTitle}
      </p>

      <div className="relative flex justify-center mt-4 mb-8">
        <div className="relative">
          <Image
            src="/images/money.mobile.png"
            alt="money"
            width={129}
            height={195}
            className="relative z-30"
          />
          <Image
            src="/images/paw.mobile.png"
            alt="paw"
            width={51}
            height={49}
            className="absolute right-5 -top-3 z-20"
          />
        </div>
      </div>

      <div className="w-full max-w-[300px] mx-auto">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-primary-gray-100 leading-[24px]">{goal}</span>
          <span className="text-white px-1  bg-primary-orange font-bold rounded-[32px]">
            {totalAmount} {currency}
          </span>
        </div>

        <ProgressBar totalAmount={totalAmount} currentAmount={currentAmount} />

        <div className="mt-2">
          <span className="text-[14px] leading-[24px] ml-[60px] font-normal text-primary-gray-100">
            {currentAmount} {currency}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FundraisingGoal;
