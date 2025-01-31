export interface INavigationItem {
  name: string;
  href: string;
  dropdown?: {
    name: string;
    href: string;
  }[];
}

export interface IHeroTranslation {
  title: string;
  subtitle: string;
  fundraisingTitle: string;
  goal: string;
  currency: string;
}

export interface IAboutUsTranslation {
  title: string;
  charitableFund: string;
  organisation: string;
  firstParagraph: string;
  secondParagraph: string;
  partnerLink: string;
  reportingLing: string;
}

export interface IAboutOwnerTranslation {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  boldText: string;
}
export interface IAboutTranslation {
  aboutUs: IAboutUsTranslation;
  aboutOwner: IAboutOwnerTranslation;
}

export interface IWorkResult {
  count: string;
  action: string;
}
