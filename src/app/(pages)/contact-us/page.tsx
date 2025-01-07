"use client";

import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css"; 

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);

  return (
    <div className="bg-[#FE6F69] min-h-screen text-white">
      <div className="max-w-screen-xl mx-auto p-8">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Contact Us
          </h2>
          <p
            className="mt-4 text-xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Get in touch with us for any inquiries or feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <div className="flex flex-col items-center">
            <div
              className="bg-white text-black p-6 rounded-xl shadow-lg w-96 mb-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <HiLocationMarker className="text-3xl mb-4 text-[#FE6F69]" />
              <h3 className="text-xl font-bold">Our Location</h3>
              <p className="mt-2">123 Ice Cream Street, Dessert Town</p>
            </div>

            <div
              className="bg-white text-black p-6 rounded-xl shadow-lg w-96 mb-6"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <HiPhone className="text-3xl mb-4 text-[#FE6F69]" />
              <h3 className="text-xl font-bold">Call Us</h3>
              <p className="mt-2">+1 234 567 890</p>
            </div>

            <div
              className="bg-white text-black p-6 rounded-xl shadow-lg w-96 mb-6"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <MdEmail className="text-3xl mb-4 text-[#FE6F69]" />
              <h3 className="text-xl font-bold">Email Us</h3>
              <p className="mt-2">contact@frozoland.com</p>
            </div>

            <div className="flex space-x-6" data-aos="fade-up" data-aos-delay="1200">
              <a href="https://facebook.com" className="text-2xl text-[#3b5998] hover:text-[#FE6F69]">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" className="text-2xl text-[#E1306C] hover:text-[#FE6F69]">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" className="text-2xl text-[#1DA1F2] hover:text-[#FE6F69]">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg w-full" data-aos="fade-up" data-aos-delay="1400">
            <h3 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-xl font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-100 text-black rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE6F69] mt-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-xl font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-100 text-black rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE6F69] mt-2"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-xl font-medium">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-100 text-black rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE6F69] mt-2"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#FDC300] to-[#FF9E02] text-white font-bold rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-12" data-aos="fade-up" data-aos-delay="1600">
          <h3 className="text-3xl font-bold text-center mb-6">Find Us Here</h3>
          <div className="w-full h-72">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.100622124182!2d144.96315731531594!3d-37.8172094420671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4538b6c051%3A0x204f8f6d41c8b6d7!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1614335590157!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
