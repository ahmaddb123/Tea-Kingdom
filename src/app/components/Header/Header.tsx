"use client"
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import "./header.css";

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggle = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isActive]);

  return (
    <div className="header">
      <div className="container mx-auto ">
        <div>
          <Image src={"/logo.png"} alt="Logo" width={100} height={100} />
        </div>
        <div className="container-nav">
          <div onClick={toggle}>
            {isActive ? (
              <FontAwesomeIcon icon={faX} className="icon" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="icon" />
            )}
          </div>
          <Nav isActive={isActive} setIsActive={setIsActive} />
        </div>
      </div>
    </div>
  );
};

export default Header;
