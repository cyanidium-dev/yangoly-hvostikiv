"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  ArrowDonwIcon,
  BritishFlag,
  UkraineFlag,
} from "../../../../public/images/icons";
import { Locale } from "@/shared/types";
import { cn } from "@/shared/utils";

interface Language {
  name: string;
  icon: React.ReactNode;
}

interface Languages {
  [key: string]: Language;
}

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>("uk");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const languages: Languages = {
    uk: {
      name: "UA",
      icon: <UkraineFlag />,
    },
    en: {
      name: "EN",
      icon: <BritishFlag />,
    },
  };

  const getCurrentLocale = (): Locale => {
    const pathSegments = pathname?.split("/");
    return (pathSegments?.[1] as Locale) || "uk";
  };

  useEffect(() => {
    setCurrentLocale(getCurrentLocale());
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLanguage = (newLocale: Locale) => {
    const currentPath = pathname || "";
    const currentLocale = getCurrentLocale();
    const newPath = currentPath.replace(`/${currentLocale}`, `/${newLocale}`);

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${
      60 * 60 * 24 * 365
    }`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-50"
      >
        <div className=" flex-shrink-0 items-center">
          {languages[currentLocale].icon}
        </div>
        <span className="text-sm font-medium">
          {languages[currentLocale].name}
        </span>
        <ArrowDonwIcon
          className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50 border border-gray-100">
          {(Object.entries(languages) as [Locale, Language][]).map(
            ([locale, { name, icon }]) => (
              <button
                key={locale}
                onClick={() => switchLanguage(locale)}
                className={`w-full flex  items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 
                ${currentLocale === locale ? "bg-gray-50" : ""}`}
              >
                <div className="flex-shrink-0 items-center">{icon}</div>
                <span className="font-medium">{name}</span>
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
