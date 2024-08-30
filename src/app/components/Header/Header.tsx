"use client";

import NZLogo from "../../../../public/NZLogo.svg";
import Image from "next/image";
import Link from "next/link";
import { HeaderNavigation } from "@/app/helpers/Header/HeaderNavigation";
import { CTAButton } from "@/app/ui/button/CTAButton";
// import { useRouter } from "next/router";
// import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
export const Header = () => {
  // const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  return (
    <header className="px-6 py-2 flex items-center justify-between border-b-4 border-MainColor/10 sticky top-0 bg-BodyColor z-50">
      {/* <Image
        src={NZLogo.src}
        alt="Zeleniak Nikita Logo"
        width={120}
        height={120}
      /> */}
      <ul className="flex items-center ">
        {HeaderNavigation.map(({ href, name, id }) => (
          <li key={id} className="relative ">
            <Link
              className={`relative text-lg px-8 py-3  ease-scale-opacity duration-300 rounded-md ${
                pathname === href ? " bg-AccentColor/20" : "hover:bg-AccentColor/10"
              } `}
              href={href}
            >
              {name}
              <span
                className={`absolute left-0 -bottom-3 w-full h-[3px] bg-AccentColor ease-in-out duration-300 ${
                  pathname === href ? "translate-x-0" : "translate-x-[-1000%]"
                } `}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
      <CTAButton text={"Contact me"} />
    </header>
  );
};
