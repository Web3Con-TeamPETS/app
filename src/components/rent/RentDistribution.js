import React from 'react'
import './HowItWorks.css'
import people from '../../assets/people.png'
import flow from '../../assets/flow.png'
import money from '../../assets/money.png'

function HowItWorks() {
  return (
    <div className='section_2' id='HOW IT WORKS'>
        <div className='section_2_imgs'>
            <img src={people} alt='people' className='people_img'/>
            <img src={money} alt='money' className='money_img'/>
            <img src={flow} alt='flow' className='flow_img'/>
        </div>
        <div className='how_content'>
           <h1 className='how_title'>How It Works</h1>
            <p className='how_text'>
                Individuals will be accepted into homes based off their debt-to-income ratio and the amount of time left of their loan. The drive here is to benefit those who need it most, first.
            </p> 
        </div>  
    </div>
  )
}

export default HowItWorks