import Link from "next/link";
import {
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  TelegramIcon,
  YoutubeIcon,
} from "../../../../public/images/icons";

const socials = [
  {
    icon: InstagramIcon,
    href: "/",
    name: "Instagram",
  },
  {
    icon: TwitterIcon,
    href: "/",
    name: "Twitter",
  },
  {
    icon: FacebookIcon,
    href: "/",
    name: "Facebook",
  },
  {
    icon: TelegramIcon,
    href: "/",
    name: "Telegram",
  },
  {
    icon: YoutubeIcon,
    href: "/",
    name: "Youtube",
  },
];

const SocialsList = ({
  iconClass = "text-primary-orange",
}: {
  iconClass?: string;
}) => {
  return (
    <ul className="flex items-center justify-center gap-4">
      {socials.map((item) => (
        <li key={item.name}>
          <Link target="_blank" href={item.href} className="flex items-center">
            <item.icon className={iconClass} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialsList;
