import React from 'react'
import './footer.css';
import newoneLogo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className='newone__footer section__padding'>
      <div className='newone__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>

      </div>
      <div className='newone__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='newone__footer-links'>
        <div className='newone__footer-links_logo'>
          <img src={newoneLogo} alt='logo'/>
          <p>74 Guinea St, All Rights Reserved</p>
        </div>
        <div className='newone__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className='newone__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className='newone__footer-links_div'>
          <h4>Get in touch</h4>
          <p>74 Guinea St Accra Ghana</p>
          <p>0532659323</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className='newone__footer-copyright'>
        <p>© 2024 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer