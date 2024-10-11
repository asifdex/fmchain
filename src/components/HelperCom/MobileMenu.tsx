import { HeaderLists } from '@/config/HeaderLists'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import ConnectBtn from './ConnectBtn'

const MobileMenu = () => {
    const pathname =usePathname();
  return (
    <div className="flex items-center h-full flex-col md:hidden gap-5 capitalize justify-between">
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
  )
}

export default MobileMenu
