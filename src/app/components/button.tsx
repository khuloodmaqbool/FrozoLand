"use client"
import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
interface PropType {
    text:string;
    bgColor: string;
}

const Button = ({text,bgColor}:PropType) => {
   useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration
        once: true,     // Animation should happen only once
      });
    }, []);
  return (
   <>

 <Link href="/all-products" >
 <div  data-aos="fade-up" 
            data-aos-delay="600"  className="flex  items-center ">
          <div className="relative">
            <div className={`absolute w-36 h-14 rounded-xl bg-[${bgColor}] opacity-60 translate-x-[24px]`} >
          
            </div>
            <div className={`absolute font-black text-white flex items-center ps-4  w-36 h-14 rounded-xl bg-[${bgColor}]  opacity-80 translate-x-[12px] `}>
             {text}
            </div>
            {/* dark  */}
            <div className={`w-36 h-14 rounded-xl bg-[${bgColor}]`}  ></div>
          </div>
        </div>
 </Link>
   </>
  )
}

export default Button
