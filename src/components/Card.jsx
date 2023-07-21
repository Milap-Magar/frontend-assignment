import React from "react";
import "./style.css";

const Card = ({ data }) => {
  console.log(data);
  return (
    <>
      <section className="section-h h-[100%] w-[100%] bg-cyan-200 pt-2 grid md:grid-cols-3 lg:grid-cols-5 justify-center items-center gap-5 overflow-hidden">
        {data.map((item, index) => (
           <div className='w-[85%] md:w-[85%] lg:w-[90%] bg-white shadow-2xl shadow-cyan-700 m-auto px-2 py-4 text-center my-2 rounded-lg cursor-pointer' key={index}>
            <figure className="image-conatiner pb-4">
                <img className='w-[60%] h-44 m-auto rounded-lg mix-blend-multiply' src={item.image} alt={item.title}  />
            </figure>
            <h6 className='font-semibold h-20 mb-2'>{item.title}</h6>
            <p className='font-bold py-2 text-lg'>${item.price}</p>
        </div>
        ))}
      </section>
     
    </>
  );
};

export default Card;
