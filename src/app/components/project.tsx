"use client";

import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font bg-gray-300">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className=" text-4xl md:text-5xl font-medium title-font mb-4 text-black">
              My Projects
            </h1>
          </div>

          <div className="flex flex-wrap md:-m-4 mt-[5rem]">
            {/* project1 */}
            <div className="box lg:w-1/3 sm:w-1/2 p-4   ">
              <div className="flex relative cursor-pointer">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={"/pic/Todo pic.PNG"}
                  width={300}
                  height={300}
                />
                <div className="px-8 py-10 relative z-10 w-full  border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 ">
                  <h1 className="headings title-font text-lg font-medium text-gray-900 mb-3">
                    Todo App
                  </h1>
                  <p className=" font-serif  leading-relaxed line-clamp-3 ">
                    This is the project I ve created a Todo App using
                    Next.js, tailwaind.
                    </p>
                    
                </div>
              </div>
            </div>

            
            {/* project 2*/}
            <div className="box lg:w-1/3 sm:w-1/2 p-4  ">
              <div className="flex relative cursor-pointer">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={"/pic/ramdan-removebg-preview.png"}
                  width={300}
                  height={300}
                />
                <div className="px-8 py-10 relative z-10 w-full  border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="headings title-font text-lg font-medium text-gray-900 mb-3">
                    Ramdan 2025 CountDown
                  </h1>
                  <p className=" font-serif  leading-relaxed line-clamp-3">
                    This is the project creeated a Ramdan CountDown
                    using Html, CSS, JavaScript
                  </p>
                  
                </div>
              </div>
            </div>

            {/* project 3 */}
            <div className="box lg:w-1/3 sm:w-1/2 p-4  ">
              <div className="flex relative cursor-pointer">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={"/pic/age-removebg-preview.png"}
                  width={300}
                  height={300}
                />
                <div className=" px-8 py-10 relative z-10 w-full  border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="headings title-font text-lg font-medium text-gray-900 mb-3">
                    Age Calculator
                  </h1>
                  <p className=" font-serif  leading-relaxed line-clamp-3 ">
                  This is the project creeated a Age Calculator
                  using Html, CSS, JavaScript
                  </p>
              
                </div>
              </div>
            </div>

            {/* project 4 */}
            <div className="box lg:w-1/3 sm:w-1/2 p-4  ">
              <div className="flex relative cursor-pointer">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={"/pic/pasward-removebg-preview.png"}
                  width={300}
                  height={300}
                />
                <div className="px-8 py-10 relative z-10 w-full  border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="headings title-font text-lg font-medium text-gray-900 mb-3">
                  Random Passward Genrator
                  </h1>
                  <p className=" font-serif  leading-relaxed line-clamp-3 ">
                  This is the project creeated a Passward Genrator
                  using Html, CSS, JavaScript
                  </p>
                  
                </div>
              </div>
            </div>

            {/* project 5 */}
            <div className="box lg:w-1/3 sm:w-1/2 p-4  ">
              <div className="flex relative cursor-pointer">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={"/pic/w-removebg-preview.png"}
                  width={300}
                  height={300}
                />
                <div className="px-8 py-10 relative z-10 w-full  border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="headings title-font text-lg font-medium text-gray-900 mb-3">
                    Word Counter
                  </h1>
              
                  <p className=" font-serif  leading-relaxed line-clamp-3">
                  
                  This is the project creeated a Word Counter
                  using Html, CSS, JavaScript
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;