import React from "react";
import { Link } from "react-router-dom";

const Card = ({ singleData }) => {
  const {
    id,
    name,
    qualifications,
    registration_number,
    image_url,
    status_badges,
  } = singleData;

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div>
          {status_badges.map((status, index) => (
            <span
              className="mr-10 text-[#176AE5] text-xs bg-[#176AE5]/10 px-3 py-1 rounded-2xl"
              key={index}
            >
              {status}
            </span>
          ))}
        </div>
        <h2 className="card-title text-xl">{name}</h2>
        <p className="text-sm text-[#888]">{qualifications}</p>
        <hr className="border-dashed border-gray-300 my-1" />
        <p className="text-sm text-[#888]">{registration_number}</p>
        <div className="flex flex-wrap justify-start">
          <Link to={`/doctorDetails/${id}`}>
            <button className="border border-[#176AE5] py-1 md:py-2 rounded-3xl px-14 md:px-24  text-[#176AE5] hover:bg-[#176AE5] hover:text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
