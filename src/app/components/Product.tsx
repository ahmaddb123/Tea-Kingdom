import React from "react";
import { teaProducts } from "../data";
import "../TeaProducts/TeaProduct.css";
import Image from "next/image";

function Product() {
  return (
    <>
      {teaProducts.map((item) => (
        <div className="card" key={item.id}>
          <div className="info">
            <h1 className="title uppercase">{item.type}</h1>
            <Image
              src={item.image}
              alt=""
              width={400}
              height={400}
              className="img"
            />
            <p>{item.description}</p>
          </div>
          <ol className="varieties">
            <h1 className="title uppercase">varieties :</h1>
            {item.varieties.map((item, index) => (
              <div className="info-varieties" key={index}>
                <li>{item.name} :</li>
                <p>{item.description}</p>
              </div>
            ))}
            <h1 className="price">price :{item.price}$</h1>
            <button>Buy now</button>
          </ol>
        </div>
      ))}
    </>
  );
}

export default Product;
