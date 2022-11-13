import Link from "next/link";
import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";

function Header() {
  return (
    <header className="h-20 px-20 flex justify-between items-center bg-transparent absolute top-0 left-0 w-[100vw]  text-white">
      <p className="text-2xl font-bold">boba</p>
      <div className="flex items-center gap-x-10 ">
        <Link href="#">Home</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Service</Link>
        <Link href="#">Project</Link>
        <div>
          <ButtonPrimary url_to="#" text="Contact Us" />
        </div>
      </div>
    </header>
  );
}

export default Header;
