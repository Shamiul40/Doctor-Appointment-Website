import React, { useEffect, useState } from "react";
import { getDoctor, removeDoctor } from "../../Utils/Utils";
import { Link } from "react-router-dom";

import DoctorChart from "../../Components/DoctorChart/DoctorChart";

const MyBooking = () => {

  const [displayDoctor, setDisplayDoctor] = useState([]);
  console.log(displayDoctor)
  useEffect(() => {
    const bookedDoctors = getDoctor();
    setDisplayDoctor(bookedDoctors);
  }, []);


  const handleDelete=(id)=>{
    removeDoctor(id);
    setDisplayDoctor(getDoctor())
  }

  

  if (displayDoctor.length === 0) {
    return <div>
       <h2 className="text-center text-4xl my-6">No doctor appointed Yet</h2>
       <p className="text-center text-sm mb-8  text-[#727272]">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
       <Link className='bg-[#176AE5] px-8 py-2 rounded-3xl text-white mx-auto ml-120' to="/">Go to Home</Link>
    </div>;
  }

  return (
    <div className="p-6">
      
      <DoctorChart doctors={displayDoctor}></DoctorChart>
      {displayDoctor.map((doctor) => (
        <div key={doctor.id} className="shadow p-4 mb-4 rounded-lg">
          <div className="flex gap-4 items-center">
            <img src={doctor.image_url} alt={doctor.name} className="w-24 h-24 rounded-lg" />
            <div className="flex-1">
              <h2 className="text-xl font-bold">{doctor.name}</h2>
              <p>{doctor.qualifications}</p>
              <p className="text-sm text-gray-500">{doctor.working_at}</p>
              <p className="text-sm text-gray-600">Fee: {doctor.consultation_fee}</p>
            </div>
            <button
              onClick={() => handleDelete(doctor.id)}
              className="bg-[#176AE5] text-white px-4 py-2 rounded-3xl"
            >
              Cancel Appointment
            </button>
          </div>
          
        </div>
        
      ))}
    </div>
  );
};

export default MyBooking;