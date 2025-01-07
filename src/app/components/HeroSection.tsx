"use client"
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Image from "next/image";
import Button from "./button";

const HeroSection = () => {
  const icecream = [
    {
      id: 1,
      img: "icecream2.svg",
      title: "50% Off",
      flavour: "Sweet Corn",
    },
    {
      id: 2,
      img: "icecream3.svg",
      title: "30% Off",
      flavour: "Chip Corn",
    },
    {
      id: 3,
      img: "icecream4.svg",
      title: "70% Off",
      flavour: "Ice Corn",
    },
  ];

  const [active, setActive] = useState("icecream2.svg");

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false,     // Animation should happen only once
    });
  }, []);

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:h-screen md:h-full mx-8">
        {/* Left Column */}
        <div className="sm:mx-auto md:mx-0 lg:col-span-1 md:col-span-2 lg:my-auto md:my-12 my-12">
          <h5 className="text-white w-fit border-b-2 border-white" data-aos="fade-up">Frosty Delights</h5>
          <h1 className="text-white font-black md:text-6xl text-5xl w-fit mt-3" data-aos="fade-up" data-aos-delay="200">CORN</h1>
          <h2 className="text-white font-bold md:text-6xl text-5xl w-fit mb-3" data-aos="fade-up" data-aos-delay="400">ICE CREAM</h2>
          <Button 
            bgColor="#EB398C" 
            text="Order Now" 
          />
        </div>

        {/* Image Section */}
        <div className="md:w-full sm:mx-auto sm:w-60 bg-gradient-to-t from-[#DD3128] to-[#E53166] rounded-b-3xl rounded-t-full my-6 shadow-lg">
          <Image
            data-aos="fade-up"
            key={active} // Adding key ensures the image will animate when it changes
            src={`/${active}`}
            alt="icecream"
            width={100}
            height={100}
            className="w-fit h-full mx-auto"
          />
        </div>

        {/* Ice Cream Selection Section */}
        <div className="my-auto">
          {icecream.map((crnt) => {
            return (
              <div
                key={crnt.id}
                onClick={() => setActive(crnt.img)}
                className="cursor-pointer lg:me-0 md:me-0 mx-auto my-12 relative flex justify-end items-center gap-3 h-40 w-60 bg-gradient-to-t from-[#DD3128] to-[#E53166] rounded-tl-full rounded-bl-full rounded-br-lg rounded-tr-l my-12"
                data-aos="zoom-in" // Zoom-in animation for the selection boxes
                data-aos-delay={`${crnt.id * 100}`} // Add a slight delay for each ice cream selection
              >
                <Image
                  data-aos="fade-left"
                  src={`/${crnt.img}`}
                  alt="icecream"
                  width={100}
                  height={100}
                  className="w-fit h-56 absolute bottom-1 left-2"
                />
                <div>
                  <h5 className="text-white font-bold">{crnt.title}</h5>
                  <p className="text-white font-bold">{crnt.flavour}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
