import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/yourprofile" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/yourprofile" },
  { icon: <FaTwitter />, path: "https://twitter.com/yourprofile" },
  { icon: <FaYoutube />, path: "https://youtube.com/yourchannel" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
