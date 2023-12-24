import React from 'react'
import firstImg from '../Assets/Images/HomePage-Section3Imgs/p1.png'
import secondImg from '../Assets/Images/HomePage-Section3Imgs/p2.png'
import thirdImg from '../Assets/Images/HomePage-Section3Imgs/p3.png'
import fourthImg from '../Assets/Images/HomePage-Section3Imgs/p4.png'
import fifthImg from '../Assets/Images/HomePage-Section3Imgs/p5.png'
import FotoTextCompnent from './FotoTextCompnent'
import './section3.css'
const Section3 = ({DarkMode}) => {

    const Imgs=[firstImg,secondImg,thirdImg,fourthImg,fifthImg]
    const text = ["التكامل مع تشات جي بي تي" ,
     "دعم إنشاء مكتبات خاصة" ,
      "دعم تطوير خدمات الشبكة وخدمات الاتصال بالشبكة" ,
       "دمج الكود المطور بلغة (عرب) داخل التطبيقات المطورة باستخدام دوت نت و يونيتي",
     "تكامل لغة (عرب) مع الأنظمة المختلفة"
    ]

    return (
      <div className='container-fluid pb-5' style={DarkMode ? {backgroundColor:'#101014' , color:"#FFF", position:'relative', zIndex:32} : {color:"#000", backgroundColor:'#FFF', position:'relative', zIndex:32}}>
        <div className='row '>
            <h2 className='mx-auto py-5'>خصائص و امكانيات</h2>
        </div>
        {Imgs.map((image, index) => (
          <div key={index} style={{position:"relative"}}>
            <div className={`Image${index}`}></div>
            <FotoTextCompnent key={index} Image={image} Text={text[index]} IsReversed={index % 2 !== 0} />
          </div>
        ))}
    </div>
  )
}

export default Section3