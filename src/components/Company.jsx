import React from 'react'
import './Company.css'
import FadeIn from 'react-fade-in';
import photo44 from './images/photo44.jpg'
import photo45 from './images/photo45.jpg'
import photo46 from './images/photo46.jpg'
import photo50 from './images/photo50.jpg'



export default function Company() {
  return (

    
    <div id='mainDivCompany'>
      <FadeIn>
      <br /><br /><br /><br />
      <h1 className='white'>סדנאות פסיפסים עבור חברות</h1>
      <h3 className='white'> צרו פסיפסים גדולים ומרהיבים של לוגו החברה שלכם וקחו את יצירתכם אליכם למשרד</h3>





     
        <div id='photo44Div'>
          <img id='photo44' src={photo44} height={350} alt="" />



          <h1 id='textPhoto44'>עובדים בשיתוף פעולה</h1>
        </div>




        <div id='photo45Div'>
          <h1 id='textPhoto45'> ונהנים מהתוצאות  </h1>
          <img id='photo45' src={photo45} height={400} alt="" />
        </div>



        <div id='photo50Div'>
          <img id='photo50' src={photo50} height={300} alt="" />
          <h1 id='textPhoto50'> סדנא חוויתית <br />
          לקולגות שלכם  </h1>
        </div>

        <div id='containerCompany'>



 


            <div id='infoDivCompany'>
              <h1 className='white'> ?מה כלול במחיר
              </h1>
              <h3 className='white'>   <br /> נחלק אתכם לקבוצות שמייצרות חלקים שונים מפסיפס גדול,
               משבצים את החלקים יחד, ואנחנו "נתפור" את הפסיפס ליצירת מופת שלכם עבור המשרד שלכם</h3>

              <h3 className='white' id='prices'>
                
       המחיר נקבע לפי הגודל
          
                
              </h3>
              </div>
              <div id='photo46'>
              <img src={photo46} height={300} alt="" />
            </div>
            
            </div>





      </FadeIn>





      <div id='contactCompany'>
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

        <div id='whatsAppDivCompany' >
          <a id='whatsAppCompany' href="https://wa.me/9720523948920"> <span style={{ position: 'relative', right: '5px' }}><i className="bi bi-whatsapp"></i></span> להרשמה </a>
        </div>
      </div>


    </div>



  )
}
