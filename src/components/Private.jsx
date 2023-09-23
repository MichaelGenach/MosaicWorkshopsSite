import { React, useState, useRef, useEffect } from 'react'
import './Private.css'
import FadeIn from 'react-fade-in';
import photo37 from './images/photo37.jpg'
import photo38 from './images/photo38.jpg'
import photo39 from './images/photo39.jpg'



export default function Private(props) {







  return (

    <div id='mainDivPrivate' >
 <br /><br /><br /><br />
 <FadeIn>
        <h1 className='white'> סדנאות פסיפס בוטיק </h1>
        <h3 className='white'>צרו פסיפסים מרהיבים יחד עם יקיריכם בליווי מומחי פסיפס וקחו את יצירותיכם הביתה</h3>

       
          <div id='photo37Div'>
            <img id='photo37' src={photo37} height={350} alt="" />



            <h1 id='textPhoto37'>עובדים ונהנים מיצירותיכם</h1>
          </div>


         

          <div id='photo38Div'>
            <h1 id='textPhoto38'>  חוויה מגבשת ויצירתית  </h1>
            <img id='photo38' src={photo38} height={550}  alt="" />




          </div>
        





          <div className='container'>



    


            <div id='infoDivPrivate'>
            <div>
              <img src={photo39} width={600} alt=""  id='photo39' />
            </div>
            <div id='bottomText'>
              <h1 className='white'> ?מה כלול במחיר
              </h1>
              <h3 className='white'>   אנחנו מעבירים את הסדנאות המיוחדות שלנו בגלריית פסיפסים עתיקה מול  הים,
                  בה אנחנו מוכרים ומייצרים פסיפסים בשיטה עתיקה ובסטנדרט גבוה
                כמו כן הסדנא כוללת ליווי צמוד  של אנשי מקצוע מנוסים  ועמדת קפה ועוגיות ומוזיקה לבחירה</h3>

               <h3 className='white' id='prices'>ב
                250₪
                עבור פסיפס בגודל <br />

                20X20
                ס"מ<br />


                וכן המחיר עולה לפי הגודל
              </h3>
              </div>
            </div>



          
          </div>






        


          <div id='contactPrivate'>
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



            <div id='whatsAppDivPrivate' >
              <a id='whatsAppPrivate' href="https://wa.me/9720523948920"> <span style={{ position: 'relative', right: '5px' }}><i className="bi bi-whatsapp"></i></span> להרשמה </a>

            </div>
          </div>
        </FadeIn>

    

    </div>

  )
}











