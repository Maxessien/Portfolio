/* eslint-disable @next/next/no-img-element */
"use client"

import { RootState } from "@/src/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useSelector } from "react-redux";

export const LogoTitleCombo = () => {
  const router = useRouter()
  return (
    <div onClick={()=>router.push("/")} className="flex gap-1 cursor-pointer justify-center items-end">
      <img className="w-10" src="/max-logo.png" alt="brand logo" />
      <h1 className="font-semibold text-2xl">ax Essien</h1>
    </div>
  );
};

const Nav = ({closeNav}: {closeNav: ()=>void}) => {
  return (
    <nav className="flex justify-center flex-col md:flex-row gap-4 font-medium text-lg items-center">
      <Link onClick={closeNav} className="hover:text-(--text-primary-light)" href={"/"}>
        Home
      </Link>
      <Link onClick={closeNav} className="hover:text-(--text-primary-light)" href={"/projects"}>
        Projects
      </Link>
      <Link onClick={closeNav} className="hover:text-(--text-primary-light)" href={"/contact"}>
        Contact
      </Link>
    </nav>
  );
};

const AppHeader = () => {
  const [showNav, setShowNav] = useState(false);
  const { width } = useSelector((state: RootState) => state.windowSize);

  useEffect(()=>{
    const handleResize = ()=>{
      setShowNav(false)
    }
    handleResize()
  }, [width])

  return (
    <header className="flex justify-between items-center w-full px-3 md:px-5 lg:px-7 py-2 md:py-4">
      <LogoTitleCombo />
        <div className="hidden md:block"><Nav closeNav={()=>setShowNav(false)} /></div>
        {!showNav && (
          <button className="font-semibold md:hidden text-3xl" onClick={()=>setShowNav(true)}>
            <HiMenu />
          </button>
        )}
      {showNav && (
        <div className="fixed md:hidden z-9999 bg-[rgb(0,0,0,0.3)] top-0 left-0 backdrop-blur-md flex justify-center items-start w-screen h-screen px-3 min-h-120 pt-15">
          <button className="font-semibold text-3xl fixed top-3 right-3" onClick={()=>setShowNav(false)}>
            <HiX />
          </button>
          <div className="w-full max-w-120 bg-(--main-primary-light) px-3 py-4 flex justify-center rounded-md">
            <Nav closeNav={()=>setShowNav(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default AppHeader;
