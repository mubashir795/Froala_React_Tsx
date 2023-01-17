import React from 'react';
import './Footer.css';


const Footer: React.FC<{}> = () =>{
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <p>WYSIWYG EDITOR</p>
            <a href='/'>Overview</a>
            <a href='/'>Features</a>
            <a href='/'>Pricing</a>
            <a href='/'>Download</a>
            <a href='/'>Examples</a>
            <a href='/'>FAQ</a>
            <a href='/'>solutions</a>
            <a href='/'>Legal</a>
          </div>
          <div className='footer-link-items'>
            <p>FREE TOOLS</p>
            <a href='/'>Design Blocks</a>
            <a href='/'>Online HTML Editor</a>
            <a href='/'>Pages</a>
            <a href='/'>Image Uploader</a>
            <a href='/'>WebTestIt</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <p>Resource</p>
            <a href='/'>React Grid</a>
            <a href='/'>Docs</a>
            <a href='/'>Quick Start</a>
            <a href='/'>Blog</a>
            <a href='/'>Support</a>
            <a href='/'>Contact Us</a>
            <a href='/'>Case Studies</a>
            <a href='/'>Customizer</a>
          </div>
          <div className='footer-link-items'>
            <p>Get In Touch</p>
          </div>
          <div className='footer-link-items'>
            <p>Sign Up</p>
                <p>Join our email list and receive the latest case studies, event updates, product news, and much more!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;