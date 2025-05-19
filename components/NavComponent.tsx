"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
import MobileNav from "./MobileNav";
import { pages } from "@/utilities/data";


const NavComponent = () => {
  const pathName = usePathname();
  return (
    <nav className=" flex justify-between items-center text-white px-4 lg:px-2">
      <Link
        href={"/"}
        className="font-semibold text-2xl md:text-4xl capitalize"
      >
        cromax
      </Link>
      <ul
        className=" uppercase max-lg:hidden flex gap-7"
      >
        {pages.map(({ link, title }, i) => (
          <li key={i} className="text-xs tracking-widest ">
            <Link
              href={link}
              className={`${pathName == link ? "text-red-400" : "text-white/45"}`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <SocialMedia uniqueClass={"max-lg:hidden"} />
      <MobileNav />
    </nav>
  );
};

export default NavComponent;
