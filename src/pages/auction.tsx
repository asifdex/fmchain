import ShowPage from '@/components/HelperCom/ShowPage'
import React from 'react'

const auction = () => {
  return (
    <div className="w-full pt-52 flex flex-col items-center bg-[#b7c6dcc4]">
        <div className="section_size flex flex-col">
          <div className=" flex flex-col md:flex-row items-center justify-center gap-16">
            <ShowPage isBtn={false} />
          </div>
        </div>
      </div>
  )
}

export default auction
