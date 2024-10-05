import React from "react";
import "./AboutUs.css";
import Image from "next/image";
import { companyInfo } from "@/app/data";
function AboutUs() {
  return (
    <div className="AboutUs">
      <div className="title">
        <h1>About Us</h1>
      </div>
      <div className="container mx-auto content">
        <div className="container-img">
          <Image src={"/ahmad.jpg"} alt="" width={400} height={400} className="image-ahmad"/>
        </div>
        <div className="info">
          <ul>
            {companyInfo.map((item) => (
              <li key={item.id}>{item.content}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
