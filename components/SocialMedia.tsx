import React from "react";
import { FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa6";
const socialLinks = [
  {
    icon: <FaTiktok />,
    link: "https://www.tiktok.com/@cromax_lens?_t=ZM-8vOXbKz1ft7&_r=1",
  },
  {
    icon: <FaWhatsapp />,
    link: "https://wa.me/2349061592634",
  },
  // {
  //     icon: <FaInstagram />,
  //     link: "#"
  // },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/ifeivbunu-godskey?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSSHhB44YRoajRaQVAthsFQ%3D%3D",
  },
];

const SocialMedia = ({ uniqueClass = "", color = "text-white/45" }) => {
  return (
    <div
      className={`flex gap-5 text-xl items-center ${uniqueClass} ${color}`}
    >
      {socialLinks.map(({ icon, link }, i) => {
        return (
          <a
            href={link}
            className=" hover:scale-110 cursor-pointer transition-transform"
            key={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
