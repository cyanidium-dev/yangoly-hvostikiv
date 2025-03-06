import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import { getDictionary } from "@/shared/utils";
import { LocaleLayoutProps, PageParams } from "@/shared/types";
import "../globals.css";

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

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-raleway",
  subsets: ["latin", "cyrillic"],
});

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
        <main
          className={`${raleway.variable} bg-orange-bg h-full flex-1 w-full overflow-y-hidden overflow-x-hidden font-raleway`}
        >
          {children}
        </main>
        <Footer translation={footerNav} />
      </div>
    </>
  );
}
