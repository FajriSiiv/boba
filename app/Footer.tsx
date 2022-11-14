import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Github = () => {
  return (
    <svg
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_25_4)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default function Footer() {
  return (
    <div className="bg-[#703EFE] p-20 pb-5 text-white">
      <div className="flex justify-between pb-20 border-b-2 border-b-gray-300">
        <p className="w-2/3 text-[5.4rem] font-semibold">
          Let's Collaborate with us!
        </p>
        <div className="w-1/3 flex justify-end items-center">
          <div className="h-36 w-36 text-xl rounded-full bg-white text-[#703EFE] flex justify-center items-center font-bold hover:bg-[#0B015B] transition-all duration-300 cursor-pointer">
            <span>Let's Talk!</span>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between pt-10">
        <div className="w-4/12">
          <span className="text-5xl font-bold">boba</span>
          <p className="mt-7 text-lg leading-relaxed">
            boba is an agency with 10+ years of experience that has helped more
            than 300+ projects from small to large projects
          </p>
        </div>
        <div className="w-4/12 flex gap-x-5 justify-around">
          <div className="flex flex-col gap-y-4 text-lg ">
            <span className="font-bold">Home</span>
            <p>About us</p>
            <p>Service</p>
            <p>Projects</p>
          </div>
          <div className="flex flex-col gap-y-4 text-lg">
            <span className="font-bold">Privacy</span>
            <p>Terms</p>
            <p>Office</p>
          </div>
          <div className="flex flex-col gap-y-4 text-lg">
            <span className="font-bold">Social Media</span>
            <p>Dribble</p>
            <p>Behance</p>
            <p>Linkedin</p>
            <p>Facebook</p>
          </div>
        </div>
      </div>
      <div className="pt-10 flex w-52 ">
        <Link
          href="https://github.com/FajriSiiv"
          target="_blank"
          className="w-fit flex cursor-pointer items-center gap-x-3"
        >
          <Github />
          <span className="font-semibold text-lg">My Github</span>
        </Link>
      </div>
    </div>
  );
}
