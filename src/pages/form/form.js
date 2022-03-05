import React from 'react'
import './form.css'


function ApplyForm() {
  return (
    <div className='form'>
         <form className='form-style-7' action='https://formspree.io/f/xeqnkrrg' method='POST'>
          <ul>
              <li>
                <label for="name">Name</label>
                <input type="text" name="name" maxlength="100" required/>
                <span>Enter your full name here</span>
              </li>
              <li>
                <label for="email">Email</label>
                <input type="email" name="email" maxlength="100" required/>
                <span>Enter a valid email address</span>
              </li>
              <li>
                <label for="url">Website (Optional)</label>
                <input type="url" name="url" maxlength="100"/>
                <span>Your website address (eg: http://www.google.com)</span>
              </li>
              <li>
                <label for="bio">About You</label>
                <textarea name="bio" onkeyup="adjust_textarea(this)" required></textarea>
                <span>Say something about yourself</span>
              </li>
              <li>
                <button className='main_button'>
                <span className="front">
                  Apply
                </span>
                </button>
              </li>
            </ul>
         </form>
    </div>
  )
}

export default ApplyForm