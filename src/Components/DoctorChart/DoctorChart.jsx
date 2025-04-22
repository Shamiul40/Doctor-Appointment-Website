import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts";

const DoctorChart = ({ doctors }) => {
 
  const chartData = doctors.map((doctor) => ({
    name: doctor.name, 
    
    fee: parseInt(doctor.consultation_fee.replace(/\D/g, '')) || 0,
  }));

  return (
    <div className="my-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Appointment Summary (Fee-wise)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart  data={chartData} margin={{ top: 30, right: 30, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar barSize={50} dataKey="fee" fill="#176AE5"  radius={[10, 10, 0, 0]}>
            <LabelList dataKey="fee" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoctorChart;