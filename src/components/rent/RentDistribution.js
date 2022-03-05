import React from 'react'
import './RentDistribution.css'
import list from '../../assets/list.png'

function RentDistribution() {
  return (
    <div className='section_3' id='RENT DISTRIBUTION'>
        <div className='rent_content'>
            <h1 className='rent_title'>Rent Distribution</h1>
            <p className='rent_text'>
            When an Individual pays rent to one of these properties, the funds are dispersed between 3 categories.
            <br></br> 
            1. DAO Maintenance (like software & management)
            <br></br> 
            2. DAO Growth (buying more properties)
            <br></br> 
            3. Loan-Repayment (this one goes straight to the Individuals student loans)
            </p> 
        </div>  
        <img src={list} alt='List' className='list_img'/>
    </div>
  )
}

export default RentDistribution