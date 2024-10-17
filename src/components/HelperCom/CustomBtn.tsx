import Link from 'next/link'
import React from 'react'


const CustomBtn = ({title,othercss,handleclick,isLink,icon,linkUrl}:customBtnProps) => {
  return (
    <button className={`px-4 py-2 bg-black transform duration-200 ease-in-out transition-transform text-white 
    hover:scale-105 ${othercss}`} onClick={handleclick}>
    
    {isLink ? (
      <a href={linkUrl}>{title} {icon}</a>
      ):(
        <Link href={linkUrl}>{title} {icon}</Link>
    )}
    
  </button>
  )
}

export default CustomBtn
