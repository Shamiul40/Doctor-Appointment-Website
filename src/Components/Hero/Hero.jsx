import React, { useState } from "react";
import heroImg1 from "../../assets/banner-img-1.png";

const Hero = ({ handleSubmit }) => {
  const [searcText, setSearchText] = useState("");
  const [searched, setSearched] = useState(false)

  return (
    <div className=" shadow-[0_0_30px_5px_rgba(0,0,0,0.1)]  my-12 p-8 backdrop-blur-sm rounded-3xl border-4 border-white outline-3 outline-offset-1 outline-white  ">
      <div>
        <h1 className="text-center text-3xl font-bold">
          Dependable Care, Backed by Trusted <br /> Professionals.
        </h1>
        <p className="text-center text-sm my-4  text-[#727272]">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a <br />{" "}
          routine checkup or urgent consultation, book appointments in minutes
          and receive quality care you can trust.
        </p>
        <form
          onSubmit={(e) => {
            handleSubmit(e, searcText);
            setSearchText("");
            setSearched(true)

          }}
          className="flex justify-center items-center gap-4 mx-auto"
        >
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searcText}
            placeholder="Search a Doctor"
            type="text"
            className="w-3/7 focus:outline-none shadow-lg rounded-3xl h-9 text-xs px-4 border border-gray-300 bg-white "
          />
          <button className=" px-4 md:px-6 py-2 text-sm md:text-sm rounded-2xl md:rounded-4xl border border-[#176AE5]  text-[#176AE5] hover:bg-[#176AE5] hover:text-white">
            Search
          </button>
        </form>
      </div>

     {
      !searched &&  <div  className="my-6 flex justify-center items-center flex-col md:flex-row gap-6">
      <img className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-130 xl:max-w-xl h-auto" src={heroImg1} alt="" />
      <img className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-130 xl:max-w-xl h-auto hidden md:block " src={heroImg1} alt="" />
    </div>
     }
    </div>
  );
};

export default Hero;
