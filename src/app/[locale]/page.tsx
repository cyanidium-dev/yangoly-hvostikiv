import About from "@/modules/About/About";
import Hero from "@/modules/Hero/Hero";
import WorkResults from "@/modules/WorkResults/WorkResults";
import { Locale } from "@/shared/types";
import { getDictionary } from "@/shared/utils";

export default async function Home({ params }: { params: { locale: Locale } }) {
  const { locale } = await params;
  const { hero, about, workResults, } = await getDictionary(locale);

  return (
    <>
      <Hero translation={hero} />
      <WorkResults translation={workResults} />
      <About translation={about} />
    </>
  );
}
