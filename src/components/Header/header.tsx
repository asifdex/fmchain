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
  const [isOpen, setIsopen] = useState(false);
  function toggleButton() {
    setIsopen(!isOpen);
  }
  useEffect
  return (
    <>
      <div
        className={` section_size w-full flex items-center justify-between backdrop-blur-2xl space-x-7 bg-white filter-3  mt-5 py-4 px-7 shadow-header `}
      >
        <div className="flex  gap-1 items-center justify-center">
          <Image src="fm.svg" width={70} height={70} alt="logo" />
          <h3 className="italic font-extrabold hidden lg:flex lg:text-[35px] xl:text-[40px]">
            FMCHAIN
          </h3>
        </div>

        {/* dekstop  */}
        <div className="md:flex items-center md:gap-5 capitalize xl:gap-10 justify-center hidden">
          {HeaderLists.map((items, idx) =>
            items.islink ? (
              <Link
                href={items.link || ""}
                key={idx}
                className={`${
                  pathname == items.link &&
                  "bg-clip-text text-transparent bg-gradient-to-r font-extrabold text-2xl from-[#4ca5ffce] to-[#b673f8c9]"
                }`}
              >
                {items.name}
              </Link>
            ) : (
              <div key={idx}>
                {items.name === "<ConnectBtn/>" ? <ConnectBtn /> : items.name}
              </div>
            )
          )}
        </div>
        {/* mobile  */}
        <div
          className={`flex md:hidden bg-white text-black shadow-xl 
             `}
          onClick={toggleButton}
        >
          <div
            className={`transition-transform duration-200 ease-in-out transform  ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isOpen ? (
              <IoClose className="text-4xl p-2" />
            ) : (
              <CiMenuFries className="text-4xl p-2" />
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={`${
            isOpen
              ? " translate-y-10  shadow-header rounded-xl "
              : "translate-y-10"
          } py-5 w-full  transform md:hidden  transition-transform duration-500 ease-in-out
        `}
        >
          
          <MobileMenu />
        </div>
      )}
    </>
  );
};

export default Header;
