import { React, useState, useRef, useEffect } from 'react'
import FadeIn from 'react-fade-in';
import { Link, useNavigate, } from 'react-router-dom'
import { motion } from "framer-motion"
import './Janur.css'
import Contact from './Contact';
import BookingWidget from './BookingWidget';

import photo168 from './images/photo168.jpg'
import photo171 from './images/photo171.jpg'
import video5 from './videos/video5.mp4'


export default function Janur(props) {


  
    return (

    <div id='mainDivJanur'>

<br /><br /><br /><br />
<FadeIn>

   <h1 style={{color:'white', marginBottom:'10vh'}}> ג'נור - תנור הקדרות המהפכני </h1>

<div className="janur1">
   <p id='p1'>כעת תוכלו ליצור יצירות קרמיקה בביתכם ללא תנור הקדרות המגושם והיקר</p>
<video src={video5} autoPlay loop muted id='video5' />
</div>


<p id='textPhotos'>,טמפרטורה אידאלית ליצירה איכותית <br /> .קומפקטי ויעיל במחיר משתלם</p>


<div id='JanurPhotosDiv'>
<img id='photo171' src={photo171} alt="" />
          <img id='photo168' src={photo168} alt="" />
     
      


       
        </div>





    <p id='explainJanurText'>
      בקניית "ג'נור" תוכלו ליצור את יצירותיכם בביתכם במחיר משתלם ומהפכני, לפני הרכישה יש להיעזר בהדרכה של אמיר יבואן התנור 
    </p>








        </FadeIn>


      

        <Contact/>
    </div>


    
  )
}
