export interface INavigationItem {
  name: string;
  href: string | { pathname: string; query?: Record<string, string | number> };
  dropdown?: {
    name: string;
    href:
      | string
      | { pathname: string; query?: Record<string, string | number> };
  }[];
}

export interface IHeroTranslation {
  title: string;
  subtitle: string;
  fundraisingTitle: string;
  goal: string;
  currency: string;
}

interface ISegment {
  text: string;
  bold: boolean;
}

interface IParagraph {
  segments: ISegment[];
}

interface ILink {
  text: string;
  href: string;
}

export interface IInformationBlockTranslation {
  title: string;
  paragraphs: IParagraph[];
  links?: ILink[];
}

export interface IAboutOwnerTranslation {
  title: string;
  paragraphs: IParagraph[];
}

export interface IAboutTranslation {
  aboutUs: IInformationBlockTranslation;
  aboutOwner: IInformationBlockTranslation;
}

export interface IWorkResult {
  count: string;
  action: string;
}

export interface IPartenrsTranslation {
  title: string;
}

export interface IContactsTranslation {
  title: string;
  subtitle: string;
}

export interface IDonateAmountSectionTranslation {
  title: string;
  anotherAmount: string;
  inputPlaceholder: string;
  inputLabel: string;
  firstCheckboxLabel: string;
  secondCheckboxLabel: string;
  cardButton: string;
  submitError: string;
}

export interface IDonateModalTranslation {
  fundraisingTitle: string;
  currency: string;
  goal: string;
  donateAmountSection: IDonateAmountSectionTranslation;
}

export interface IPartnershipTranslation {
  hero: {
    title: string;
    button: string;
  };
  content: {
    title: string;
    description: string;
    sections: {
      title: string;
      items: string[];
    }[];
    buttons: {
      partner: string;
      documents: string;
    };
  };
  modalTitle: string;
}
