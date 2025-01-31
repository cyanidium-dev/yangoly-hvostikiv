import Link from "next/link";
import { useState } from "react";
import { INavigationItem } from "../Navbar";
import { cn } from "@/shared/utils";
import { ArrowDonwIcon } from "../../../../public/images/icons";

const NavItem = ({
  item,
  isOnBurger,
}: {
  item: INavigationItem;
  isOnBurger: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.dropdown) {
    return (
      <Link
        className="text-primary-black hover:text-primary-gray text-center text-lg font-normal leading-[120%]"
        href={item.href}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div className={cn(isOnBurger ? "w-full" : "relative")}>
      <button
        className={cn(
          "text-primary-black text-lg  hover:text-primary-gray font-normal leading-[120%] flex items-center gap-1",
          isOnBurger && "mx-auto"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.name}
        <ArrowDonwIcon
          className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <div
          className={cn(
            isOnBurger
              ? "flex flex-col items-center space-y-4 mt-4"
              : "absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 min-w-[200px]" // Стилі для десктопу
          )}
        >
          {item.dropdown.map((dropdownItem) => (
            <Link
              key={dropdownItem.name}
              href={dropdownItem.href}
              className={cn(
                "block",
                isOnBurger
                  ? "text-primary-black text-lg font-normal leading-[120%] hover:text-primary-gray transition-colors text-center" // Стилі для бургер меню
                  : "px-4 py-2 text-lg hover:bg-gray-100"
              )}
            >
              {dropdownItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
