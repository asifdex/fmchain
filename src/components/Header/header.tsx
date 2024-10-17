import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HeaderLists } from "@/config/HeaderLists";
import Link from "next/link";
import ConnectBtn from "../HelperCom/ConnectBtn";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import MobileMenu from "../HelperCom/MobileMenu";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setScroll] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 px-5 xl:px-0 ${!isScroll && "bg-white"}`}>
        <div
          className={`${
            isScroll && "backdrop-blur-2xl bg-white/30 shadow-header"
          } rounded-3xl max-w-7xl mx-auto flex items-center justify-between space-x-7 mt-5 py-4 px-7 transition-all duration-300 ease-in-out`}
        >
          <div className="flex gap-1 items-center justify-center">
            <Image src="/fm.svg" width={70} height={70} alt="logo" />
            <h3 className="italic font-extrabold hidden lg:flex lg:text-[35px] xl:text-[40px]">
              FMCHAIN
            </h3>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center md:gap-5 capitalize xl:gap-10 justify-center">
            {HeaderLists.map((item, idx) =>
              item.islink ? (
                <Link
                  href={item.link || ""}
                  key={idx}
                  className={`${
                    pathname === item.link
                      ? "bg-clip-text text-transparent bg-gradient-to-r font-extrabold text-2xl from-[#4ca5ffce] to-[#b673f8c9]"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <div key={idx}>
                  {item.name === "<ConnectBtn/>" ? <ConnectBtn /> : item.name}
                </div>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div
            className="flex md:hidden bg-white text-black shadow-xl cursor-pointer"
            onClick={toggleButton}
          >
            <div className={`transition-transform duration-200 ease-in-out transform`}>
              {isOpen ? (
                <IoClose className="text-4xl p-2" />
              ) : (
                <CiMenuFries className="text-4xl p-2" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          className={`fixed top-[100px] left-0 shadow-header rounded-xl py-5 w-full transform md:hidden transition-transform duration-500 ease-in-out bg-white/30 backdrop-blur-lg z-40`}
        >
          <MobileMenu toggleButton={toggleButton}  />
        </div>
      )}
    </>
  );
};

export default Header;
