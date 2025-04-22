import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const CardContainer = ({ Data }) => {
  const [displayDoctor, setDisplayDoctor] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayDoctor(Data);
    } else {
      setDisplayDoctor(Data.slice(0, 6));
    }
  }, [Data, showAll]);

  return (
    <div className="my-16">
      <div>
        <h1 className="text-center text-3xl font-bold ">Our Best Doctors</h1>
        <p className="text-center my-3 text-[#727272] text-sm">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a <br />{" "}
          routine checkup or urgent consultation, book appointments in minutes
          and receive quality care you can trust.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 my-8">
        {displayDoctor.map((singleData) => (
          <Card key={singleData.id} singleData={singleData}></Card>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="btn bg-[#176AE5] text-white  rounded-4xl"
        >
          {showAll ? "View Less Doctors" : "View All Doctors"}
        </button>
      </div>
    </div>
  );
};

export default CardContainer;
