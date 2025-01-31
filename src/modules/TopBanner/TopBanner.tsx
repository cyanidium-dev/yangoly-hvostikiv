import SocialsList from "@/shared/components/SocialsList/SocialsList";
import { EmailIcon, PhoneIcon } from "../../../public/images/icons";
import { LocationIcon } from "../../../public/images/icons/LocationIcon";

const TopBanner = () => {
  return (
    <section className="hidden xl:flex px-20 py-3 bg-primary-orange text-white justify-between items-center  w-full">
      <div className="flex gap-8">
        <a href="tel:+380992004080" className="flex items-center gap-2">
          <PhoneIcon /> +380 99 200 40 80
        </a>
        <a href="mailto:email@gmail.com" className="flex items-center gap-2">
          <EmailIcon /> email@gmail.com
        </a>
        <div className="flex items-center gap-2">
          <LocationIcon /> Київ, вул. Шевченка, 25а
        </div>
      </div>
      <SocialsList iconClass="text-white" />
    </section>
  );
};

export default TopBanner;
