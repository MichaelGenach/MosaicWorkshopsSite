import { React, useEffect, useRef } from 'react'
import './Company.css'
import BookingWidget from './BookingWidget';
import Contact from './Contact';
import FadeIn from 'react-fade-in';
import photo1 from './images/photo1.jpg'
import photo44 from './images/photo44.jpg'
import photo45 from './images/photo45.jpg'
import photo46 from './images/photo46.jpg'
import photo50 from './images/photo50.jpg'
import photo57 from './images/photo57.jpg'
import photo58 from './images/photo58.jpg'
import photo59 from './images/photo59.jpg'
import photo60 from './images/photo60.jpg'
import photo61 from './images/photo61.jpg'
import photo62 from './images/photo62.jpg'
import photo63 from './images/photo63.jpg'
import photo64 from './images/photo64.jpg'
import photo65 from './images/photo65.jpg'
import photo66 from './images/photo66.jpg'
import photo67 from './images/photo67.jpg'
import photo68 from './images/photo68.jpg'
import photo69 from './images/photo69.jpg'
import photo70 from './images/photo70.jpg'
import photo71 from './images/photo71.jpg'
import photo72 from './images/photo72.jpg'
import photo73 from './images/photo73.jpg'
import photo74 from './images/photo74.jpg'
import photo98 from './images/photo98.jpg'
import photo99 from './images/photo99.jpg'
import photo100 from './images/photo100.jpg'
import photo101 from './images/photo101.jpg'
import photo102 from './images/photo102.jpg'
import photo107 from './images/photo107.jpg'
import photo108 from './images/photo108.jpg'
import photo118 from './images/photo118.jpg'
import photo121 from './images/photo121.jpg'
import photo122 from './images/photo122.jpg'
import photo123 from './images/photo123.jpg'
import photo124 from './images/photo124.jpg'
import photo126 from './images/photo126.jpg'
import photo146 from './images/photo146.jpg'
import photo147 from './images/photo147.jpg'
import photo148 from './images/photo148.jpg'
import photo155 from './images/photo155.jpg'
import photo192 from './images/photo192.jpg'
import photo193 from './images/photo193.jpg'
import video10 from './videos/video10.mp4'
import video14 from './videos/video14.mp4'





import { motion } from "framer-motion"
export default function Company(props) {


  const photoCompany = [
    photo64, photo45, photo192, photo63, photo193, photo118, photo121, , photo122, photo73, photo1, , , photo74, ,

    photo155, photo65,
    photo66, photo67, photo69, photo70, photo59, photo58, photo72, photo98, photo100, , photo101, photo107,
    photo71, photo126,]

  const carusel = useRef()

  useEffect(() => {
    props.setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth)
  }, []);

  return (


    <div id='mainDivCompany'>
      <FadeIn>
        <br /><br /><br /><br />
        <h1 style={{ color: 'white' }}>סדנאות פסיפסים עבור חברות</h1>
        <p style={{ color: 'white' }}> צרו פסיפסים גדולים ומרהיבים של לוגו החברה שלכם וקחו את יצירתכם אליכם למשרד</p>


        <div id='twoCompanyVideos'>
          <video id="video14" src={video14} autoPlay loop muted />
          <video id="video10" src={video10} autoPlay loop muted />

        </div>








        <p className='textPhotoC'>עובדים בשיתוף פעולה</p>

        <img id='photo58' src={photo58} alt="" />








        <p className='textPhotoC'> סדנא חוויתית 
          לקולגות שלכם  </p>
        <img id='photo50' src={photo50} alt="" />


        <br /><br /><br />








        <div id='infoDivCompany'>
          <h2 style={{ color: 'white' }}> ?מה כלול במחיר
          </h2>
          <p id='infoCompany' >  נחלק אתכם לקבוצות שמייצרות חלקים שונים מפסיפס גדול,
            משבצים את החלקים יחד, ואנחנו "נתפור" את הפסיפס ליצירת מופת שלכם עבור המשרד שלכם</p>
            </div>




          <div id='photo46Div'>
            <p style={{ color: 'orange' }}> פסיפס אשר נעשה על ידי עובדי חברת סוני במסגרת הסדנא שלנו</p>
            <img src={photo46} id='photo46' alt=" פסיפס שנעשה על ידי עובדי חברת סוני במסגרת הסדנא שלנו" />

          </div>
       



        <br />


      </FadeIn>




      <div id='caruselDivCompany'>
        <motion.div ref={carusel} id='caruselCompany' whileTap={{ cursor: "grabbing" }}>
          <motion.div drag="x" dragConstraints={{ right: 0, left: -props.width }} id='innerCaruselCompany'>
            {photoCompany.map(image => {
              return (
                <motion.div id='itemCompany' key={image}>
                  <img src={image} alt='' />
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>




      <Contact />


    </div>



  )
}
