import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Button = () => {
  const notify = () => toast(`Added To The Cart 🛒`);
  return (
    <div className="flex justify-center items-end">
      <button
        className="flex gap-5 rounded-lg p-1 px-4 py-2 bg-cyan-300 shadow-lg shadow-cyan-200 hover:bg-cyan-400 cursor-pointer"
        onClick={notify}
      >
        <ToastContainer />
        Add to Cart <BsFillCartCheckFill className="w-6 h-6" />{" "}
      </button>
    </div>
  );
};

export default Button;
