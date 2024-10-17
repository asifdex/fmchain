import { HeaderLists } from "@/config/HeaderLists";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";
import ConnectBtn from "../HelperCom/ConnectBtn";
                           
const MobileMenu = ({ toggleButton }: { toggleButton:any}) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center h-full gap-5 capitalize justify-between" >
      {HeaderLists.map((items, idx) =>
        items.islink ? (
          <Link
            href={items.link || ""}
            key={idx}
            onClick={()=> toggleButton()}
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
  );
};

export default MobileMenu;
