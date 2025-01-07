"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import HeroSection from "./components/HeroSection";
import Image from "next/image";
import WhyChooseUs from "./components/WhyChooseUs";
import Button from "./components/button";
import Link from "next/link";

const builder = imageUrlBuilder(client);

const urlFor = (source: SanityImageSource) => builder.image(source);

const getData = async () => {
  const res = await client.fetch(`*[_type == 'product']`);
  return res;
};

interface Product {
  _id: string;
  name: string;
  isFeatured: boolean;
  shortDescription: string;
  category: string;
  price: number;
  stock: number;
  image: {
    asset: {
      _ref: string;
    };
  };
}

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const filteredProduct = products
    .filter((crnt) => {
      return crnt.isFeatured == true;
    })
    .slice(0, 2);

  return (
    <>
      <HeroSection />

      {/* section2  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-20 w-11/12 mx-auto">
        <div data-aos="zoom-in" className="flex  items-center ">
          <div className="relative">
            <div className="absolute md:w-96 md:h-96 w-64 h-64  bg-[#EB398C] rounded-full opacity-60 translate-x-[24px] translate-y-[24px]">
              <Image
                src="/icecup1.svg"
                alt="icecup1"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            <div className="absolute md:w-96 md:h-96 w-64 h-64  bg-[#EB398C] rounded-full opacity-80 translate-x-[12px] translate-y-[12px]">
              <Image
                src="/icecup1.svg"
                alt="icecup1"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            {/* dark  */}
            <div className="md:w-96 md:h-96 w-64 h-64  bg-[#EB398C] rounded-full"></div>
          </div>
        </div>

        <div className="my-auto" data-aos="fade-right">
          <h5 className="text-white w-fit border-b-2 border-white">
            New Cup Icecream
          </h5>
          <h2 className="md:text-6xl text-5xl my-3 font-black text-white">
            Enjoy Your <br />
            Every Bite
          </h2>
          <p className="text-white my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button bgColor="#EB398C" text="Explore More" />
        </div>
      </div>

      {/* section 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full py-20 w-11/12 mx-auto">
        {/* Left Section */}
        <div className="my-auto ms-6" data-aos="fade-right">
          <h5 className="text-white w-fit border-b-2 border-white">
            Our Top Selling
          </h5>
          <h2
            className="md:text-6xl text-5xl my-3 font-black text-white"
            data-aos="fade-up"
          >
            POPULAR <br /> ICE CREAM
          </h2>
          <p
            className="text-white my-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            bgColor="#F9C31E"
            text="Explore More"
            data-aos="fade-up"
            data-aos-delay="400"
          />
        </div>

        {/* Right Section - Products */}
        <div className="flex flex-wrap" data-aos="fade-left">
          {filteredProduct.map((product) => (
            <Link key={product._id} href={`/product-detail/${product._id}`}>
              <div
                className="relative w-80 bg-[#FE6F69] p-6 rounded-2xl mx-auto my-auto"
                data-aos="zoom-in" // Animation for product cards
                data-aos-delay="500" // Delay to stagger animations for each product
              >
                {/* Layered Background Effect */}
                <div className="absolute top-6 left-6 w-64 h-64 bg-[#F9C31E] rounded-2xl opacity-60"></div>
                <div className="absolute top-3 left-3 w-64 h-64 bg-[#F9C31E] rounded-2xl opacity-80"></div>
                <div className="relative z-10 w-64 h-64 bg-[#F9C31E] rounded-2xl flex justify-center items-center">
                  {product.image && product.image.asset ? (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      width={100}
                      height={100}
                      className="w-auto h-56 rounded-2xl"
                    />
                  ) : (
                    <p className="text-center text-gray-500">
                      No image available
                    </p>
                  )}
                </div>

                {/* Product Details */}
                <p className="text-white font-bold text-lg mt-6">
                  {product.name}
                </p>
                <p className="text-gray-100 text-sm">
                  {product.shortDescription}
                </p>
                <p className="text-white font-semibold text-lg mt-2">
                  Rs. {product.price}/-
                </p>

                {/* Cart Icon */}
                <div className="absolute bottom-6 right-6 bg-yellow-400 p-2 rounded-full">
                  🛒
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* section4 */}
      <div className="bg-gradient-to-r from-[#FDC300] to-[#FF9E02]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto">
        {/* Left Section */}
        <div className="my-auto" data-aos="fade-right">
          <h5 className="text-white text-2xl border-b-2 w-fit border-white" data-aos="fade-up">
            On Sunday Special
          </h5>
          <h2 className="md:text-6xl text-5xl font-black text-white my-6" data-aos="fade-up" data-aos-delay="200">
            BUY 2 GET 1 <br /> FREE
          </h2>
          <button className="text-white text-3xl outline-none border-b-2 border-white" data-aos="fade-up" data-aos-delay="400">
            GET NOW
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center items-center" data-aos="fade-left">
          <Image
            src="/icecup2.svg"
            alt="icecup1"
            width={100}
            height={100}
            className="w-96 h-auto my-auto"
          />
        </div>
      </div>
    </div>

      <WhyChooseUs />
    </>
  );
}
