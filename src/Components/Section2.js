import React, { useEffect }  from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import BGWhite from '../Assets/Images/BG-White.png'
import BGDark from '../Assets/Images/BG-Dark.png'
import Typed from 'typed.js';
import './section2.css'

const Section2 = ({DarkMode}) => {
  useEffect(() => {
    const firstBox = document.querySelector('.firstBoox');
    const secondBox = document.querySelector('.secondBoox');

    const firstString = [
      `<span style="${DarkMode ? 'color: #FFF;' : 'color: #000;'}">درجة الحرارة المئوية المساوية ل77 فهرناهيت: 25 🌡</span>`,
    ];

    const secondStrings = [
      `<span style="${DarkMode ? 'color: #F9F905;' : 'color: red;'}">مهمة</span> مئوي (فهرنهايت) `,
      '{',
      `<span style="${DarkMode ? 'color: #F9F905;' : 'color: red;'}">ارجاع</span> (<span style="${DarkMode ? 'color: #0BDBDD;' : 'color: green;'}">9</span>/<span style="${DarkMode ? 'color: #0BDBDD;' : 'color: green;'}">5</span>) * (فهرنهايت - 32) ;`,
      '}',
      `<span style="${DarkMode ? 'color: #F9F905;' : 'color: red;'}">اطبع</span> (<span style="${DarkMode ? 'color: #0BDBDD;' : 'color: green;'}">  درجة الحرارة المئوية المساوية ل (77) فهرنهايت:</span> <span style="${DarkMode ? 'color: #FFF;' : 'color:#000;'}">+مئوي </span> (<span style="${DarkMode ? 'color: #0BDBDD;' : 'color: green;'}">77</span>) <span>;"</span> `,
    ];

    const firstOptions = {
      strings: firstString,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      showCursor: false,
      startDelay: 11000,
      loop: true,
      
    };

    const secondFormattedString = secondStrings.join('<br>');
    const secondOptions = {
      strings: [secondFormattedString],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 7000,
      showCursor: false,
      loop: true,
      
    };
    const firstTyped = new Typed(firstBox, firstOptions);
    const secondTyped = new Typed(secondBox, secondOptions);
    return () => {
      firstTyped.destroy();
      secondTyped.destroy();
    };
  }, [DarkMode]);
  
  return (  
    <div className = 'container-fluid  ' style={{position:'relative' , zIndex:'3'}}>
      <div className='yarab' style={{backgroundImage: DarkMode ? `url(${BGDark})` : `url(${BGWhite})`}}></div>
        <div className='row justify-content-center align-items-center mb-5 ' >
          <h2 style={DarkMode ? {color:"#FFF"}:{color:"#000"}}>أمثلة توضيحية</h2>
        </div>
        <div className='row d-flex justify-content-center  align-items-center justify-content-md-end'>
        <div className="dropdown text-center" style={{ position: 'relative', zIndex: 1000 }}>
          <button style={DarkMode ? { color: "#00D285", backgroundColor: "#141E28" } : { color: "#000", backgroundColor: "#FFF" }} className="btn btn-secondary dropdown-toggle drowdown-btn  mb-5" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            اختر المثال
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ zIndex: 1001 }}>
            <a className="dropdown-item" href="#">مثال 1 </a>
            <a className="dropdown-item" href="#">مثال 2 </a>
            <a className="dropdown-item" href="#">مثال 3 </a>
          </div>
        </div>
        </div>
      <div className='row section2'>
        <div style={DarkMode ? {  backgroundColor: "#050A10",border: '2px solid #AEBFD1' } : { }} className='col-11 col-lg-5 code-box mx-auto'>
          <div style={DarkMode ? {  backgroundColor: "#AEBFD1" } : { }}className='TopBanner'>
            <div style={DarkMode ? {  color: "#AEBFD1" , backgroundColor:'#050A10' } : { }} className='TopRight  d-flex justify-content-center align-items-center'>
              <p style={DarkMode ? {  color: "#AEBFD1" } : { }} className='mt-1'>النتيجة</p>
            </div>
          </div>
          <div style={DarkMode? {backgroundColor:"#2F4052" } :{}}className="leftScroll"></div>
          <div style={DarkMode ? {  color: "#AEBFD1" , backgroundColor:'#050A10' } : { }} className="line-numbers ">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div  className="code-content firstBoox">
          </div>
        </div>
        <div className='col-11 col-lg-5 code-box mx-auto' style={DarkMode ? {  backgroundColor: "#050A10",border: '2px solid #AEBFD1' } : { }} >
        <div style={DarkMode ? {  backgroundColor: "#AEBFD1" } : { }}className='TopBanner'>
            <div style={DarkMode ? {  color: "#AEBFD1" , backgroundColor:'#050A10' } : { }} className='TopRight  d-flex justify-content-center align-items-center'>
              <div className='d-flex my-2 justify-content-center align-items-center'>
                <FontAwesomeIcon icon={faCircle} className='mx-2 Icon' size='xs' />
                <FontAwesomeIcon icon={faCircle} className='mx-2 Icon ' size='xs' />
                <FontAwesomeIcon icon={faCircle} className='mx-2 Icon' size='xs' />
              </div>
            </div>
          </div>
          <div style={DarkMode ? {  color: "#AEBFD1" , backgroundColor:'#050A10' } : { }} className="line-numbers ">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div style={DarkMode? {backgroundColor:"#2F4052" } :{}}className="leftScroll"></div>
          <div style={DarkMode? { color: '#FFF' } : {color:'#000'}} className="code-content secondBoox ">
            
          </div>
        </div>
      </div>
      <div className='row justify-content-center align-items-center pt-5 '  >
        <button  style={DarkMode? {backgroundColor:"#00D285" , color:"#000"} :{}} className='btn LandingPageBtn mb-3'>
          ابدأ مشروعك الاول
        </button>
        </div>
    </div>
  )
}

export default Section2