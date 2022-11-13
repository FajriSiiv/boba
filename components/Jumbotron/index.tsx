import React from "react";

export default function Jumbotron() {
  return (
    <>
      <div className="px-20 h-[100vh] max-h-[900px] bg-[#0B015B] text-white flex flex-col justify-center items-center border-b-[20px] border-b-[#703EFE] w-full">
        <div className="text-[10rem] font-bold leading-[10rem] tracking-wide">
          <h1>Creative</h1>
        </div>
        <div className="flex items-center gap-x-10 leading-[10rem] mr-32">
          <h1 className="text-[10rem] font-bold tracking-wide">Digital</h1>
          <p className="w-80 text-sm leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            assumenda, provident quod a expedita quaerat aperiam obcaecati
          </p>
        </div>
        <div className="text-[10rem] font-bold leading-[10rem] tracking-wide ml-60">
          <h1>Agency</h1>
        </div>
      </div>
    </>
  );
}
