"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { CloseIcon, BurgerButtonIcon } from "../../../public/images/icons";
import LanguageSwitcher from "@/shared/components/LanguageSwitcher/LanguageSwitcher";
import { INavigationItem } from "@/shared/types";
import Button from "@/shared/components/Button/Button";
import TopBanner from "../TopBanner/TopBanner";

interface IHeaderProps {
  translation: {
    navigation: INavigationItem[];
    donateButton: string;
  };
}

const Header = ({ translation }: IHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 flex-col bg-white border-b border-[#E9E9EE] xl:bg-background-gray  w-full flex justify-between items-center z-50">
        <TopBanner />
        <div className="flex w-full justify-between px-4 py-3 xl:py-[18px] xl:px-10  ">
          <Link href="/">
            <Image
              src="/images/logo.mobile.png"
              alt="logo"
              width={94}
              height={40}
            />
          </Link>
          <div className="hidden xl:flex">
            <Navbar translation={translation} isOnBurger={false} />
          </div>
          <div className="flex justify-center items-center gap-4 xl:gap-8">
            <LanguageSwitcher />
            <button
              className={`${isMenuOpen ? "ml-[auto]" : "xl:hidden"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <CloseIcon /> : <BurgerButtonIcon />}
            </button>
            <Button
              className="hidden xl:block"
              text={translation?.donateButton}
            />
          </div>
        </div>
      </header>
      <BurgerMenu translation={translation} isOpen={isMenuOpen} />
    </>
  );
};

export default Header;
