import { React, useEffect } from 'react'
import './Tours.css'
import Contact from './Contact';
import BookingWidget from './BookingWidget';
import FadeIn from 'react-fade-in';
import photo40 from './images/photo40.jpg'
import photo41 from './images/photo41.jpg'
import photo42 from './images/photo42.jpg'
import photo51 from './images/photo51.jpg'
import photo52 from './images/photo52.jpg'
import photo53 from './images/photo53.jpg'
import photo54 from './images/photo54.jpg'
import photo55 from './images/photo55.jpg'
import photo56 from './images/photo56.jpg'
import photo75 from './images/photo75.jpg'
import photo197 from './images/photo197.jpg'

import { useRef } from 'react';

import { motion } from "framer-motion"

export default function Tours(props) {



    const photoTours = [photo56, photo54,photo52, photo51, photo55, photo75]


    const carusel = useRef()

    useEffect(() => {
        props.setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth)
    }, []);

    return (

        <div id='mainDivTours' >
            <FadeIn>
                <br /><br /><br /><br />

                <h1 className='toursTitle'> סיורים פרטיים </h1>
                <p className='toursTitle'>צאו לסיורים מרתקים בקיסריה העתיקה עם מיטב המדריכים והמומחים</p>


          
                    <img id='photo41' src={photo41} alt="" />
                    <p className='photoText' >
                        סיורים פרטיים, וקבוצתיים
                    </p>
                  


            
                    <img id='photo197' src={photo197} alt="" />
                  
                    <p className='photoText'>
                        מה הסיפור <br /> ?של המקום הזה
                    </p>


              
                    <img id='photo52' src={photo52} alt="" />
                    <p className='photoText' >
                        סיורים באתרים נסתרים שסגורים לקהל
                    </p>

               




                <div id='infoDivTours'>
                    <p id='pricesTours'>

                        הזמינו את בני ובנות המשפחה שלכם או את הקולגות שלכם לסיורים מרתקים ברחבי קיסריה העתיקה ממיטב אנשי המקצוע
                    </p>
                </div>

                <div id='caruselDivTours'>
                    <motion.div ref={carusel} id='caruselTours' whileTap={{ cursor: "grabbing" }}>
                        <motion.div drag="x" dragConstraints={{ right: 0, left: -props.width }} id='innerCaruselTours'>
                            {photoTours.map(image => {
                                return (
                                    <motion.div id='itemTours' key={image}>
                                        <img src={image} alt='' />
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </motion.div>
                </div>






            </FadeIn>

            <Contact />

        </div>

    )
}
