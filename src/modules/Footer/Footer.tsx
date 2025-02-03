import Logo from "@/shared/components/Logo/Logo";
import SocialsList from "@/shared/components/SocialsList/SocialsList";
import { INavigationItem } from "@/shared/types";
import Link from "next/link";

const Footer = ({ translation }: { translation: INavigationItem[] }) => {
  return (
    <footer className="bg-[#001808] py-10 px-4 flex flex-col gap-6 xl:items-center">
      <Logo href={"/"} width={109} height={48} />
      <nav className="flex flex-col gap-4 xl:flex-row">
        {translation.map((item, index) => (
          <Link
            key={index}
            className="text-white text-[18px] leading-[120%]  hover:text-primary-gray/95 transition-base"
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="flex justify-start">
        <SocialsList iconClass="text-white" />
      </div>
    </footer>
  );
};

export default Footer;
