import Contacts from "@/modules/Contacts/Contacts";
import Reporting from "@/modules/Reporting/Reporting";
import { getDictionary } from "@/shared/utils";
import { PageParams } from "@/shared/types";

export default async function ReportingPage({ params }: PageParams) {
  const { locale } = await params;
  const { contacts, reporting } = await getDictionary(locale);

  return (
    <>
      <Reporting translation={reporting} lang={locale}/>
      <Contacts translation={contacts} lang={locale} />
    </>
  );
}
