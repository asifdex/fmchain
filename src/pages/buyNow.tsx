import CustomBtn from "@/components/HelperCom/CustomBtn";
import ShowPage from "@/components/HelperCom/ShowPage";
import React from "react";

const buy = () => {
  return (
    <>
      <div className="w-full pt-52 flex flex-col items-center bg-[#b7c6dcc4]">
        <div className="section_size flex flex-col">
          <div className=" flex flex-col md:flex-row items-center justify-center gap-16">
            <ShowPage isBtn={false} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-20">
        {/* <div className="section_size h-full flex flex-col md:flex-row items-center justify-between gap-5"> */}
        <div className="flex flex-col items-start justify-center gap-5 max-w-lg">
          <h3 className="text-2xl font-bold">Enjoy 15% sale this Friday</h3>
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <CustomBtn title="Explore Now" othercss="" linkUrl="" isLink={true} />
        </div>
        <div className="flex flex-col items-start justify-center gap-5 max-w-lg">
          <h3 className="text-2xl font-bold">Enjoy 15% sale this Friday</h3>
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <CustomBtn title="Explore Now" othercss="" linkUrl="" isLink={true} />
        </div>{" "}
        <div className="flex flex-col items-start justify-center gap-5 max-w-lg">
          <h3 className="text-2xl font-bold">Enjoy 15% sale this Friday</h3>
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <CustomBtn title="Explore Now" othercss="" linkUrl="" isLink={true} />
        </div>
        <div className="flex flex-col items-start justify-center gap-5 max-w-lg">
          <h3 className="text-2xl font-bold">Enjoy 15% sale this Friday</h3>
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <CustomBtn title="Explore Now" othercss="" linkUrl="" isLink={true} />
        </div>
        <div className="flex flex-col items-start justify-center gap-5 max-w-lg">
          <h3 className="text-2xl font-bold">Enjoy 15% sale this Friday</h3>
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <CustomBtn title="Explore Now" othercss="" linkUrl="" isLink={true} />
        </div>
        <div className="flex flex-col items-start justify-center gap-5 max-w-lg">
          <h3 className="text-2xl font-bold">Enjoy 15% sale this Friday</h3>
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <CustomBtn title="Explore Now" othercss="" linkUrl="" isLink={true} />
        </div>
        <div className="flex flex-col items-start justify-center gap-5 max-w-lg">
          <h3 className="text-2xl font-bold">Enjoy 15% sale this Friday</h3>
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <CustomBtn title="Explore Now" othercss="" linkUrl="" isLink={true} />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default buy;
