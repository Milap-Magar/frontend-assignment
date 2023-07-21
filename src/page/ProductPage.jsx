import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const ProductPage = ({ products }) => {
    console.log(products[1].image);
  return (
    <>
      <section className="h-fit rounded-xl w-[80%] md:w-[70%] lg:w-[50%] bg-slate-300 absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-40%] md:translate-y-[-50%]">
        <div>
          {products.map((product, index) => (
            <div key={index}>
              <div className="flex float-left p-2">
                <Link to={"/"}>
                  <IoMdArrowRoundBack className="w-8 h-6" />
                </Link>
              </div>
              <div className="w-[85%] md:w-[85%] lg:w-[90%]  m-auto px-2 py-4 my-2]">
                <div className="pb-4">
                  <img
                    className="w-[60%] h-56 lg:h-72 m-auto rounded-lg mix-blend-multiply"
                    src={products[1].image}
                    alt={products[1].title}
                  />
                </div>
                <h6 className="font-semibold h-8 md:h-8 mb-2">
                  {products[1].title}
                </h6>
                <p className="font-bold py-2 text-lg">${products[1].price}</p>
                <p className="text-sm md:text-base md:py-8">
                  {products[1].description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductPage;
