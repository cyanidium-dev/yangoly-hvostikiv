import Card from "@/shared/components/Card/Card";

const SupportFundraising = () => {
  return (
    <section className="container mx-auto px-4 py-[80px] xl:px-10">
      <h2 className="text-black text-[24px] leading-[130%] text-center mb-8">
        Підтримати благодійні збори
      </h2>
      <ul className="flex flex-col gap-5 md:flex-row md:justify-between">
        <li className="md:w-[32%]">
          <Card withProgressBar={true} title="Актуальний збір" />
        </li>
        <li className="md:w-[32%]">
          <Card withProgressBar={true} title="Разова допомога" />
        </li>
        <li className="md:w-[32%]">
          <Card withProgressBar={true} title="Стерелізація" />
        </li>
      </ul>
    </section>
  );
};

export default SupportFundraising;
