import React from "react";

const SearchResults = ({ results }) => {
  return (
    <>
      <div>
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
                <h6 className="font-semibold h-12 mb-2">{result.title}</h6>
                <p className="font-bold py-2 text-lg flex gap-5 justify-center">
                  <del>${result.price}</del> $
                  {result.price - (result.price % 15)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchResults;
