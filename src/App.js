import React from 'react';
import Header from './components/header/header'
import How from './components/how/HowItWorks'
import './App.css'
import RentDistribution from './components/rent/RentDistribution';
// import MintNFT from './components/mintNFT/Mint';


const App = () => {

  return (
    <div className="App">
      <Header />
      <How />
      <RentDistribution />
      {/* <MintNFT /> */}
    </div>
  );
};

export default App;
