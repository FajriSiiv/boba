import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import imageAbout from "public/images/cp-peps.jpg";
import Image from "next/image";
export default function About() {
  return (
    <>
      <h2 className="uppercase font-semibold text-[#703EFE] text-lg">
        About us
      </h2>
      <div className="flex gap-x-10 mt-5">
        <div className="text-[5rem] w-2/3 font-bold leading-[5.5rem]">
          <h3>We Always Prioritize Quality And Unique Style</h3>
        </div>
        <div className="w-1/3 flex flex-col justify-around">
          <p className="text-[#A1A1A1] leading-relaxed ">
            boba is an agency with 10+ years of experience that has helped more
            than 300+ projects from small to large projects. We also have
            several services that can help your business grow with us.
          </p>
          <ButtonPrimary url_to="#" text="About Us" />
        </div>
      </div>
      <div className="pt-28">
        <div className="relative">
          <Image
            src={imageAbout}
            alt="Image About"
            placeholder="blur"
            className="rounded-3xl h-[600px] object-cover"
          />
        </div>
      </div>
    </>
  );
}
