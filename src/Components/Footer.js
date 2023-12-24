import React from 'react';
import LogoLight from '../Assets/Images/Logo.png';
import LogoDark from '../Assets/Images/LogoDark.png';
import one from '../Assets/Images/footer_icons/1.png'
import two from '../Assets/Images/footer_icons/2.png'
import three from '../Assets/Images/footer_icons/3.png'
import four from '../Assets/Images/footer_icons/4.png'
import five from '../Assets/Images/footer_icons/5.png'
import six from '../Assets/Images/footer_icons/6.png'
import oned from '../Assets/Images/footer_icons/1d.png'
import twod from '../Assets/Images/footer_icons/2d.png'
import threed from '../Assets/Images/footer_icons/3d.png'
import fourd from '../Assets/Images/footer_icons/4d.png'
import fived from '../Assets/Images/footer_icons/5d.png'
import sixd from '../Assets/Images/footer_icons/6d.png'
const Footer = ({ DarkMode }) => {
  // Define a style object for reset styles
  const resetStyles = {
    textDecoration: 'none',
    color: 'inherit',
    marginBottom:'20px !important'
  };
  const SocialIconsDark = [one,two,three,four,five,six];
  const SocialIconsWhite =[oned,twod,threed,fourd,fived,sixd]
  return (
    <div className='container-fluid py-5 ' style={{ backgroundColor: DarkMode ? "#141E28" : "#EAEAEA" }}>
      <div className='row' style={{ textAlign: 'right', color: DarkMode ? "#FFF" : "#000" }}>
        <div className='col-12 col-lg-4 order-sm-1 order-lg-5 px-1 mb-md-5 mb-sm-5'>
          <div className='leftDivider  d-none d-lg-block' style={{ width: '1px', height: '230px', backgroundColor:DarkMode?"#2C2C33":"#3636A8", position: "absolute", left: '0' }}></div>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <img className='img-fluid rounded LogoImg mb-3' src={DarkMode ? LogoDark : LogoLight} style={{ width: "150px", height: "100px" }} alt='Logo'></img>
            <p className='p-3'>لغة برمجة عربية بأيدي عربية لكل العرب</p>
            <div className='d-flex '>
              {SocialIconsDark.map((icon ,index , key)=>(
                <a href='#' key={index}>
                  <img className='mr-3' src={ DarkMode ? icon:SocialIconsWhite[index] }  style={{width:"35px"}}></img>
                  </a>
                ))}
            </div>
          </div>
        </div>
        <div className='col-6 col-lg-2 order-lg-1 order-sm-2 text-center text-lg-right'>
          <h5 className='mb-3'>أدوات</h5>
          <ul style={{ color: DarkMode ? "#00D285" : "#008E5A", listStyleType: 'none' }}>
            <li className='mb-3'>
              <a href="#"  style={resetStyles}>
                منصة التطوير
              </a>
            </li>
          </ul>
        </div>
        <div className='col-6 col-lg-2 order-lg-2 order-sm-3 text-center   text-lg-right'>
          <h5 className='mb-3'>الاصدارات</h5>
          <ul style={{ color: DarkMode ? "#00D285" : "#008E5A", listStyleType: 'none' }}>
            <li className='mb-3'>
              <a href="#"  style={resetStyles}>
                الاصدار الحالي (ربحان)
              </a>
            </li>
            <li className='mb-3'>
              <a href="#" className='mb-1' style={resetStyles}>
                الاصدارات
              </a>
            </li>
          </ul>
        </div>
        <div className='col-6 col-lg-2 order-lg-3 order-sm-4 text-center  text-lg-right'>
          <h5 className='mb-3'>تفاعل</h5>
          <ul style={{ color: DarkMode ? "#00D285" : "#008E5A", listStyleType: 'none' }}>
            <li className='mb-3'>
              <a href="#" className='mb-1' style={resetStyles}>
                ساهم مهنا
              </a>
            </li>
            <li className='mb-3'>
              <a href="#" className='mb-1' style={resetStyles}>
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>
        <div className='col-6 col-lg-2 order-lg-4 order-sm-5 text-center text-lg-right pr-5' >
          <h5 className='mb-3 '>تعلم</h5>
          <ul style={{ color: DarkMode ? "#00D285" : "#008E5A", listStyleType: 'none' }}>
            <li className='mb-3'>
              <a href="#" className='mb-1' style={resetStyles}>
                امثلة توضيحية
              </a>
            </li>
            <li className='mb-3'>
              <a href="#" className='mb-1' style={resetStyles}>
                مرجع (عرب)
              </a>
            </li>
            <li className='mb-3'>
              <a href="#" className='mb-1' style={resetStyles}>
                التمارين
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='row d-flex flex-column' style={{ color: DarkMode ? "#FFF" : "#000" }}>
        <div className='HorizontalDivider mx-auto mt-5 ' style={{width:'80%' , height:"1px", backgroundColor:DarkMode?"#2C2C33":"#3636A8"}}></div>
        <p className=' text--md-center text-lg-start ' style={{marginLeft:"10%"}}>لغة عرب - جميع الحقوق محفوظة © 2023</p>
      </div>
    </div>
  );
}

export default Footer;
