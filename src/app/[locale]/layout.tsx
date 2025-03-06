import type { Metadata } from "next";
import Header from "@/modules/Header/Header";
import { LocaleLayoutProps, PageParams } from "@/shared/types";
import { getDictionary } from "@/shared/utils";
import Footer from "@/modules/Footer/Footer";

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const { metadata } = await getDictionary(locale);

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<LocaleLayoutProps>) {
  const { locale } = await params;
  const { header, footerNav, donateModal } = await getDictionary(locale);

  return (
    <>
      <Header
        lang={locale}
        translation={header}
        donateModalTranslataion={donateModal}
      />
      <div className="flex flex-col min-h-[100%]">
        <main className="bg-orange-bg h-full flex-1 w-full overflow-y-hidden overflow-x-hidden">
          {children}
        </main>
        <Footer translation={footerNav} />
      </div>
    </>
  );
}
