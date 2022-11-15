import React from "react";
import Image from "next/image";

interface PageProps {
  no?: string;
  title: string;
  desc: string;
  images: Blob | any;
}

export default function ListOffer({
  no = "01",
  title,
  desc,
  images,
}: PageProps) {
  return (
    <div className="h-44">
      <div className="grid grid-cols-8 justify-between items-start gap-x-10 group">
        <p className="pt-5 text-3xl font-bold col-span-1">{no}</p>
        <div className="pt-5 flex-3 col-span-4">
          <h3 className="text-[3rem] leading-[3rem] font-bold">{title}</h3>
          <p className="text-lg mt-5 text-gray-400">{desc}</p>
        </div>
        <div className="col-span-2 relative rounded-lg block">
          <Image
            src={images}
            alt="from dribbel"
            className="h-0 transition-all group-hover:h-44 w-full object-cover object-top rounded-lg"
          />
        </div>
        <div className="col-span-1 flex justify-center items-center h-44 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
