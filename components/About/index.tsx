import React from "react";
import ButtonPrimary from "../ButtonPrimary";

export default function About() {
  return (
    <>
      <h2 className="uppercase font-semibold text-[#703EFE] text-lg">
        About us
      </h2>
      <div className="flex gap-x-10">
        <div className="text-[5rem] w-2/3 font-bold leading-[6rem]">
          <h3>We Always Prioritize Quality And Unique Style</h3>
        </div>
        <div className="w-1/3 flex flex-col justify-around">
          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam
            adipisci totam odio ad accusamus corrupti dolore officiis iste eum,
            ipsam odit incidunt, delectus similique corporis? Pariatur
            recusandae itaque nostrum!
          </p>
          <ButtonPrimary url_to="#" text="About Us" />
        </div>
      </div>
    </>
  );
}
