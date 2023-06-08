import React from "react";
import { ArrowRight, PriceIcon } from "../assets";
import { Header, ProductCard, Footer } from "../components";

const ProductResult = () => {
  return (
    <div>
      <Header />
      <div className="w-[100vw]">
        <ul className="flex justify-center gap-3 font-medium text-[0.9rem] my-3">
          <li className="py-1 px-3 rounded-2xl bg-[#F3F9FB] cursor-pointer hover:bg-[#E4F8FF]">
            Premium Fruits
          </li>
          <li className="py-1 px-3 rounded-2xl bg-[#F3F9FB] cursor-pointer hover:bg-[#E4F8FF]">
            Home & Kitchen
          </li>
          <li className="py-1 px-3 rounded-2xl bg-[#F3F9FB] cursor-pointer hover:bg-[#E4F8FF]">
            Electronics
          </li>
          <li className="py-1 px-3 rounded-2xl bg-[#F3F9FB] cursor-pointer hover:bg-[#E4F8FF]">
            Fashion
          </li>
          <li className="py-1 px-3 rounded-2xl bg-[#F3F9FB] cursor-pointer hover:bg-[#E4F8FF]">
            Beauty
          </li>
          <li className="py-1 px-3 rounded-2xl bg-[#F3F9FB] cursor-pointer hover:bg-[#E4F8FF]">
            Sports
          </li>
          <li className="py-1 px-3 rounded-2xl bg-[#F3F9FB] cursor-pointer">
            Toys & Luggage
          </li>
        </ul>
        <div className="headingContent mx-[5%]">
          <p className="text-[#666666] font-semibold text-[1.5rem]">Results</p>
          <div className="w-full h-[2px] bg-primaryColor mt-2"></div>
        </div>
        <div className="resultContainer mx-[5%] my-7 flex gap-8">
          <div className="FilterContainer px-4 py-6 min-w-[270px] bg-[#F5F5F5] rounded-2xl text-[#666666]  border-[#EDEDED] border-2">
            <div>
              <h2 className="text-[1.3rem] font-semibold">Sort</h2>
              <ul className="flex flex-col gap-1 ml-2 mt-2">
                <li className="flex items-center justify-start gap-1 cursor-pointer hover:text-primaryColor">
                  <ArrowRight /> Polpular
                </li>
                <li className="flex items-center justify-start gap-1 cursor-pointer hover:text-primaryColor">
                  <ArrowRight />
                  Low to high
                </li>
                <li className="flex items-center justify-start gap-1 cursor-pointer hover:text-primaryColor">
                  <ArrowRight />
                  High to low
                </li>
                <li className="flex items-center justify-start gap-1 cursor-pointer hover:text-primaryColor">
                  <ArrowRight />
                  Latest
                </li>
              </ul>
            </div>
            <div className="my-6">
              <h2 className="text-[1.3rem] font-semibold">Filter</h2>
              <div className="my-4">
                <h3 className="font-semibold">Price</h3>
                <div>
                  <PriceIcon />
                  <div className="flex justify-between">
                    <p>1000</p>
                    <p>100000</p>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <h3 className="font-semibold">Customer ratings</h3>
                <div className="flex flex-col gap-1 ml-2 mt-2">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-primaryColor">
                    <input type="checkbox" id="rating1"></input>
                    <label for="rating1" className="cursor-pointer">
                      4★ & above
                    </label>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer hover:text-primaryColor">
                    <input type="checkbox" id="rating2"></input>
                    <label for="rating2" className="cursor-pointer">
                      3★ & above
                    </label>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer hover:text-primaryColor">
                    <input type="checkbox" id="rating3"></input>
                    <label for="rating3" className="cursor-pointer">
                      2★ & above
                    </label>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer hover:text-primaryColor">
                    <input type="checkbox" id="rating4"></input>
                    <label for="rating4" className="cursor-pointer">
                      1★ & above
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="productContainer flex flex-wrap gap-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductResult;