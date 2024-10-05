import { customerFeedback } from "@/app/data";
import { faQuoteLeftAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import "./Testimonials.css";
function Testimonials() {
  return (
    <div className="Testimonials">
      <h1 className="title-t">Testimonials</h1>
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        {customerFeedback.map((item) => (
          <div className="cards" key={item.id}>
            <FontAwesomeIcon icon={faQuoteLeftAlt} className="icon" />
            <p>{item.content}</p>
            <h1>{item.name}</h1>
            <div className="container-img">
              <Image
                src={item.image}
                alt=""
                width={200}
                height={200}
                className="person"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
