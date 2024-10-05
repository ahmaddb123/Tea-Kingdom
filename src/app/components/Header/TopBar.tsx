import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TopBar = () => {
  return (
    <div className="w-full bg-[#750E21] flex justify-center items-center p-4">
      <h1 className="text-xl mx-3 uppercase">Kingdom of tea <FontAwesomeIcon icon={faMugHot} className="mx-3 text-3xl"/></h1>
    </div>
  );
};

export default TopBar;
