import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addDoctor } from "../../Utils/Utils";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const DoctorDetails = () => {
  const Data = useLoaderData();
  const navigate = useNavigate();

  const { id } = useParams();

  const singleDoctor = Data.find((doctor) => doctor.id === parseInt(id));

  const {
    name,
    qualifications,
    registration_number,
    image_url,
    working_at,
    availability,
    consultation_fee,
  } = singleDoctor;


  const handleDoctorAppoinment=()=>{
    addDoctor(singleDoctor)

  
  navigate("/myBookings");
  }

  return (
    <div>
      <div className="p-4 shadow-lg my-12 rounded-lg text-center">
        <h1 className="text-3xl font-bold my-3">Doctor’s Profile Details</h1>
        <p className=" text-sm   text-[#727272]">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>
      <div className=" card card-side bg-base-100 shadow-lg p-4">
        <figure>
          <img className="rounded-lg" src={image_url} alt="Image" />
        </figure>
        <div className="card-body text-xl">
          <h2 className="card-title">{name}</h2>
          <p className="text-sm text-[#888]">{qualifications}</p>
          <p className="text-sm text-[#888] ">
            Working at :{" "}
            <span className="font-bold text-gray-600">{working_at}</span>
          </p>
          <hr className="border-dashed border-gray-300" />
          <p className="text-sm text-[#888]">{registration_number}</p>
          <hr className="border-dashed border-gray-300 " />
          <div>
            <span className="text-sm mr-2 text-[#888]">Availability :</span>
            {availability.map((avail, index) => (
              <span
                className="mr-2 text-[#176AE5] text-xs bg-[#176AE5]/10 px-3 py-1 rounded-2xl"
                key={index}
              >
                {" "}
                {avail}
              </span>
            ))}
          </div>
          <p className="text-sm">
            Consultation Fee :{" "}
            <span className="text-[#176AE5]">{consultation_fee}</span>
          </p>
        </div>
      </div>
      <div className="py-10 px-4 bg-white rounded-lg my-12 text-center shadow-lg">
        <h1 className="text-3xl my-10">Book an Appointment</h1>
        <hr className="border-dashed border-gray-300 my-2" />
        <p>Avaiability</p>
        <hr className="border-dashed border-gray-300 my-2" />
        <button  onClick={handleDoctorAppoinment} className="bg-[#176AE5] w-full rounded-4xl shadow-sm p-2 text-white my-4">Book Appointment Now</button>
      </div>
      
    </div>
  );
};

export default DoctorDetails;
