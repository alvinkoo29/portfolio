import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Thank you for taking a look at what I can do
        </p>
        <p className='footer-subscription-text'>
          Send me an email if there is something you would like me to try
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder="Don't be shy"
            />
            <Button buttonStyle='btn--outline'>Hire me</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Currently</Link>
            <Link to='/'>Links</Link>
            <Link to='/'>Do</Link>
            <Link to='/'>Nothing</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>This is</Link>
            <Link to='/'>Just</Link>
            <Link to='/'>Mock texts</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <small className='website-rights'>My learning © 2023</small>
    </div>
  );
}

export default Footer;