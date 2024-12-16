import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FaWaze, FaInstagram } from "react-icons/fa";
import ContactForm from './ContactForm';
import Maps from './maps'



export default function Contact() {
  return (

    <div>

      <div id='contact'>
        <h1 id='yezirat'>
          יצירת קשר
        </h1>

        <ContactForm />

        <h3 id='eich' className='white'>
          ?איך מגיעים
        </h3>
        <div className="arrive">
        <p id='arriveText'>
          כותבים בוויז: "יקבי קיסריה",
          חניון עפר חינמי, ונכנסים לנמל קיסריה, עלות כניסה: 18 ש"ח, 
          הדרך אלינו מונגשת.
        </p>
<Maps/>
        </div>

        <h3 id='lifratim'>
          לפרטים: אמיר ג'נאח
        </h3>

        <div id='pratim'>
          <a className='con' href="tel:0523948920">052-394-8920</a>
          <a className='con' id='emailInfo' href="mailto:genach2@bezeqint.net">genach2@bezeqint.net</a>




          <div className="wwi">
            <a id='waze' href='https://waze.com/ul/hsvbbfh9q8'>
              <FaWaze style={{ fontSize: '45px' }} />
            </a>

            <a id='whatsApp' href="https://wa.me/9720523948920">
              <span style={{ position: 'relative', right: '5px' }}>
                <i className="bi bi-whatsapp" style={{ fontSize: '45px' }}></i>
              </span>
            </a>

            <a id='instagram' href='https://www.instagram.com/genach_mosaic_workshop?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
              <FaInstagram style={{ fontSize: '45px' }} />
            </a>
          </div>


        </div>
      </div>
    
    
    
    
    
    
    </div>
  )
}
