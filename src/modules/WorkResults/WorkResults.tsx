import AchievementItem from "@/shared/components/AchievementItem/AchievementItem";
import { IWorkResult } from "@/shared/types";

const WorkResults = ({ translation }: { translation: IWorkResult[] }) => {
  return (
    <section className="hidden h-[200px] xl:flex justify-center items-center paws-background">
      <ul className="flex gap-10">
        {translation.map((item: IWorkResult, index) => (
          <li key={index}>
            <AchievementItem count={item.count} action={item.action} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkResults;
