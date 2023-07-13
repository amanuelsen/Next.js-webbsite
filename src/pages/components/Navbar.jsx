import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <Link href={"/"}>
          <h1>Capture</h1>
        </Link>

        <ul>
        
          <Link href={"home"}>
            <li>Home</li>
          </Link>
          <Link href={"#gallery"}>
            <li>gallery</li>
          </Link>
          <Link href={"portfolio"}>
            <li>work</li>
          </Link>
          <Link href={"contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
