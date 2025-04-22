import React from 'react';
import Hero from '../../Components/Hero/Hero';
import CardContainer from '../../Components/CardContainer/CardContainer';
import { useLoaderData } from 'react-router-dom';
import SimpleMedicalStats from '../../Components/SimpleMedicalStates/SimpleMedicalStats';

const Home = () => {
  const Data = useLoaderData();
  
  return (
    <div>
      <Hero></Hero>
      <CardContainer Data={Data}></CardContainer>
      <SimpleMedicalStats></SimpleMedicalStats>
    </div>
  );
};

export default Home;