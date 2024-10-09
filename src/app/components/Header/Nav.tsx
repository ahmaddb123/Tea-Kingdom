import React, { useRef } from "react";
import Link from "next/link";
import "./header.css";

interface NavProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<NavProps> = ({ isActive, setIsActive }) => {
  const navRef = useRef<HTMLDivElement | null>(null);

  const close = () => {
    if (navRef.current && isActive) {
      navRef.current.classList.remove("active");
      setIsActive(false); // تعديل هنا
    }
  };

  return (
    <div ref={navRef} className={`nav ${isActive ? "active" : ""}`}>
      <Link className="link" href={"/"} onClick={close}>
        Home
      </Link>
      <Link className="link" href={"/Information"} onClick={close}>
        Information
      </Link>
      <Link className="link" href={"/TeaProducts"} onClick={close}>
        Tea Product
      </Link>
      <Link className="link" href={"/login"} onClick={close}>
        Login
      </Link>
    </div>
  );
};

export default Nav;
