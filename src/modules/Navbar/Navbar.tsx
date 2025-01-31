import { INavigationItem } from "@/shared/types";
import NavItem from "./NavItem/NavItem";
import { cn } from "@/shared/utils";

interface INavbarProps {
  isOnBurger: boolean;
  translation: {
    navigation: INavigationItem[];
  };
}

const Navbar = ({ translation, isOnBurger }: INavbarProps) => {
  return (
    <nav
      className={cn(
        "flex gap-4",
        isOnBurger ? "flex-col items-center gap-6" : "flex-row items-center"
      )}
    >
      {translation?.navigation.map((item) => (
        <NavItem key={item.name} item={item} isOnBurger={isOnBurger} />
      ))}
    </nav>
  );
};

export default Navbar;
