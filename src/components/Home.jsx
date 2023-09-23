import { React, useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { Link, useNavigate, } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import './Home.css';
import photo1 from './images/photo1.jpg'
import photo2 from './images/photo2.jpg'
import photo3 from './images/photo3.jpg'
import photo4 from './images/photo4.jpg'
import photo5 from './images/photo5.jpg'
import photo6 from './images/photo6.jpg'
import photo7 from './images/photo7.jpg'
import photo8 from './images/photo8.jpg'
// import photo9 from './images/photo9.jpg'
// import photo10 from './images/photo10.jpg'
import photo11 from './images/photo11.jpg'
// import photo12 from './images/photo12.jpg'
import photo13 from './images/photo13.jpg'
// import photo14 from './images/photo14.jpg'
import photo15 from './images/photo15.jpg'
import photo16 from './images/photo16.jpg'
import photo17 from './images/photo17.jpg'
import photo18 from './images/photo18.jpg'
import photo19 from './images/photo19.jpg'
import photo20 from './images/photo20.jpg'
import photo21 from './images/photo21.jpg'
// import photo22 from './images/photo22.jpg'
import photo23 from './images/photo23.jpg'
import photo24 from './images/photo24.jpg'
import photo25 from './images/photo25.jpg'
import photo26 from './images/photo26.jpg'
import photo27 from './images/photo27.jpg'
import photo28 from './images/photo28.jpg'
import photo29 from './images/photo29.jpg'
import photo30 from './images/photo30.jpg'
import photo31 from './images/photo31.jpg'
import photo32 from './images/photo32.jpg'
import photo33 from './images/photo33.jpg'
// import photo34 from './images/photo34.jpg'
// import photo35 from './images/photo35.jpg'
import photo36 from './images/photo36.jpg'
import photo37 from './images/photo37.jpg'
import video1 from './videos/video1.mp4'
import { useRef } from 'react';



export default function Home(props) {

    const nev = useNavigate()

    const carusel = useRef()

    useEffect(() => {
        props.setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth)
    }, []);

    const scrollToTop = () => {

        window.scrollTo(0, 0);
        nev('/company')

    }


    const photos = [
        photo3, photo4, photo5, photo6, photo7, photo8, photo11, photo13,
        photo15, photo16, photo17, photo18, photo19, photo20, photo21, photo23, photo24, photo25, photo26, photo27,
        photo28, photo29, photo30, photo31, photo32, photo33, photo36,
    ]







    return (



        <div id='main'>





            <div className='container'>



              
        
                       
                                                
                        
                        <video src={video1} autoPlay loop muted id='video1' />

                       
                            <div id='overlay'>  </div>
                   

                   


                   

                    <div className='frontTitleDiv' >
                    <br /><br /><br /><br />
                    <FadeIn>
                        <h1  className='title'
                        >Genach Mosaics</h1>
                        <h1  className='title'>סדנאות פסיפסים בנמל קיסריה</h1>
                        <h2 id='titleh2'>
                            ,סדנאות מיקצועיות להכנת פסיפסים ליד הים, עבור חברות קבוצות ולקוחות פרטיים
                            <br />
                            קחו את היצירה שלכם הביתה
                        </h2>
                        

                       

                        <Link ><button onClick={() => {
                            window.scrollTo({
                                top: 800,
                                behavior: 'smooth'
                            })
                        }} className='buttons'> לפרטי הסדנא </button></Link>

</FadeIn>
                    </div>

                </div>






              

                
                    <h1 className='white' id='intro' > Genach Mosaics ל<br />  :יש 2 סוגי סדנאות  </h1>
                    <br />
              

           

               
            <div id='tableDiv' className='z'>

                <tr>
                <Link to={'/company'} className={'buttons2'} onClick={scrollToTop}><th id='table2'>סדנת פסיפסים <br /> לחברות</th></Link> 
                </tr>
                <tr>
                <Link to={'/private'} className={'buttons2'} onClick={scrollToTop}><th id='table1'>סדנת פסיפסים <br /> בוטיק</th></Link>
                </tr>
            </div>


            <div id='images1'>
                <img id='img1' src={photo1} />
                <img id='img2' src={photo37} />
            </div>




            <div className='s'>
                <h5 className='h5'>יוצרים פסיפס של לוגו החברה שלכם</h5>
                <h5 className='h5' id='h12' >יוצרים פסיפס אישי  בשיטה עתיקה יחד עם אמני פסיפסים</h5>
                <h4 className='h4' >?מה עושים</h4>
            </div>

            <div id='line1'></div>

            <div className='s'>
                <h5 className='h5'>פסיפס אחד גדול עבור משרדי החברה</h5>
                <h5 className='h5' id='h22'>כל משתתף יוצר פסיפס</h5>
                <h4 className='h4'>?כמה עושים</h4>

            </div>

            <div id='line2'></div>

            {/* <div className='s'>
                <div >
                    <h5 className='h5' >כל משתתף מקבל חלק מפסיפס גדול וכל אחד יוצר את החלק שלו עם אבנים  מתאימות דבק וכלים מתאימים
                        על שבלונה מוכנה מראש, בסיום היצירה מגיע המשתתף ומשבץ את החלק שהכין
                        בפסיפס גדול יותר וכך נוצר לוגו החברה שלכם על בפסיפס אחד גדול</h5>
                </div>
                <div >
                    <h5 className='h5'> כל משתתף מקבל אבני פסיפס בצבעים שמהם מורכב הפסיפס שלו,דבק,
                        כלי חיתוך, מסגרת וציור,
                        עליו הוא משבץ את אבני הפסיפס ויוצר את יצירת האמנות שלו <br />
                    </h5></div>
                <h4 className='h4'>?איך עושים</h4>

            </div> */}

            <div id='line3'></div>

            <div className='s'>
                <h5 className='h5' id='s41' >עד 100 משתתפים</h5>
                <h5 className='h5'  id='s42'> משתתף יחיד עד 10 משתתפים </h5>
                <h4 className='h4'>?כמה משתתפים</h4>


            </div>


            <div id='line4'></div>


            <div className='s'>
                <h5 className='h5' >מתאים לכלל עובדי החברה</h5>
                <h5 className='h5' id='s52'>מתאים לילדים מגיל 6 ומעלה</h5>
                <h4 className='h4'>לאילו גילאים <br /> ?זה מתאים</h4>
            </div>


            <div id='line5'></div>


            <div className='s'>
                <div >
                    <h5 className='h5' id='s61'>זמן קצר לאחר הסדנא </h5>
                </div>
                <h5 className='h5' id='s62'>מיד בתום הסדנא</h5>
                <h4 className='h4'>?מתי נקבל את היצירה</h4>
            </div>




            <div id='line6'></div>





            <div id='caruselDiv'>
                <motion.div ref={carusel} id='carusel' whileTap={{ cursor: "grabbing" }}>
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -props.width }} id='innerCarusel'>
                        {photos.map(image => {
                            return (
                                <motion.div id='item' key={image}>
                                    <img src={image} alt='' />
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </motion.div>
            </div>






            <div id='contactHome'>
                <h1 className='white'>
                    יצירת קשר
                </h1>

                <h3 className='white'>
                    ?איך מגיעים
                    <br />
                    - "יקבי קיסריה" wazeכותבים ב <br />
                    חניון עפר חינמי, ונכנסים לנמל קיסריה, עלות כניסה: 14 ש"ח
                </h3>

                <h3 className='white'>
                    לפרטים: אמיר ג'נאח
                    <br />
                    052-394-8920 :טלפון
                    <br />
                    genach2@bezeqint.net :מייל
                </h3>

                <div id='whatsAppDivHome'  >
                    <a id='whatsAppHome' href="https://wa.me/9720523948920"> <span style={{ position: 'relative', right: '5px' }}><i className="bi bi-whatsapp"></i></span> להרשמה </a>

                </div>
            </div>

        </div>


    )
}