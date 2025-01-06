"use client"
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Button from "@/app/components/button";
import Image from "next/image";

const builder = imageUrlBuilder(client);

const urlFor = (source: SanityImageSource) => builder.image(source);

const getData = async () => {
  const res = await client.fetch(`*[_type == 'product']`);
  return res;
};

interface Product {
  _id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  price: number;
  stock: number;
  image: {
    asset: {
      _ref: string;
    };
  };
}

const ProductDetail = () => {
      const [products, setProducts] = useState<Product[]>([]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getData();
            setProducts(data);
            console.log(data)
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
    
        fetchData();
      }, []);

  const { id } = useParams();
  const product = products.find((crnt) => crnt._id === id);



  if (!product) {
    return (
      <div className="flex justify-center w-full h-screen items-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 w-full mx-auto flex flex-wrap">
           <div className="md:w-1/2 w-full bg-yellow-400 shadow-lg rounded-xl py-4">
           
           {product.image && product.image.asset ? (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={100}
                  height={100}
              className="lg:w-3/5 w-64 h-auto lg:h-auto object-cover object-center rounded mx-auto"
                />
              ) : (
                <p className="text-center text-gray-500">No image available</p>
              )}
           </div>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 my-auto ">
            <h2 className="text-sm title-font text-gray-100 tracking-widest mt-4">
              ICE CREAM
            </h2>
            <h1
            //   style={{ fontFamily: "Anybody" }}
              className="text-white md:text-6xl text-5xl title-font font-black"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-4 my-6">
              <h5 className="text-4xl font-semibold text-white">
                Rs{product.price}
              </h5>
              <del className="text-4xl font-semibold text-gray-100">
                Rs{product.price * 2}
              </del>
              <p className="text-sm font-normal rounded-full bg-red-100 px-3 py-2 text-red-500 w-fit">
                -50%
              </p>
            </div>
            <p className=" text-gray-100">
              {product.longDescription}
            </p>
            <p className="text-sm text-gray-100  font-medium my-6">
              <span className="font-bold">Stock:</span> {product.stock > 0 ? `${product.stock} items available` : "Out of stock"}
            </p>

            <div className="flex gap-10 flex-wrap">
            <Button bgColor="#F9C31E"  text="Add to Cart" />
            <Button bgColor="#F9C31E"  text="Buy Now" />
            </div>

       
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;