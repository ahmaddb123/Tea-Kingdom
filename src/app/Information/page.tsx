import React from "react";
import teaData from "../data";
import "./information.css";
import Image from "next/image";

function Information() {
  return (
    <div className="information">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold uppercase title">
          information about
          <span style={{ color: "#750e21" }}> tea </span>
        :</h1>
        {teaData.map((item) => (
          <div key={item.id} className="info">
            <h1 style={{ color: "#750e21" }}>{item.title} :</h1>
            <div
              className="flex justify-between items-center flex-col xl:flex-row">
              <ol className="">
                <li>{item.content1}</li>
                <li>{item.content2}</li>
                {item.content3 && <li>{item.content3}</li>}
                {item.content4 && <li>{item.content4}</li>}
              </ol>
              <Image src={item.image} alt="" width={400} height={400} className="image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Information;
