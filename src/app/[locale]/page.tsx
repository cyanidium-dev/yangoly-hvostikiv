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
        <SupportFundraising />
      </AnimatedLayout>
      <AnimatedLayout {...animations.slideFromTop}>
        <Partners translation={partners} />
      </AnimatedLayout>
      <AnimatedLayout {...animations.slideFromRight}>
        <Contacts translation={contacts} lang={locale} />
      </AnimatedLayout>
    </>
  );
}
