/* eslint-disable @next/next/no-img-element */
"use client"

import { RootState } from "@/src/store";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useSelector } from "react-redux";

export const LogoTitleCombo = () => {
  return (
    <div className="flex gap-1 justify-center items-end">
      <img className="w-10" src="/max-logo.png" alt="brand logo" />
      <h1 className="font-semibold text-2xl">ax Essien</h1>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="flex justify-center flex-col md:flex-row gap-4 font-medium text-lg items-center">
      <Link className="hover:text-(--text-primary-light)" href={"/"}>
        Home
      </Link>
      <Link className="hover:text-(--text-primary-light)" href={"/projects"}>
        Projects
      </Link>
      <Link className="hover:text-(--text-primary-light)" href={"/contact"}>
        Contact
      </Link>
    </nav>
  );
};

const AppHeader = () => {
  const [showNav, setShowNav] = useState(false);
  const { width } = useSelector((state: RootState) => state.windowSize);
  return (
    <header className="flex justify-between items-center w-full px-3 md:px-5 lg:px-7 py-2 md:py-4">
      <LogoTitleCombo />
      {width > 768 ? (
        <Nav />
      ) : (
        !showNav && (
          <button className="font-semibold text-3xl" onClick={()=>setShowNav(true)}>
            <HiMenu />
          </button>
        )
      )}
      {width <= 768 && showNav && (
        <div className="fixed bg-[rgb(0,0,0,0.3)] top-0 left-0 backdrop-blur-md flex justify-center items-start w-screen h-screen px-3 min-h-120 pt-15">
          <button className="font-semibold text-3xl fixed top-3 right-3" onClick={()=>setShowNav(false)}>
            <HiX />
          </button>
          <div className="w-full max-w-120 bg-(--main-primary-light) px-3 py-4 flex justify-center rounded-md">
            <Nav />
          </div>
        </div>
      )}
    </header>
  );
};

export default AppHeader;
