import React from "react";
import "./style/style.css";
import { Link } from "react-router-dom";
import Button from "./Button";

const Card = ({ data }) => {
  return (
    <section className="section-h h-[100%] w-[100%] bg-cyan-200 pt-2 grid md:grid-cols-3 lg:grid-cols-4~ justify-center items-center gap-5 overflow-hidden">
      {data.map((item, index) => (
        <div key={index}>
          <div className="w-[85%] md:w-[80%] lg:w-[90%] bg-white shadow-2xl shadow-cyan-700 m-auto px-2 py-4 text-center my-2 rounded-lg cursor-pointer">
            <Link to={`products/${item.id}`}>
              <div>
                <header className="flex bg-amber-400 w-14 px-2 rounded-[60%]">
                  15% off
                </header>
                <figure className="image-conatiner pb-4">
                  <img
                    className="w-[60%] h-44 m-auto rounded-lg mix-blend-multiply"
                    src={item.image}
                    alt={item.title}
                  />
                </figure>
                <h6 className="font-semibold h-12 mb-2">{item.title}</h6>
                <p className="font-bold py-2 text-lg flex gap-5 justify-center">
                  <del>${item.price}</del> ${item.price - (item.price % 15)}
                </p>
              </div>
            </Link>
          <Button />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;
