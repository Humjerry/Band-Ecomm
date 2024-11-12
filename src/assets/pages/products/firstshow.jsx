import React from "react";
import ChevronLeft from "../../components/chevronleft";
import ChevronRight from "../../components/chevronright";
import ProductCard from "../../components/productcard";
import {Products} from "../products/data";

function Firstshow() {
  return (
    <section className="w-[80%] mx-auto flex h-[90vh] mt-5">
      <div className=" w-2/6 order-1 bg-firstshow bg-cover bg-center h-full">
        div1
      </div>
      <div className=" order-2 ml-5 w-4/5">
        <div className="flex items-center">
          <div className="w-2/4 text-2xl font-bold">
            <h2>BESTSELLER PRODUCTS</h2>
          </div>

          <div className="flex justify-around gap-5 ">
            <ul className="flex w-2/3 gap-5 items-center">
              <li>Men</li>
              <li>Women</li>
              <li>Accessories</li>
            </ul>
            <div className="gap-2 flex">
              <ChevronRight />
              <ChevronLeft />
            </div>
          </div>
        </div>
        <hr className="opacity-[0.25]" />
        {Products && (
          <div className="flex flex-wrap p-5">
            {" "}
            {Products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
            <ProductCard />
          </div>
        )}
      </div>
    </section>
  );
}

export default Firstshow;
