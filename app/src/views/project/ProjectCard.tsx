import Button from "components/Button";
import numeral from "numeral";
import { FaTelegram, FaDiscord, FaTwitter, FaMedium } from "react-icons/fa";
import { Project } from "types/common";

const socialNetworks = [
  { name: "Telegram", icon: FaTelegram, href: "https://google.com" },
  { name: "Discord", icon: FaDiscord, href: "https://google.com" },
  { name: "Twitter", icon: FaTwitter, href: "https://google.com" },
  { name: "Medium", icon: FaMedium, href: "https://google.com" },
];

export type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const {
    name,
    logo,
    description,
    token_price,
    token_amount,
    sale_token,
    deposit_token,
  } = project;
  return (
    <div className="w-full lg:w-auto lg:flex-1 min-h-[600px] lg:self-stretch card">
      <div className="p-8">
        <div className="flex items-center justify-between">
          <div className="w-[160px] h-[160px] bg-gray-500 rounded-md overflow-hidden">
            <img className="object-cover h-full" src={logo} alt={name} />
          </div>
          <div className="text-center">
            <div className="text-body1">Token Price</div>
            <div className="text-h5 font-bold">
              ${token_price} {deposit_token.ticker}
            </div>
          </div>
        </div>
        <div className="min-h-[200px]">
          <h2 className="text-h2 font-bold mt-4">{name}</h2>
          <div className="text-body1">{description}</div>
        </div>
      </div>
      <hr className="divider" />
      <div className="p-8">
        <div className="flex justify-between">
          <div className="text-left">
            <div className="text-body2">Pool Size</div>
            <div className="text-body1 font-semibold">
              {numeral(token_amount).format("0,0")} {sale_token.ticker}
            </div>
          </div>
          <div className="text-right">
            <div className="text-body2">Hard Cap</div>
            <div className="text-body1 font-semibold">
              {numeral(token_amount * token_price).format("0,0")}{" "}
              {deposit_token.ticker}
            </div>
          </div>
        </div>
        <Button fullWidth size="large" className="mt-8">
          Participate
        </Button>
      </div>

      <hr className="divider" />
      <div className="flex space-x-4 p-8 text-primary">
        {socialNetworks.map((item) => (
          <a
            href={item.href}
            className="p-2 inline-block cursor-pointer rounded-full hover:bg-gray-600/10"
            key={item.name}
            rel="noopener noreferrer"
            target="_blank"
          >
            <item.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
