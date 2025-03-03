"use client";
import { IBurgerMenuProps } from "@/shared/types";
import SocialsList from "@/shared/components/SocialsList/SocialsList";
import Button from "@/shared/components/Button/Button";
import Navbar from "@/modules/Navbar/Navbar";
import DonateModal from "../DonateModal/DonateModal";
import { useState } from "react";

const BurgerMenu = ({
  translation,
  isOpen,
  donateModalTranslataion,
  lang,
  onClose,
}: IBurgerMenuProps) => {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="fixed top-[65px] right-0 bg-white z-40 xl:hidden w-[80%] ">
      <div className="flex flex-col h-full">
        <div className="px-4 pt-3 pb-8 flex flex-col flex-grow gap-4 items-center">
          <Navbar
            translation={translation}
            isOnBurger={true}
            onNavClick={onClose}
          />
          <div className="my-3">
            <Button
              text={translation?.donateButton}
              onClick={() => {
                setIsDonateModalOpen(true);
                onClose();
              }}
            />
          </div>
          <SocialsList />
          <DonateModal
            lang={lang}
            translation={donateModalTranslataion}
            isOpen={isDonateModalOpen}
            onClose={() => setIsDonateModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
