import { useState, useEffect } from "react";
import CountUp from "react-countup";
import img1 from "../../assets/success-doctor.png";
import img2 from "../../assets/success-review.png";
import img3 from "../../assets/success-patients.png";
import img4 from "../../assets/success-staffs.png";

const SimpleMedicalStats = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShouldAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold mb-4">
        We Provide Best Medical Services
      </h1>
      <p className="text-gray-600 mb-8">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>

      <div className="w-20 h-1 bg-gray-300 mx-auto mb-10"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white shadow-2xl p-8">
          <img className="mx-auto py-3" src={img1} alt="" />
          <div className="text-4xl font-bold text-blue-500 mb-2">
            <CountUp
              end={199}
              duration={5}
              suffix=" +"
              delay={0.5}
              start={shouldAnimate ? undefined : 0}
            />
          </div>
          <p className="text-gray-600">Total Doctors</p>
        </div>

        <div className="bg-white shadow-2xl p-8">
          <img className="mx-auto py-3" src={img2} alt="" />
          <div className="text-4xl font-bold text-blue-500 mb-2">
            <CountUp
              end={467}
              duration={5}
              suffix=" +"
              delay={0.5}
              start={shouldAnimate ? undefined : 0}
            />
          </div>
          <p className="text-gray-600">Total Reviews</p>
        </div>

        <div className="bg-white shadow-2xl p-8">
          <img className="mx-auto py-3" src={img3} alt="" />
          <div className="text-4xl font-bold text-blue-500 mb-2">
            <CountUp
              end={1900}
              duration={5}
              suffix=" +"
              delay={0.5}
              start={shouldAnimate ? undefined : 0}
            />
          </div>
          <p className="text-gray-600">Patients</p>
        </div>

        <div className="bg-white shadow-2xl p-8">
          <img className="mx-auto py-3" src={img4} alt="" />
          <div className="text-4xl font-bold text-blue-500 mb-2">
            <CountUp
              end={300}
              duration={5}
              suffix=" +"
              delay={0.5}
              start={shouldAnimate ? undefined : 0}
            />
          </div>
          <p className="text-gray-600">Total Staff</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleMedicalStats;
