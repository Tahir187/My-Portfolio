import React from "react";
import "./services.css";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import nextjs from "../../assets/next.png";
import nodejs from "../../assets/node-js.png";
import typescript from "../../assets/typescript.png";
import mongoDB from "../../assets/mongodb.png";
import express from "../../assets/express.png";
const Services = () => {
  const images = [
    {
      id: 1,
      image: react,
      alt: "react-image",
    },
    {
      id: 2,
      image: redux,
      alt: "redux-image",
    },
    {
      id: 3,
      image: nextjs,
      alt: "nextJS-image",
    },
    {
      id: 4,
      image: nodejs,
      alt: "nodeJS-image",
    },
    {
      id: 5,
      image: typescript,
      alt: "typescript-image",
    },
    {
      id: 6,
      image: express,
      alt: "expressJS-image",
    },
    {
      id: 7,
      image: mongoDB,
      alt: "mongoDB-image",
    },
  ];

  return (
    <>
      <div className="service__container" id="services">
        <h2 className="service__heading">Services</h2>
        <div className="service__sub-container">
          <div className="items__container">
            {images.map((item, i) => (
              <div key={i} className="item">
                <img src={item.image} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
