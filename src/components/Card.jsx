import React from "react";
import "./style/style.css";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <section className="section-h h-[100%] w-[100%] bg-cyan-200 pt-2 grid md:grid-cols-3 lg:grid-cols-4~ justify-center items-center gap-5 overflow-hidden">
      {data.map((item, index) => (
        <div key={index}>
          <Link to={`products/${item.id}`}>
            <div className="w-[85%] md:w-[80%] lg:w-[90%] bg-white shadow-2xl shadow-cyan-700 m-auto px-2 py-4 text-center my-2 rounded-lg cursor-pointer">
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
              <div className="flex justify-center items-end">
                <button className="flex gap-5 rounded-lg p-1 px-4 py-2 bg-cyan-300 shadow-lg shadow-cyan-200 hover:bg-cyan-400 cursor-pointer">
                  Add to Cart <BsFillCartCheckFill className="w-6 h-6" />{" "}
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Card;
