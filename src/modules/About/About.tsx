import { IAboutTranslation } from "@/shared/types";
import AboutUs from "./AboutUs/AboutUs";
import AboutOwner from "./AboutOwner/AboutOwner";

interface IAboutProps {
  translation: IAboutTranslation;
}
const About = ({ translation }: IAboutProps) => {
  const { aboutUs, aboutOwner } = translation;
  return (
    <div className="bg-white  xl:bg-primary-gray-100 pt-20 px-5">
      <AboutUs translation={aboutUs} />
      <AboutOwner translation={aboutOwner} />
    </div>
  );
};

export default About;
