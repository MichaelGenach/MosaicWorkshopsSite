import { React, useEffect, useRef, useState } from 'react';
import './Reviews.css';
import { motion } from "framer-motion";

export default function Reviews(props) {
  const [dragConstraint, setDragConstraint] = useState(0);
  const carusel = useRef();
 



  const reviews = [
    {
      name: "Eden Azulay",
      review: "היתה סדנא מהנה ומאוד מרגיעה! אמיר לימד אותנו את הטכניקה, ואפשר לנו להתנסות באובניים הסביר ותיקן בסבלנות ובשמחה. וכל זאת עם הנוף בנמל קיסריה נהנו מאוד ממליצים בחום על הסדנא",
      rating: 5
    },
    {
      name: "קרן וארז",
      review: "סדנה סופר מהנה ואמיר פשוט בחור מרתק! אנרגיה ממש נעימה ומקום קטן וקסום בנוף הפסטורלי של נמל קיסריה סדנה באווירה נעימה ביתית ומאוד מאפשרת מומלץ בחום 🩷",
      rating: 5
    },
    {
      name: "ג׳יליאן",
      review: "הזמנתי את הסדנא הזוגית כהפתעה לבעלי והיה מושלם!! אמיר סיפר על עצמו והיה מרתק וגם העבודה היתה ממש מעולה הננו מכל רגע ואני ממליצה בחום",
      rating: 5
    },
    {
      name: "עינב ודלית",
      review: "החלטנו לצאת יום כיף של אמא ובת חיפשנו סדנת קרמיקה ומצאנו את הסדנה של אמיר בקיסריה מעבר למיקום המושלם אמיר העביר את הסדנה בצורה מעניינת מאוד שילב רקע היסטורי והתנסות עם הסבר והרבה סבלנות תודה רבה אמיר!",
      rating: 5
    },
    {
      name: "ענת",
      review: "סדנא חוויתית וכייפית אמיר סובלני ומדריך מצויין מומלץ בחום",
      rating: 5
    },
    {
      name: "א.ל",
      review: "חוויה זוגית כיפית ונעימה במיקום מהמם! אמיר היה סבלני ושירותי והשרה אווירה נעימה🙂",
      rating: 5
    },
    {
      name: "נעם ועוז",
      review: "היתה סדנא נהדרת קיבלנו הרבה מידע מעניין והתנסינו בעבודה עם אבניים אמיר בעל ניסיון וסיפורים מרתקים נהננו מאד",
      rating: 5
    },
    {
      name: "עדי ודביר",
      review: "היינו הבוקר בסדנה אצל אמיר והיה מעולה ההקדמה הייתה מעניינת מאוד וחיברה אותנו ליצירה שעשינו אמיר הסביר והדגים בנעימות ובנחת ודאג ששנינו נצא עם כלים גמורים מומלץ בחום 🙏",
      rating: 5
    },
    {
      name: "אמיר",
      review: "!היה מקסים",
      rating: 5
    },
    {
      name: "אדוה נוף",
      review: "חוויה שקטה רגועה ואינטימית מאד בסטודיו הנעים של אמיר קיבלנו שעתיים + של אסקפיזם טהור מאד נהנו כזוג גם מהשיח עם אמיר המקצועיות שלו והיצירה שיצאנו איתה מומלץ בחום",
      rating: 5
    },
    {
      name: "כרמל ודנה סו",
      review: "היינו בסדנא זוגית אצל אמיר והיה פשוט מ-ו-ש-ל-ם! אמיר תודה רבה לך על הסבלנות הנעימות הרוגע ההסברים המפורטים והרחבת הידע מומלץ בחום",
      rating: 5
    },
    {
      name: "גיחה ואיתי פרויליך",
      review: "הייתה חוויה זוגית מחכימה וכייפית אמיר העשיר לנו את הידע והעביר לנו סדנה מהנה ביותר ממליצים בחום!",
      rating: 5
    },
    {
      name: "בני והילה",
      review: "התארחנו בסטודיו של אמיר לחגוג יום הולדת להילה בסדנה זוגית אווירה מאוד נעימה אמיר מקצוען יופי של הסברים מאוד מעניינים על נושא חומרים לסוגיהם נושא שימור ורסטורציה ארכיאולוגיה כללית ועוד היה כיף מומלץ בחום",
      rating: 5
    },
    {
      name: "גדעון",
      review: "חוויה נהדרת! הסדנא ענתה על הציפיות שלנו כזוג והרבה מעבר אמיר השקיע בכל פרט בסבלנות רבה ופרגון תודה רבה גם על הנכונות לשתף מנסיונך והידע העמוק על עולם עתיק וקסום",
      rating: 5
    },
    {
      name: "ניצן",
      review: "חוויה מהנה ומומלצת בחום! אמיר מקצועי וסבלני עם סיפורים והסברים מרתקים הסדנה נעשית באווירה נעימה ומזמינה נהננו מאוד!",
      rating: 5
    },
    {
      name: "עדי ואביבה",
      review: "סדנת קדרות עם ערך מוסף! מעבר לחוויה הנעימה והמהנה בהתנסות ביצירה באבניים אמיר מביא אתו הרבה ידע בתחום הארכיאולוגיה למדנו ונהנינו",
      rating: 5
    },
    // {
    //   name: "יעלה",
    //   review: "היינו בסדנה של המשפחה לכבוד יום ההולדת של אבא שלי היה מרתק ומהנה במיוחד! אמיר היה מאוד סובלני ודאג שכולנו נצא מרוצים עם כלים מהממים היו אזעקות לקראת סוף הסדנאות ורצנו למרחב המוגן ליד בסיום האזעקות חזרנו לסטודיו וסיימנו את היצירות למרות האזעקות והטילים יצאנו מהסדנא מרוצים מאוד היה מרתק ופשוט תענוג",
    //   rating: 5
    // },
    {
      name: "לין ועידן",
      review: "היינו בסדנה זוגית היה מושלם ממש! היה אלינו מאוד סבלני וממש עזר המון ידע בתחום ומרגיש שהוא באמת מקצועי חוויה מיוחדת ושונה לזוג לשבור שגרה ממש ממש כיף לגמרי ממליצים",
      rating: 5
    },
    {
      name: "מתן חלבי",
      review: "הייתה סדנה מהממת למדנו על כל החומרים וההיסטוריה ואז גם התנסנו בעצמנו חוויה זוגית כיפית ומגבשת אמיר מדריך עם המון סבלנות נותן טיפים ועזרה כשצריך והכי חשוב תחושה נעימה ורגועה עוד נחזור לסדנאות המשך",
      rating: 5
    },
    // {
    //   name: "ירדן ואורן",
    //   review: "הייתה חוויה באמת מדהימה אמיר היה מאוד סבלני כלפי כולנו גם כלפי אנשים שהיה להם יותר קושי לבצע את המשימות היותר מוטוריקה עדינה הוא היה כל כך סבלני ותמיד ניסה לכוון עד שהצלחנו ליצור דבר באמת יפיפה בפן המנהלי היינו קבוצה גדולה של 11 אנשים וכולנו יצאנו עם תוצרים ביד ובסך הכל זו הייתה חוויה באמת מדהימה אסקפיזם טהור שאני ממליץ לכולם לעשות ובהזדמנות זו אני רוצה גם לומר המון תודה לאמיר ",
    //   rating: 5
    // },
    {
      name: "ויקטוריה",
      review: "סדנא מהממת! מתנסים בשני סוגי חומרים ויוצאים עם הכלים הביתה שזה וואו 🥳 הכל נעשה בסבלנות ועם הסבר מקצועי ורגיש ☺️",
      rating: 5
    },
    {
      name: "גל ועומר",
      review: "חוויה זוגית כיפית ונעימה במיקום מדהים אמיר היה סבלני ומרתק בידע הרב שלו היה קשוב וסייע לנו בכל רגע שהיינו זקוקים לו תודה רבה אמיר נהנינו מאוד!",
      rating: 5
    },
    {
      name: "רחלי",
      review: "היינו בסדנה זוגית אצל אמיר היה מאד מלמד ואינפורמטיבי אמיר ליווה אותנו בסבלנות בכל שלב בהסברים וטיפים כדי לצאת בסוף עם תוצר ותחושת הצלחה וחוויה חיובית ממליצים",
      rating: 5
    },
    {
      name: "נואל",
      review: "הייתי היום בסדנת יחיד היה לי כיף אמיר מדריך מקצועי ומאוד נעים",
      rating: 5
    },
    {
      name: "שיראל ונתי",
      review: " היינו הערב אצל אמיר בסדנא ושמחים מאוד על כך הייתה חוויה מהנה מאוד",
      rating: 5
    },
    {
      name: "שרי",
      review: "הפתעתי את בעלי ליום ההולדת והגענו לסדנת אובניים זוגית אצל אמיר. נהננו מכל רגע- גם מההסבר בהתחלה על עבודתו של אמיר כמשמר, וכמובן מהשלווה של היצירה בזמן שהכנו את כלי הקרמיקה וצבענו אותם בליווי הסבלני של אמיר. כל זה וברקע הנוף היפייפה של נמל קיסריה.",
      rating: 5
    },
    {
      name: "רז וסופיה",
      review: "הסדנה הייתה חוויה מצוינת ובאווירה ממש טובה, נהנינו מאוד. אמיר סבלני מאוד ומסביר פנים. מומלץ",
      rating: 5
    },
    {
      name: "Libi Dahan",
      review: "הייתה חוויה מעניינת, מיוחדת ומומלצת מאוד! אמיר מסביר הכל בצורה נפלאה ומאוד סבלני.",
      rating: 5
    },
    {
      name: "מעיין",
      review: "הגענו ליום הולדת של חברה והיה משגע אמיר נורא נחמד וסבלני נהנינו מאוד מומלץ בהחלט",
      rating: 5
    },
    {
      name: "איילת",
      review: "הלכתי עם חברה לסדנה זוגית של פיסול בחימר, אמיר היה נעים וסבלני מאוד. הסביר לנו על ההיסטוריה של החומר והמקום, בעזרתו פיסלנו בחימר כלי לבחירתנו. היצירה והאווירה במקום משרים אווירה של רוגע. מאוד מהנינו!! מומלץ!",
      rating: 5
    },
    {
      name: "אופירה כהן",
      review: "עשיתי את הסדנא אצל אמיר כמתנת יום הולדת לבעלי היה מדהים נהנו מאוד חוויה מיוחדת במינה ויצאנו עם תוצרים יפים אין לי ספק שעוד נחזור לסדנה נוספת אמיר היה סבלני ומסביר פנים היה כיף מומלץ",
      rating: 5
    },
    {
      name: "קובי הראל",
      review: "היה נהדר אמיר זרם מאוד אם קצב ההתקדמות שלנו הוסיף עומק והסברים חוויה נהדרת ליום הולדת מומלץ בחום!",
      rating: 5
    },
    {
      name: "שרון פורת",
      review: "היה בילוי מקסים! חגגנו יום הולדת לבעלי והגענו עם שלושת הילדים הבוגרים, כולם נהנו מאוד, אמיר סופר מקצועי וסופר נחמד, מומלץ בחום",
      rating: 5
    },
    {
      name: "גיא נימני",
      review: "היה מושלם! הגענו לבילוי לכבוד 15 שנות נישואים. אמיר מדהים, איש עשיר בידע נרחב וכל כך חברותי. נהננו לשמוע אותו, ללמוד ממנו וליצור בסדנא שלו. הפעם הבאה תהיה עם הילדים 🙂",
      rating: 5
    },
    {
      name: "שובל",
      review: "אמיר איש מדהים ומיוחד! משרה רוגע, ובעל סבלנות שלא נגמרת!! העביר לנו הסבר קצר, שם לנו מוזיקה נעימה שליוותה אותנו לאורך הסדנא והיה שירותי וקשוב. הסדנא היתה מקסימה ויצאנו עם אחלה של יצירות! תודה רבה!",
      rating: 5
    },

  ]

 

  // useEffect(() => {
  //   const updateDragConstraint = () => {
  //     const width = window.innerWidth;
  //     if (width <= 768) {
  //       setDragConstraint(-6500);
  //     } else {
  //       setDragConstraint(-2000);
  //     }
  //   };
  //  })
   


  return (
    <div>
      <div id='caruselDivReviews'>
        <motion.div
          ref={carusel}
          id='caruselReviews'
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{ right: 0, left: -props.width }}
        >
          <motion.div id='innerCaruselReviews'>
            {reviews.map((reviewItem, index) => {
              return (
                <motion.div id='itemReviews' key={index}>
                  <h4 >
                  {reviewItem.name}
                    <span style={{ color: 'orange', marginRight: '10px' }}>
                      {'★'.repeat(reviewItem.rating)}{'☆'.repeat(5 - reviewItem.rating)}
                    </span>
                   
                  </h4>
                  <p className='textReviews'>{reviewItem.review}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}