import React from "react";
import ImageSlider from "../ui/NftSlider";
import CustomBtn from "./CustomBtn";

const ShowPage = ({ isBtn }: { isBtn: boolean }) => {
  return (
    <>
      <div className="flex flex-col items-start justify-center gap-5 max-w-lg">
        <h3 className="text-[50px] md:text-[59px] font-bold">Enjoy 15% sale this Friday</h3>
        <p className="text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        {isBtn ? (
          <CustomBtn title="Explore Now" othercss="" linkUrl="" isLink={true} />
        ) : (
          <CustomBtn title="input" othercss="" linkUrl="" isLink={true} />
        )}
      </div>
      <div className="w-full md:w-1/2 relative">
        <ImageSlider />
      </div>
    </>
  );
};

export default ShowPage;
