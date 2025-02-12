import Partners from "@/modules/Partners/Partners";
import { PageParams } from "@/shared/types";
import { getDictionary } from "@/shared/utils";
import Partnership from "@/modules/Partnership/Partnership";

export default async function ParnershipPage({ params }: PageParams) {
  const { locale } = await params;
  const { partners, partnership } = await getDictionary(locale);
  return (
    <>
      <Partnership translation={partnership} lang={locale} />
      <Partners className="pt-[80px] pb-[70px]" translation={partners} />
    </>
  );
}
