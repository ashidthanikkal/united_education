import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { FiMail } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { IoMdArrowRoundForward } from "react-icons/io";

// const inter = Inter({ subsets: ["latin"] });

import { Manrope, Plus_Jakarta_Sans } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: false,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plusJakartaSans",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${plusJakartaSans.variable}`}
    >
      <body>
        <nav className="bg-white flex justify-center w-full  border-gray-200 px-10 h-[60px] md:h-[65px]  shadow">
          <div className="container flex justify-between items-center  w-full pt-3 ">

            <div className="relative h-[28px] w-[32px]">
              <Image
                src="/united-education-logo 1.png"
                alt="united-education-logo 1"
                fill
              />{" "}
            </div>

            <div>
              <div className="hidden   lg:inline">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li>
                    <Link href="/">
                      <span className="align-baseline flex justify-center gap-2 py-2 pr-4 pl-3 text-gray-700  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                        <FiMail className="mt-1 text-red-600" />
                        <div className="flex-col">
                          <h1 className="block text-red-600">Email</h1>
                          <span className="font-light">
                            info@united-education.com
                          </span>
                        </div>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className="align-baseline flex justify-center gap-2 py-2 pr-4 pl-3 text-gray-700  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                        <IoCallOutline className="mt-1 text-red-600" />
                        <div className="flex-col">
                          <h1 className="block text-red-600">call Us</h1>
                          <span className="font-light">+964 7517627727</span>
                        </div>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className="align-baseline flex justify-center gap-2 py-2 pr-4 pl-3 text-gray-700  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                        <GrLocation className="mt-1 text-red-600" />
                        <div className="flex-col">
                          <h1 className="block text-red-600">Location</h1>
                          <span className="font-light">
                            Erbil,Empire Business Tower,Tower 4,Floor 15, Office
                            NO 1
                          </span>
                        </div>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  className="lg:hidden md:inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Hamburger icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    className="h-6 w-6"
                  >
                    <path
                      d="M3 5h18M3 12h18M3 19h18"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            
            
          </div>
        </nav>

        <div className="flex justify-center">
          <div className="max-w-[1536px]">{children}</div>
        </div>

        {/* footer */}

        <footer className=" w-full bg-[#022837]">
          <div className="parent container justify-evenly flex flex-col w-full lg:flex-row  md:text-left  text-center  mx-auto p-10 ">
            {/* child 1 */}
            <div className="fchild_1 flex flex-col lg:flex-col md:flex-row  md:justify-between w-full lg:w-72  items-center md:items-start   text-white ">
              <div className="">
                <Image
                  src="/sticky-logo 1.png"
                  alt="united-education-logo 1"
                  width={110}
                  height={60}
                  className="p-3"
                />{" "}
              </div>
              <div className="w-[267px] lg:mt-[30px]">
                <h1 className="text-[18px] font-normal ">
                  Sign up for releases & product updates...
                </h1>
                <form className="w-full max-w-xs">
                  <div className="flex items-center border-b border-[#CFCFCF] py-2">
                    <input
                      className="appearance-none  bg-transparent border-none w-full text-[#CFCFCF] mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="Enter email Address"
                      aria-label="Full name"
                    />
                    <button
                      className="flex-shrink-0 border-transparent border-4 text-[#CFCFCF] hover:text-[#CFCFCF]-800 text-sm py-1 px-2 rounded"
                      type="button"
                    >
                      <IoMdArrowRoundForward />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="fchild_2 mt-5 flex flex-col md:flex-row flex-wrap lg:gap-[63px] gap-0  justify-center text-center md:text-left md:justify-around">
              <div className="about">
                <h1 className="text-white text-[12px] lg:text-[24px] lg:mt-5 mt-3">About</h1>
                <ul className="text-[#CFCFCF] lg:text-lg  text-sm lg:mt-5 mt-3">
                  <li className=" md:text-[12px] md:leading-[12px] lg:text-[18px] lg:leading-[18px] lg:mt-5 mt-3">Our Story</li>
                  <li  className=" md:text-[12px] md:leading-[12px] lg:text-[18px] lg:leading-[18px] lg:mt-5 mt-3">Treatments Safer</li>
                  <li className=" md:text-[12px] md:leading-[12px] lg:text-[18px] lg:leading-[18px] lg:mt-5 mt-3">Journal</li>
                  <li className=" md:text-[12px] md:leading-[12px] lg:text-[18px] lg:leading-[18px] lg:mt-5 mt-3">Candles</li>
                </ul>
              </div>{" "}
              <div className="Company">
                <h1 className="text-white text-[12px] lg:text-[24px] lg:mt-5 mt-3">Company</h1>
                <ul className="text-[#CFCFCF] md:block hidden lg:text-lg text-sm lg:mt-5 mt-3">
                  <li className=" md:text-[12px] md:leading-[12px] lg:text-[18px] lg:leading-[18px] lg:mt-5 mt-3">About</li>
                  <li className=" md:text-[12px] md:leading-[12px] lg:text-[18px] lg:leading-[18px] lg:mt-5 mt-3">Contact</li>
                  <li className=" md:text-[12px] md:leading-[12px] lg:text-[18px] lg:leading-[18px] lg:mt-5 mt-3">Products</li>
                  <li className=" md:text-[12px] md:leading-[12px] lg:text-[18px] lg:leading-[18px] lg:mt-5 mt-3">Privacy</li>
                </ul>
              </div>{" "}
              <div className="Help">
                <h1 className="text-white text-[12px] lg:text-[24px] lg:mt-5 mt-3">Help</h1>
                <ul className="text-[#CFCFCF] md:block hidden lg:text-lg text-sm lg:mt-5 mt-3">
                  <li className=" md:text-[12px] md:leading-[12px] lg:text-[18px] lg:leading-[18px] lg:mt-5 mt-3">FAQs</li>
                  <li className=" md:text-[12px] md:leading-[12px] lg:text-[18px] lg:leading-[18px] lg:mt-5 mt-3">Terms of service</li>
                  <li className=" md:text-[12px] md:leading-[12px] lg:text-[18px] lg:leading-[18px] lg:mt-5 mt-3">Cookies</li>
                  <li className=" md:text-[12px] md:leading-[12px] lg:text-[18px] lg:leading-[18px] lg:mt-5 mt-3">Privacy</li>
                </ul>
              </div>{" "}
              <div className="SocialMedia ">
                <h1 className="text-white text-[12px] lg:text-[24px] lg:mt-5 mt-3">SocialMedia</h1>
                <ul className="text-[#CFCFCF] md:block hidden lg:text-lg text-sm lg:mt-5 mt-3">
                  <li className=" md:text-[12px] md:leading-[12px] lg:text-[18px] lg:leading-[18px] lg:mt-5 mt-3">Facebook</li>
                  <li className=" md:text-[12px] md:leading-[12px] lg:text-[18px] lg:leading-[18px] lg:mt-5 mt-3">Instagram</li>
                  <li className=" md:text-[12px] md:leading-[12px] lg:text-[18px] lg:leading-[18px] lg:mt-5 mt-3">Linkedin</li>
                </ul>
              </div>{" "}
            </div>
          </div>
          <div className="mx-10">
            <hr className="text-[#4D6873]" />
            <p className="py-3 text-center text-[10px] leading-[8px] md:leading-[12px] md:text-[12px] lg:leading-[28.8px] lg:text-[18px]  text-[#CFCFCF]">
              © 2024 UNITED EDUCATION. ALL RIGHT RESERVED.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
