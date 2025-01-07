"use client"
import React, { useEffect } from "react";
import { HiHome } from "react-icons/hi2";
import { GiTwoCoins } from "react-icons/gi";
import Button from "./button";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const WhyChooseUs = () => {
  const cards = [
    {
      id: 1,
      icon: <GiTwoCoins className="w-10 h-10" />,
      title: "10K",
      para: "DAILY SELL",
    },
    {
      id: 2,
      icon: <HiHome className="w-10 h-10" />,
      title: "2K",
      para: "OUTSELL",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,  
    });
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 py-12 gap-8 w-11/12 mx-auto">
        {/* Cards Section */}
        <div className="flex gap-6 justify-center flex-wrap" data-aos="fade-up">
          {cards.map((crnt) => {
            return (
              <div
                key={crnt.id}
                className="rounded-3xl bg-white flex flex-col items-center justify-center w-52 h-60"
                data-aos="zoom-in"
                data-aos-delay={crnt.id * 200} // Staggered delay for cards
              >
                <div className="text-[#FE6F69]">{crnt.icon}</div>
                <p className="text-[#FE6F69] font-bold">{crnt.title}</p>
                <p className="text-[#FE6F69]">{crnt.para}</p>
              </div>
            );
          })}
        </div>

        {/* Text Section */}
        <div className="text-white" data-aos="fade-up" data-aos-delay="400">
          <h5 className="text-white border-b-2 mb-4 w-fit border-white">
            Why Choose Us
          </h5>
          <h2 className="text-white font-black md:text-6xl text-5xl my-6">
            FAST AND BEST QUALITY ICECREAM
          </h2>
          <Button bgColor="#F9C31E" text="Explore More" data-aos="fade-up" data-aos-delay="600" />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
