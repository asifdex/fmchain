import React from "react";
import ShowPage from "../HelperCom/ShowPage";


const Hero = () => {
  return (
    <div className="w-full py-52 bg-[#b7c6dcc4]">
      <div className="section_size h-full flex flex-col md:flex-row items-center justify-between gap-5">
        <ShowPage isBtn={true} />
      </div>
    </div>
  );
};

export default Hero;
