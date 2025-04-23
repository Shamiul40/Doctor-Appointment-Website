import React, { useState } from "react";
import Hero from "../../Components/Hero/Hero";
import CardContainer from "../../Components/CardContainer/CardContainer";
import { useLoaderData } from "react-router-dom";
import SimpleMedicalStats from "../../Components/SimpleMedicalStates/SimpleMedicalStats";

const Home = () => {
  const Data = useLoaderData();

  const [displayDoctor, setDisplayDoctor] = useState(Data);

  const handleSubmit = (e, text) => {
    e.preventDefault();

    if (text === "") return setDisplayDoctor(Data);

    const searchedDoctor = displayDoctor.filter(
      (doc) =>
        doc.name.toLowerCase().includes(text) ||
        doc.name.toLowerCase().split(" ").includes(text)
    );
    console.log(searchedDoctor);
    setDisplayDoctor(searchedDoctor);
  };

  return (
    <div>
      <Hero handleSubmit={handleSubmit}></Hero>
      <CardContainer Data={displayDoctor} ></CardContainer>
      <SimpleMedicalStats></SimpleMedicalStats>
    </div>
  );
};

export default Home;
