import React from "react";
import Navbar from "../Navbar/Navbar";
import { INavigationItem } from "@/shared/types";
import SocialsList from "@/shared/components/SocialsList/SocialsList";
import Button from "@/shared/components/Button/Button";

interface IBurgerMenuProps {
  isOpen: boolean;
  translation: {
    navigation: INavigationItem[];
    donateButton: string;
  };
}

const BurgerMenu = ({ translation, isOpen }: IBurgerMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-[65px] right-0 bg-white z-40 xl:hidden w-[80%] ">
      <div className="flex flex-col h-full">
        <div className="px-4 pt-3 pb-8 flex flex-col flex-grow items-center">
          <Navbar translation={translation} isOnBurger={true} />
          <div className="my-3">
            <Button text={translation?.donateButton} />
          </div>
          <SocialsList />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
