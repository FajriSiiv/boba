import Image from "next/image";
import React from "react";

interface PageProps {
  imgs: Blob | any;
}

export default function Coorperation({ imgs }: PageProps) {
  return (
    <div className="relative  pt-5">
      <Image src={imgs} alt="from dribble" width={100} height={60} />
    </div>
  );
}
