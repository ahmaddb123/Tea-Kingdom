import Link from "next/link";
import React from "react";
import "./header.css"

function Nav() {
  return (
    <div className=" nav ">
      <Link className="link" href={"/"}>
        Home
      </Link>
      <Link className="link" href={"/Information"}>
      Information
      </Link>
      <Link className="link" href={"/TeaProducts"}>
      Tea Product
      </Link>
      <Link className="link" href={"/login"}>
        Login
      </Link>
    </div>
  );
}

export default Nav;
