"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/shared/utils";
import { ArrowDonwIcon } from "../../../../public/images/icons";
import { INavigationItem } from "@/shared/types";

const NavItem = ({
  item,
  isOnBurger,
}: {
  item: INavigationItem;
  isOnBurger: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

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
    <div className={cn(isOnBurger ? "w-full" : "relative")} ref={dropdownRef}>
      <button
        className={cn(
          "text-primary-black text-lg hover:text-primary-gray font-normal leading-[120%] flex items-center gap-1",
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
              : "absolute top-full -left-[115px] mt-1 bg-white shadow-lg rounded-md py-2 min-w-[250px]"
          )}
        >
          {item.dropdown.map((dropdownItem) => (
            <Link
              key={dropdownItem.name}
              href={dropdownItem.href}
              className={cn(
                "block",
                isOnBurger
                  ? "text-primary-black text-lg font-normal leading-[120%] hover:text-primary-gray transition-colors text-center"
                  : "px-4 py-2 text-[#000] text-[18px] leading-[110%] hover:bg-gray-100"
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
