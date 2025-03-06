import Contacts from "@/modules/Contacts/Contacts";
import BlogArticle from "@/modules/BlogArticle/BlogArticle";
import { getDictionary } from "@/shared/utils";
import { PageParams } from "@/shared/types";
import { newsList } from "../constants";

export default async function ArticlePage({ params }: PageParams) {
  const { id, locale } = await params;
  const { contacts, blog } = await getDictionary(locale);

  const article = newsList[locale].find((newsItem) => newsItem.id === id);

  if (!article) {
    return null;
  }

  return (
    <>
      <BlogArticle article={article} translation={blog} />
      <Contacts translation={contacts} lang={locale} />
    </>
  );
}
