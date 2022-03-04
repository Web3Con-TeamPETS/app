import React from 'react'
import './RentDistribution.css'
import list from '../../assets/list.png'

function RentDistribution() {
  return (
    <div className='section_3' id='RENT DISTRIBUTION'>
        <div className='rent_content'>
            <h1 className='rent_title'>Rent Distribution</h1>
            <p className='rent_text'>
                Individuals will be accepted into homes based off their debt-to-income ratio and the amount of time left of their loan. The drive here is to benefit those who need it most, first.
            </p> 
        </div>  
        <img src={list} alt='List' className='list_img'/>
    </div>
  )
}

export default RentDistribution