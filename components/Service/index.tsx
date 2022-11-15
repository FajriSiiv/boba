import React from "react";
import ButtonPrimary from "../ButtonPrimary";

interface PageProps {
  title: string;
  btnText: string;
  urlText: string | any;
  subTitle: string;
  desc: string;
}

export default function Service({
  btnText,
  title,
  urlText,
  subTitle,
  desc,
}: PageProps) {
  return (
    <>
      <h2 className="uppercase font-semibold text-[#703EFE] text-lg">
        {title}
      </h2>
      <div className="flex gap-x-10 mt-5">
        <div className="text-[5rem] w-2/3 font-bold leading-[5.5rem]">
          <h3 className="capitalize">{subTitle}</h3>
        </div>
        <div className="w-1/3 flex flex-col justify-around">
          <p className="text-[#A1A1A1] leading-relaxed w-2/3">{desc}</p>
          <ButtonPrimary url_to={urlText} text={btnText} />
        </div>
      </div>
    </>
  );
}
