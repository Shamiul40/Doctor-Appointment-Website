import { toast } from "react-toastify";

export const getDoctor = () => {
  const doctorList = localStorage.getItem("doctorList");

  if (doctorList) return JSON.parse(doctorList);
  return [];
};

export const addDoctor = (doctor) => {
  const allDoctorList = getDoctor();
  const isExist = allDoctorList.find((doc) => doc.id === doctor.id);
  if (isExist) return toast.warn("Appointment already shedule for today");
  allDoctorList.push(doctor);

  toast.success("doctor appointed Successfully")

  localStorage.setItem("doctorList", JSON.stringify(allDoctorList));
};

export const removeDoctor = (id) => {
  const allDoctorList = getDoctor();
  const remainingDoctor = allDoctorList.filter((doc) => doc.id !== id);
  toast.warn('Appoinment Cancelled')
  localStorage.setItem("doctorList", JSON.stringify(remainingDoctor));
};
