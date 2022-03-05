import React from 'react'
import './form.css'


function ApplyForm() {
  return (
    <div className='form'>
         <form action='https://formsubmit.co/damariis.13@gmail.com' method='POST'>
            <input type='text' name='name' placeholder='Name' required/>
            <input type='lastName' name='lastName' placeholder='Last Name' required/>
            <input type='email' name='email' placeholder='Email' required/>
            <textarea name='message' placeholder='Message' required/>
         </form>
    </div>
  )
}

export default ApplyForm