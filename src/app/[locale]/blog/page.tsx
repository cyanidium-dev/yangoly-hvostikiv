import Blog from "@/modules/Blog/Blog";
import { getDictionary } from "@/shared/utils";
import { PageParams } from "@/shared/types";
import Contacts from "@/modules/Contacts/Contacts";

export default async function BlogPage({ params }: PageParams) {
  const { locale } = await params;
  const { blog, contacts } = await getDictionary(locale);

  return (
    <>
      <Blog translation={blog} lang={locale} />
      <Contacts translation={contacts} lang={locale} />
    </>
  );
}
