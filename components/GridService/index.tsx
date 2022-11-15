import React from "react";
import webD from "public/images/web-contoh.jpg";
import sosmedImg from "public/images/sosmed-img.jpg";
import brandingImg from "public/images/branding-img.jpg";
import digitalImg from "public/images/marketing-img.png";
import Image from "next/image";

interface PageProps {
  imgs: Blob | any;
  title: string;
  scope: string;
  from: string;
  brand: string;
}

const GridAnimate = ({ imgs, brand, from, scope, title }: PageProps) => {
  return (
    <>
      <div className="absolute left-0 top-0">
        <Image src={imgs} alt="from dribble" />
      </div>
      <div className="absolute left-0 top-0 translate-y-[100%] z-10 group-hover:translate-y-0 h-full w-full  transition-all">
        <div className="h-full w-full bg-[#703EFE] flex flex-col px-5 py-6 ">
          <div className="h-1/2 w-full flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
          <div className="h-1/2 w-full text-white flex  flex-col justify-end">
            <p className="text-2xl font-semibold pb-5">{title}</p>
            <div className="flex gap-x-10">
              <div>
                <span className="tracking-[3px]">Scope</span>
                <p className="font-semibold">{scope}</p>
              </div>
              <div>
                <span className="tracking-[3px]">From</span>
                <p className="font-semibold">{from}</p>
              </div>
              <div>
                <span className="tracking-[3px]">Brand</span>
                <p className="font-semibold">{brand}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function GridService() {
  return (
    <div className="grid grid-cols-2 grid-rows-7 h-[100vh] max-h-[800px] py-14 gap-6 relative">
      <div className="col-span-1 h-full w-full row-span-3 relative overflow-hidden group rounded-xl cursor-pointer">
        <GridAnimate
          brand="Siiv"
          from="Indonesia"
          imgs={webD}
          scope="UIUX Design"
          title="EasyBank - Bank App"
        />
      </div>
      <div className="col-span-1 row-span-4 h-full w-full relative overflow-hidden group rounded-xl cursor-pointer">
        <GridAnimate
          brand="Siiv"
          from="Indonesia"
          imgs={sosmedImg}
          scope="Frontend Developer"
          title="EasyBank - Bank App"
        />
      </div>
      <div className="col-span-1 row-span-4 h-full w-full relative overflow-hidden group rounded-xl cursor-pointer">
        <GridAnimate
          brand="Siiv"
          from="Indonesia"
          imgs={brandingImg}
          scope="UIUX Design"
          title="EasyBank - Bank App"
        />
      </div>
      <div className="col-span-1 row-span-3 h-full w-full relative overflow-hidden group rounded-xl cursor-pointer">
        <GridAnimate
          brand="Siiv"
          from="Indonesia"
          imgs={digitalImg}
          scope="Frontend Developer"
          title="EasyBank - Bank App"
        />
      </div>
    </div>
  );
}
