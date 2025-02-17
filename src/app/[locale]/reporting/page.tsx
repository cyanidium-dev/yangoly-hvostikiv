export default function ReportingPage() {
  return (
    <section className="bg-[#F8F7F7]">
      <div className="mt-[65px] mx-auto xl:mt-[140px] container pt-8 pb-5 px-4 xl:px-10">
        <h2 className="text-xl text-center  mb-4">Звітність</h2>
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          <iframe
            src="https://docs.google.com/spreadsheets/d/1384xP0f-EIB0gPHb0sM9fSd-ui4YIKkHk-99daHAVBE/edit?usp=sharing"
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
