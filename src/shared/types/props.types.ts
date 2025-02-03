import React, { ComponentProps } from "react";
import { dictionaries } from "../utils/getDictionary";
import {
  IContactsTranslation,
  INavigationItem,
  IPartenrsTranslation,
} from "./dictionary.types";
import * as yup from "yup";
import Link from "next/link";

export type Locale = keyof typeof dictionaries;
export type ButtonVariant = "primary" | "secondary";

export interface ILanguage {
  name: string;
  icon: React.ReactNode;
}

export interface ILanguages {
  [key: string]: ILanguage;
}

export type PageParams = {
  params: Promise<{ locale: Locale }>;
};
export type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

export interface IHeaderProps {
  translation: {
    navigation: INavigationItem[];
    donateButton: string;
  };
}

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export interface IFundraisingGoalProps {
  fundraisingTitle: string;
  goal: string;
  currency: string;
  totalAmount: number;
  currentAmount: number;
}

export interface IProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  totalAmount: number;
  currentAmount: number;
  height?: string;
}

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  withProgressBar?: boolean;
}

export interface IPartnersProps
  extends React.HtmlHTMLAttributes<HTMLTableSectionElement> {
  translation: IPartenrsTranslation;
}

export interface IFormField {
  name: string;
  label: string;
  type: "text" | "tel" | "textarea" | "password";
  placeholder?: string;
  required?: boolean;
  icon?: React.ReactNode;
  validation?: yup.AnySchema;
  mask?: string;
}

export interface IFormConfig {
  title?: string;
  fields: IFormField[];
  submitText: string;
  onSubmit?: (data: Record<string, string>) => void;
}

export interface IContactsProps {
  lang: Locale;
  translation: IContactsTranslation;
}

export interface ISvgIconProps extends React.SVGProps<SVGSVGElement> {
  variant?: "primary" | "secondary";
}

export interface ILogoProps extends ComponentProps<typeof Link> {
  variant?: "black" | "color";
  width?: number;
  height?: number;
}
