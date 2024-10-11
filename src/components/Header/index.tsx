"use client";
import { FC } from "react";
import Image from "next/image";
import Logo from "../../public/images/logo-courtney-lanka.png";
import BurgerMenu from "../../public/images/burger-menu.png";
import HiddenMenuNavigation from "./HiddenMenuNavigation";

const Header: FC = () => {
  return (
    <>
      <HiddenMenuNavigation />
      <div className="header w-full h-20 flex justify-between px-6 items-center bg-white">
        <div className="header-logo">
          <Image src={Logo} alt="logo-courtney-lanka" />
        </div>
        <div className="header-burger-menu">
          <Image src={BurgerMenu} alt="burger-menu" />
        </div>
      </div>
    </>
  );
};

export default Header;
