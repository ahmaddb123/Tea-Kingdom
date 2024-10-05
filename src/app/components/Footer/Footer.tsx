import "./footer.css";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="container mx-auto">
        <h1>KINGDOM OF TEA <FontAwesomeIcon icon={faMugHot} className="mx-3 text-3xl"/></h1>
        <hr className="bg-white h-[1px] w-full my-3" />
        <p>If you have any comment or suggestion, contact us</p>
        <div className="media">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
          <FontAwesomeIcon icon={faInstagram} className="icon" />
          <FontAwesomeIcon icon={faTelegram} className="icon" />
          <FontAwesomeIcon icon={faXTwitter} className="icon" />
        </div>
        <p>Copyright &copy; 2024</p>

      </div>
    </div>
  );
};

export default Footer;
