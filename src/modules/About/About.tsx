import { IAboutProps } from "@/shared/types";
import AboutUs from "./AboutUs/AboutUs";
import AboutOwner from "./AboutOwner/AboutOwner";

const About = ({ translation }: IAboutProps) => {
  const { aboutUs, aboutOwner } = translation;

  return (
    <section className="bg-white   xl:bg-primary-gray-100 py-20">
      <div className="container px-4 xl:px-10 mx-auto ">
        <AboutUs translation={aboutUs} />
        <AboutOwner translation={aboutOwner} />
      </div>
    </section>
  );
};

export default About;
