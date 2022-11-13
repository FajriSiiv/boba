import Link from "next/link";
import React from "react";

interface PageProps {
  url_to: string;
  text: string;
}

export default function ButtonPrimary({ url_to, text }: PageProps) {
  return (
    <Link
      href={url_to}
      className="bg-[#703EFE] text-white px-5 py-3 rounded-full font-semibold w-36 text-center"
    >
      {text}
    </Link>
  );
}
