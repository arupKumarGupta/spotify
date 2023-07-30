"use client";

import NavigationButton from "@/components/NavigationButton";
import React from "react";
import { twMerge } from "tailwind-merge";
import { BiHome, BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const handleLogout = () => {};
  return (
    <div
      className={twMerge(
        "h-fit bg-gradient-to-b from-emerald-800 p-6",
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-x-2">
          <NavigationButton onClick={router.back}>
            <RxCaretLeft size={30} className="text-white" />
          </NavigationButton>
          <NavigationButton onClick={router.forward}>
            <RxCaretRight size={30} className="text-white" />
          </NavigationButton>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <NavigationButton className="bg-white p-2">
            <HiHome size={20} className="text-black" />
          </NavigationButton>
          <NavigationButton className="bg-white p-2">
            <BiSearch size={20} className="text-black" />
          </NavigationButton>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button className="bg-transparent text-neutral-300 font-medium">
                Sign up
              </Button>
            </div>
            <div>
              <Button className="bg-white px-6 py-2 font-semibold">
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
