import Tail from "@/modules/Tail/Tail";
import Contacts from "@/modules/Contacts/Contacts";
import { getDictionary } from "@/shared/utils";
import { PageParams } from "@/shared/types";
import { tails } from "../constans";

export default async function TailPage({ params }: PageParams) {
  const { id, locale } = await params;
  const tail = tails.find((tail) => tail.id === id);
  const { tails: translation, contacts } = await getDictionary(locale);

  if (!tail) {
    return null;
  }

  const otherTails = tails.filter((t) => t.id !== id);
  const randomTails = otherTails.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <>
      <Tail
        translation={translation}
        locale={locale}
        tail={tail}
        randomTails={randomTails}
      />
      <Contacts translation={contacts} lang={locale} />
    </>
  );
}
