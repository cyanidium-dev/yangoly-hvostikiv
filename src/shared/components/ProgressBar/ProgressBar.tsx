interface IProgressBarProps {
  totalAmount: number;
  currentAmount: number;
}

const ProgressBar: React.FC<IProgressBarProps> = ({
  totalAmount,
  currentAmount,
}) => {
  const progress = (currentAmount / totalAmount) * 100;

  return (
    <div className="w-full max-w-[300px] mx-auto">
      <div className="relative h-4 bg-[#EAECED] rounded-full overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-primary-orange rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
