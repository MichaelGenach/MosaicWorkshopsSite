import React from 'react'
import './Tours.css'
import FadeIn from 'react-fade-in';
import photo40 from './images/photo40.jpg'
import photo41 from './images/photo41.jpg'
import photo42 from './images/photo42.jpg'
export default function Tours() {
  return (

    <div id='mainDivTours' >
      <FadeIn>
      <br /><br /><br /><br />
      
        <h1 className='white'> סיורים מיוחדים </h1>
        <h3 className='white'>צאו לסיורים מרתקים בקיסריה העתיקה עם מיטב המדריכים והמומחים</h3>
    



    <div className='photoDiv'>
    <h3 className='photoText'>
סיורים באתרים נסתרים
</h3>
<img src={photo40} alt="" height={400} />
</div>


    <div className='photoDiv'>
   
<img src={photo41} alt="" height={300} />

<h3 className='photoText'>
סיורים פרטיים, וקבוצתיים
</h3>
   


    </div>

    <div className='photoDiv'>
   

    <h3 className='photoText'>
   מה הסיפור <br /> ?של המקום הזה
   </h3>

   <img src={photo42} alt="" height={550} />
   

  
   
       </div>

<div id='infoDivTours'>
       <h3 className='white' id='pricesTours'>ב
                700₪
           תוכלו להזמין את בני ובנות המשפחה שלכם או את הקולגות שלכם לסיורים מרתקים ברחבי קיסריה העתיקה ממיטב אנשי המקצוע
              </h3>
              </div>
     
    
   



        <div id='contactTours'>
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

               

                <div id='whatsAppDivTours' >
                    <a id='whatsAppTours' href="https://wa.me/9720523948920"> <span style={{ position: 'relative', right: '5px' }}><i className="bi bi-whatsapp"></i></span> להרשמה </a>

                </div>
                </div>
                
                </FadeIn>     
    </div>
    
  )
}
