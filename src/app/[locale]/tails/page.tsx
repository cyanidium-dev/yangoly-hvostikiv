import Contacts from "@/modules/Contacts/Contacts";
import Tails from "@/modules/Tails/Tails";
import { getDictionary } from "@/shared/utils";
import { PageParams } from "@/shared/types";

export default async function TailsPage({ params }: PageParams) {
  const { locale } = await params;
  const { contacts, tails } = await getDictionary(locale);

  return (
    <>
      <Tails translation={tails} />
      <Contacts translation={contacts} lang={locale} />
    </>
  );
}
