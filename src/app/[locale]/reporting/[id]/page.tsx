import Contacts from "@/modules/Contacts/Contacts";
import Report from "@/modules/Report/Report";
import { getDictionary } from "@/shared/utils";
import { PageParams } from "@/shared/types";
import { reportingList } from "../constants";

export default async function ReportPage({ params }: PageParams) {
  const { id, locale } = await params;
  const { contacts } = await getDictionary(locale);

  const report = reportingList[locale].find(
    (reportItem) => reportItem.id === id
  );

  if (!report) {
    return null;
  }

  return (
    <>
      <Report report={report} />
      <Contacts translation={contacts} lang={locale} />
    </>
  );
}
