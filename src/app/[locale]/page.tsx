import About from "@/modules/About/About";
import Contacts from "@/modules/Contacts/Contacts";
import Hero from "@/modules/Hero/Hero";
import MonthlyGoalSection from "@/modules/MonthlyGoalSection/MonthlyGoalSection";
import Partners from "@/modules/Partners/Partners";
import SupportFundraising from "@/modules/SupportFundraising/SupportFundraising";
import WorkResults from "@/modules/WorkResults/WorkResults";
import { PageParams } from "@/shared/types";
import { getDictionary } from "@/shared/utils";
import AnimatedLayout, {
  animations,
} from "@/shared/layouts/AnimatedLayout/AnimatedLayout";

export default async function Home({ params }: PageParams) {
  const { locale } = await params;
  const { hero, about, workResults, partners, contacts, donateModal } =
    await getDictionary(locale);

  return (
    <>
      <Hero translation={hero} />
      <AnimatedLayout {...animations.slideFromLeft}>
        <WorkResults translation={workResults} />
      </AnimatedLayout>
      <AnimatedLayout {...animations.fadeIn}>
        <About translation={about} />
      </AnimatedLayout>
      <AnimatedLayout {...animations.scaleUp}>
        <MonthlyGoalSection
          donateModalTranslataion={donateModal}
          lang={locale}
        />
      </AnimatedLayout>
      <AnimatedLayout {...animations.slideFromRight}>
        <SupportFundraising lang={locale} />
      </AnimatedLayout>
      <AnimatedLayout {...animations.slideFromTop}>
        <div className="container mx-auto px-4 pt-[160px] pb-[80px] xl:py-[120px] xl:px-10">
          <Partners translation={partners} />
        </div>
      </AnimatedLayout>
      <AnimatedLayout {...animations.slideFromRight}>
        <Contacts translation={contacts} lang={locale} />
      </AnimatedLayout>
    </>
  );
}
