/** @format */

import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaStar,
} from "react-icons/fa";
const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <footer className="border-t p-4 bg-primary">
      <section>
        <div className="bg-black bgfont2 p-5">
          <div>
            <div className="flex flex-wrap md:flex-nowrap justify-around">
              <div className="mt-10 lg:mt-20 w-full md:w-1/2 lg:w-1/4">
                <div>
                  <Image
                    src="/images/Website-Ayntech.webp"
                    alt="AynMedia_Logo"
                    width={200}
                    height={80}
                  />
                </div>
                <div className="mt-5 lg:mt-10">
                  <p className="text-white text-justify">
                    The Ayn Technologies is an integrated branding and digital
                    marketing agency based in Chennai, India. With a team of
                    over 40+, we are an award-winning full-stack digital
                    marketing agency offering creative and innovative digital
                    and brand solutions for brands looking to grow their
                    businesses.
                  </p>
                </div>
                <div className="mt-5 lg:mt-10 flex gap-5">
                  <a href="https://www.facebook.com/AynMediaDigital">
                    <FaFacebookF className="text-gray-400" />
                  </a>
                  <a href="https://www.instagram.com/ayn_media_2.0/">
                    <FaInstagram className="text-gray-400" />
                  </a>
                  <a href="https://www.linkedin.com/company/ayn-media/mycompany/">
                    <FaLinkedin className="text-gray-400" />
                  </a>
                  <a href="https://www.youtube.com/@AYN_Media">
                    <FaYoutube className="text-gray-400" />
                  </a>
                  <a href="https://x.com/AynMediaDigital">
                    <FaTwitter className="text-gray-400" />
                  </a>
                </div>
                <div className="flex gap-3 mt-5 lg:mt-10 w-full">
                  <Image
                    src="/images/Googole_partner.webp"
                    alt="Google Partner"
                    className="rounded-sm"
                    width={150}
                    height={80}
                  />
                  <Image
                    src="/images/Meta-partner.webp"
                    alt="Meta Partner"
                    className="rounded-sm"
                    width={150}
                    height={40}
                  />
                </div>
                <div className="flex flex-wrap items-center mt-5 lg:mt-10 gap-2">
                  <Image
                    src="/images/Goggle_Icon.webp"
                    alt="Google Icon"
                    className="cursor-pointer"
                    width={40}
                    height={40}
                  />
                  <div className="text-white">
                    Chennai&apos;s Leading Digital Agency
                  </div>
                  <div>|</div>
                  <div className="flex gap-1">
                    <div className="text-yellow-300">30+</div>
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>
              </div>
              <div className="text-white pt-5 lg:pt-20 w-full md:w-1/4 lg:w-40">
                <div className="font-bold text-xl sm:text-lg">Information</div>
                <ul className="text-gray-200 space-y-3 mt-5">
                  <li>Brand Solutions</li>
                  <li>Digital Marketing Solutions</li>
                  <li>Who We Are</li>
                  <li>Sample Work</li>
                  <li>Our Clients</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="text-white pt-5 lg:pt-20 w-full md:w-1/4">
                <div className="font-bold text-xl">Contact Us</div>
                <div className="text-gray-200 mt-5">
                  Ayn Technologies Pvt. Ltd.,
                  <br />
                  No.4, 2nd Floor, Vembuli Amman Koil Street,
                  <br />
                  Ullagaram, Madipakkam, Chennai- 600091.
                </div>
                <div className="text-gray-200 mt-3">+91-89259 22232</div>
                <div className="text-gray-200 mt-3">info@ayntech.in</div>
              </div>
              <div className="bg-gray-950 p-5 lg:p-10 w-full md:w-1/2 lg:w-1/4 mt-10 lg:mt-0">
                <div className="flex justify-center items-center mt-5 lg:mt-20">
                  <div>
                    <div className="text-white text-lg font-medium text-center">
                      Ready to Grow Your <br /> Business with the Best?
                    </div>
                  </div>
                </div>
                <a href="contactus.html">
                  <div className="flex justify-center items-center mt-10">
                    <div className="cursor-pointer bg-white w-56 p-5 lg:p-20 rounded-full hover:bg-yellow-400 duration-700 ease-in-out">
                      <div className="text-center">Contact Us Today</div>
                    </div>
                  </div>
                </a>
                <div className="text-gray-500 mt-5 lg:mt-16 text-justify">
                  Partner with AYN Media, the{" "}
                  <span className="text-white font-bold">
                    Digital Marketing Company in Chennai
                  </span>{" "}
                  that puts your business first. Whether you’re looking to boost
                  your online visibility or drive more traffic to your website,
                  we’ve got you covered.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="text-center py-4 text-white bg-black">
          &copy; {year} Ayn Technologies Pvt. Ltd. All rights reserved.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
