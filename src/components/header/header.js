import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import House from '../../assets/Home_perspective_matte_s.png';
import Mint from '../mintNFT/Mint';


function Header() {
  return (
    <div className='header' id='HOME'>
      <div className="menu">
        <div className="menu-content">
          <h1 className='name'>ourHouse DAO</h1>
          <div className="menu-hamburger">
            <nav className="label-menu">
              <ul>
                <li><a href="#HOME">Home</a></li>
                <li><a href="https://docs.google.com/document/d/1c5yWK-9FUp5vjSA7Nz6Ixd0trgemed5FvJBD992YqtA/edit?usp=sharing" target='_blank'>Whitepaper</a></li>
                <li><a href="#HOW IT WORKS">How It Works</a></li>
                <li><a href="#RENT DISTRIBUTION">Rent Distribution</a></li>
              </ul>
            </nav>
            <nav className="desktop-menu">
              <ul>
                <li><a href="#HOME">Home</a></li>
                <li><a href="https://docs.google.com/document/d/1c5yWK-9FUp5vjSA7Nz6Ixd0trgemed5FvJBD992YqtA/edit?usp=sharing" target='_blank'>Whitepaper</a></li>
                <li><a href="#HOW IT WORKS">How It Works</a></li>
                <li><a href="#RENT DISTRIBUTION">Rent Distribution</a></li>
              </ul>
            </nav>
          </div>
        </div> 
      </div>

      <main className='main_page'>
        <div className='main_container'>
          <h2 className="main_text">
            By purchasing property and providing the income from those properties as student loan relief, we are tackling the tension between millennials and landlords and re-distributing that revenue to those who need it most.
          </h2>
          <Link to={`/form`}>
            <button className='main_button'>
              <span className="front">
                Apply Now! 
              </span>
            </button>
          </Link>
              <Mint />
        </div>
        <img src={House} alt='house' className='main_house'/>
      </main> 
    </div>
  )
}

export default Header;