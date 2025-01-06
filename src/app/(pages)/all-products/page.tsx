"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
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
  category: string;
  price: number;
  stock: number;
  image: {
    asset: {
      _ref: string;
    };
  };
}

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#FE6F69] min-h-screen p-8 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {loading ? (
          // Daisy UI Skeleton Loader for entire card
          Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="relative w-80 bg-[#FE6F69] p-6 rounded-2xl animate-pulse"
            >
              {/* Skeleton Image */}
              <div className="skeleton w-64 h-64 bg-[#FE6F69] rounded-2xl mb-4"></div>

              {/* Skeleton Text */}
              <div className="skeleton w-32 h-6 bg-[#FE6F69] mb-2"></div>
              <div className="skeleton w-48 h-4 bg-[#FE6F69] mb-2"></div>
              <div className="skeleton w-24 h-6 bg-[#FE6F69] mb-2"></div>

              {/* Skeleton Cart Icon */}
              <div className="absolute bottom-6 right-6 bg-[#FE6F69] p-2 rounded-full animate-pulse"></div>
            </div>
          ))
        ) : (
          // Display actual product data
          products.map((product: Product) => (
            <Link key={product._id} href={`/product-detail/${product._id}`}>
              <div className="relative w-80 bg-[#FE6F69] p-6 rounded-2xl">
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
                    <p className="text-center text-gray-500">No image available</p>
                  )}
                </div>

                <p className="text-white font-bold text-lg mt-6">{product.name}</p>
                <p className="text-gray-100 text-sm">{product.shortDescription}</p>
                <p className="text-white font-semibold text-lg mt-2">
                  Rs. {product.price}/-
                </p>
                <div className="absolute bottom-6 right-6 bg-yellow-400 p-2 rounded-full">
                  🛒
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default AllProducts;
