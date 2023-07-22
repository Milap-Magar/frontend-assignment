import React, { Link } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import ProductPage from "../page/ProductPage";

const SearchResults = ({ results }) => {
  return (
    <>
      <section className="h-[100%] w-[100%] bg-cyan-200 pt-2 flex justify-center items-center gap-5 overflow-hidden">
        <div className="grid md:grid-cols-4">
          {results.map((result) => {
            return (
              <div
                className="w-[85%] md:w-[80%] lg:w-[90%] bg-white shadow-2xl shadow-cyan-700 m-auto px-2 py-4 text-center my-2 rounded-lg cursor-pointer"
                key={result.id}
              >
                <div className="w-[85%] md:w-[80%] lg:w-[90%] bg-white shadow-2xl shadow-cyan-700 m-auto px-2 py-4 text-center my-2 rounded-lg cursor-pointer">
                  <figure className="image-conatiner pb-4">
                    <img
                      src={result.image}
                      alt={result.id}
                      className="w-[60%] h-44 m-auto rounded-lg mix-blend-multiply"
                    />
                  </figure>
                  <h6 className="font-semibold h-24 mb-2">{result.title}</h6>
                  <p className="font-bold py-2 text-lg flex gap-5 justify-center">
                    <del>${result.price}</del> $
                    {result.price - (result.price % 15)}
                  </p>
                  <div className="flex justify-center items-end">
                      <button className="flex gap-5 rounded-lg p-1 px-4 py-2 bg-cyan-300 shadow-lg shadow-cyan-200 hover:bg-cyan-400 cursor-pointer">
                        Add to Cart <BsFillCartCheckFill className="w-6 h-6" />{" "}
                      </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SearchResults;
