import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useParams } from "react-router-dom";
import "../components/style/style.css";
import { Button } from "../components";

const ProductPage = ({ products }) => {
  const { id } = useParams();

  const selectedProduct = products.find(
    (product) => product.id === parseInt(id)
  );

  if (!selectedProduct) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      <section className="rounded-xl w-full h-screen gird grid-cols-1 md:grid-cols-2 bg-slate-100 absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-40%] md:translate-y-[-50%]">
        <div className="flex justify-center md:justify-start">
          <div className="flex p-2">
            <Link to="/">
              <IoMdArrowRoundBack className="w-8 h-6 absolute left-2 top-10" />
            </Link>
          </div>
          <div>
            <figure className="image-conatiner grid items-center justify-start md:ms-16">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-[230px] md:w-[400px] h-[70%] mix-blend-multiply"
              />
            </figure>
            <div >
              <article className="flex flex-col w-[60%] items-start absolute justify-center bottom-0 md:right-0 top-[70%] md:top-0 text-start">
                <span className="font-extrabold text-3xl font-mono">
                  Product:{" "}
                </span>
                <h2 className="font-mono text-lg mb-8">
                  {selectedProduct.title}
                </h2>
                <span className="font-extrabold text-3xl font-mono">
                  Product Description:{" "}
                </span>
                <p className="font-mono text-sm mb-5">
                  {selectedProduct.description}
                </p>
                <p className="font-mono text-base mb-5">
                  Price: <del className="mr-4">${selectedProduct.price}</del>$
                  {selectedProduct.price - (selectedProduct.price % 15)}
                </p>
                <Button />
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
