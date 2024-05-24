import React from "react";
import Logo from "@/assets/Logo1.svg";
import Image from "next/image";
import NavBarButton from "../NavBarButton/NavBarButton";
import Link from "next/link";
import AuthButton from "../AuthButton";
import { cm } from "@/utils/classMerge";
import { NavBarButtonProps } from "@/types";

type DesktopNavBarProps = {
  className?: string;
};

export const NAV_BAR_BUTTONS: NavBarButtonProps[] = [
  { path: "/", text: "Inicio" },
  { path: "/filosofia", text: "Filosofia" },
  { path: "/contacto", text: "Contacto" },
];

const DesktopNavBar = ({ className }: DesktopNavBarProps) => {
  return (
    <nav
      className={cm(
        "hidden h-full w-full flex-row items-center border-b-2  border-black bg-purple-extralight px-28 py-2 shadow-xl lg:flex",
        className,
      )}
    >
      <div className="flex items-start">
        <Link href={"/"}>
          <Image src={Logo} alt="LOGO" height={80} />
        </Link>
      </div>
      <ul className="flex w-full grow justify-center gap-8">
        {NAV_BAR_BUTTONS.map(({ path, text }) => (
          <NavBarButton key={`${path}-${text}`} path={path} text={text} />
        ))}
      </ul>
      <AuthButton />
    </nav>
  );
};

export default DesktopNavBar;