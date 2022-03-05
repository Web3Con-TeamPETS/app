import React from 'react';
import Header from '../../components/header/header';
import How from '../../components/how/HowItWorks';
import '../../App.css'
import RentDistribution from '../../components/rent/RentDistribution';


const Home = () => {

  return (
    <div className='App'>
      <Header />
      <How />
      <RentDistribution />
    </div>
  );
};

export default Home;