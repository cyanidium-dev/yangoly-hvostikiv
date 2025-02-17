import { ComponentProps } from "react";
import { dictionaries } from "../utils/getDictionary";
import {
  IAboutTranslation,
  IContactsTranslation,
  IDonateAmountSectionTranslation,
  IDonateModalTranslation,
  IHeroTranslation,
  IInformationBlockTranslation,
  INavigationItem,
  IPartenrsTranslation,
  IPartnershipTranslation,
} from "./dictionary.types";
import * as yup from "yup";
import Link from "next/link";

export type Locale = keyof typeof dictionaries;
export type ButtonVariant = "primary" | "secondary" | "outline";

export interface ILanguage {
  name: string;
  icon: React.ReactNode;
}

export interface ILanguages {
  [key: string]: ILanguage;
}

export type PageParams = {
  params: Promise<{ locale: Locale; id?: string }>;
  searchParams?: Promise<{ [key: string]: string | undefined }>;
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
  donateModalTranslataion: IDonateModalTranslation;
  lang: Locale;
}

export interface IBurgerMenuProps {
  isOpen: boolean;
  translation: {
    navigation: INavigationItem[];
    donateButton: string;
  };
  donateModalTranslataion: IDonateModalTranslation;
  lang: Locale;
}

export interface IHeroProps {
  translation: IHeroTranslation;
}

export interface IAboutProps {
  translation: IAboutTranslation;
}

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

interface IFundraisingGoalStyleProps {
  titleClassName?: string;
  goalClassName?: string;
  currentAmountClassName?: string;
}

export interface IFundraisingGoalProps extends ComponentProps<"div"> {
  fundraisingTitle: string;
  goal: string;
  currency: string;
  totalAmount: number;
  currentAmount: number;
  styles?: IFundraisingGoalStyleProps;
  imageVariant?: "big" | "small" | "middle";
}

export interface IProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  totalAmount: number;
  currentAmount: number;
  height?: string;
}

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  withProgressBar?: boolean;
  goal?: string;
  currency?: string;
  currentAmount?: number;
  totalAmount?: number;
  onClick?: () => void;
  buttonText?: string;
  image: string;
  buttonStyle?: string;
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
  className?: string;
}

export interface IContactsProps {
  lang: Locale;
  translation: IContactsTranslation;
}

export interface ISvgIconProps extends React.SVGProps<SVGSVGElement> {
  variant?: "primary" | "secondary";
}

export interface ICheckBoxIconProps extends React.SVGProps<SVGSVGElement> {
  variant?: "default" | "error" | "checked";
}

export interface ILogoProps extends ComponentProps<typeof Link> {
  variant?: "black" | "color";
  width?: number;
  height?: number;
}

export interface IInfoBlockProps extends ComponentProps<"div"> {
  translation: IInformationBlockTranslation;
  children?: React.ReactNode;
}

interface IImage {
  src: string;
  alt: string;
}

export interface IImageGalleryProps extends ComponentProps<"div"> {
  images: IImage[];
  variant: "splitLayout" | "fourGrid";
}

export interface IAmountCardProps {
  amount: number;
  formattedAmount: string;
  isSelected: boolean;
  currency: string;
  onClick: (amount: number) => void;
}

export interface ICustomAmountCardProps {
  value: string;
  isSelected: boolean;
  currency: string;
  anotherAmount: string;
  onChange: (value: string) => void;
  onFocus: () => void;
  formatAmount: (amount: number) => string;
}

export interface ITextInputProps
  extends Omit<ComponentProps<"input">, "onChange"> {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export interface ICheckBoxProps
  extends Omit<ComponentProps<"input">, "onChange" | "type"> {
  label: string;
  onChange: (checked: boolean) => void;
  error?: boolean;
}

type PaymentType = "monoPay" | "googlePay" | "card";

export interface IPaymentButtonProps
  extends Omit<ComponentProps<"button">, "type"> {
  paymentType: PaymentType;
  text?: string;
}

export interface IDonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  translation?: IDonateModalTranslation;
  lang: Locale;
}

export interface IAmountSectionProps {
  translation: IDonateAmountSectionTranslation;
  currency: string;
  lang: Locale;
}

export interface IToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export interface ICardPaymentFormProps {
  onSubmit: (data: ICardPaymentFormData) => void;
  lang: Locale;
}

export interface ICardPaymentFormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export interface IThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export interface IMonthlyGoalSectionProps {
  lang: Locale;
  donateModalTranslataion: IDonateModalTranslation;
}

export interface IAnimatedSectionProps {
  children: React.ReactNode;
  initial?: {
    opacity?: number;
    x?: number;
    y?: number;
    scale?: number;
    rotate?: number;
  };
  whileInView?: {
    opacity?: number;
    x?: number;
    y?: number;
    scale?: number;
    rotate?: number;
  };
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string | number[];
  };
  amount?: number;
}

export interface IPartnershipProps {
  translation: IPartnershipTranslation;
  lang: Locale;
}

export interface IModalProps extends ComponentProps<"div"> {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  modalClassName?: string;
}

export interface ITailProps {
  image: string;
  images: string[];
  name: string;
  buttonText: string;
  categories: string[];
  description: string[];
  id: string;
}

export interface ITailInfoProps {
  tail: ITailProps;
  locale: Locale;
}
