import React from 'react'
import './section4.css'
import WhiteCup from '../Assets/Images/icons/whiteCup.png'
import DarkCup from '../Assets/Images/icons/darkCup.png'
import one from '../Assets/Images/icons/one.png'
import two from '../Assets/Images/icons/two.png'
import three from '../Assets/Images/icons/three.png'
import four from '../Assets/Images/icons/four.png'
import five from '../Assets/Images/icons/five.png'
import oneD from '../Assets/Images/icons/oneD.png'
import twoD from '../Assets/Images/icons/twoD.png'
import threeD from '../Assets/Images/icons/threeD.png'
import fourD from '../Assets/Images/icons/fourD.png'
import fiveD from '../Assets/Images/icons/fiveD.png'
import owner from '../Assets/Images/Owner.jpg'
const Section4 = ({ DarkMode }) => {
    const WhiteIcons = [one, two, three, four, five];
    const DarkIcons = [oneD, twoD, threeD, fourD, fiveD];
  
    return (
      <div className='container-fluid pb-5 ' style={{ backgroundColor: DarkMode ? '#070707' : '#E5F3EC', color: DarkMode ? "white" : 'black', position: "relative" , overflow:"hidden" }}>
        <div className='leftmostImg '></div>
        <div className='TopRightImg '></div>
        <div className='row d-flex align-items-center justify-content-center  p-5'>
          <h2 >فريق العمل</h2>
        </div>
        <div className='row d-flex align-items-center justify-content-center'>
  
          <div className='col-11 col-md-6 firstBox d-flex align-items-center justify-content-center' style={DarkMode ? { backgroundColor: '#141E28' } : { backgroundColor: '#EAEAEA' }} >
            <p className='px-5 ' style={{ textAlign: 'right' }}>لغة البرمجة العربية (عرب) هي مبادرة شخصية من اخصائي تحليل وتطوير نــــظم المعلومات "وليد الباز" - كانت حلم وتحول إلى حقيقة - بجهد وتمويل شخصي تم تصميم وتطوير لغة (عرب) لتكون لغة برمجة عربية يمكن استخدامها في تــــعلم البرمجة أو احترافها.</p>
          </div>
          <div className='col-11 col-md-5    secondBox' style={DarkMode ? { backgroundColor: '#141E28' } : { backgroundColor: '#EAEAEA' }} >
            <div className='CirlceIcon tex' style={DarkMode ? { backgroundColor: '#141E28' } : { backgroundColor: '#EAEAEA' }}>
              <div className='centerImage'>
                <img src={DarkMode ? DarkCup : WhiteCup} className='img-fluid' alt='Profile' ></img>
              </div>
            </div>
            <div className='row d-flex flex-column align-items-center justify-content-center  mt-5'>
              <img src={owner} className='img-fluid mt-2' style={{ borderRadius: '10px' }}></img>
              <h3>وليد الباز</h3>
              <p style={DarkMode ? { color: '#8C8C8C' } : { color: '#6F6F6F' }}> مؤسس المشروع l مصمم ومطور لغة (عرب)</p>
            </div>
            <div className='lineDivider mx-auto' style={DarkMode ? { backgroundColor: '#2C2C33' } : { backgroundColor: '#3636A8' }}></div>
            <div className='row d-flex py-4 align-items-center justify-content-center'>
              {WhiteIcons.map((icon, index) => (
                <div key={index} className='cirlce mr-4' style={{ backgroundColor: DarkMode ? "#00D285" : "#008E5A" }}>
                  <div className='centerImage'>
                    <img src={DarkMode ? DarkIcons[index] : icon} className='img-fluid' alt='Profile' style={{ width: '15px', height: '15px' }} ></img>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Section4;