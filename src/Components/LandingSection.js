import React from 'react';
import './landingSection.css';
import VideoFile from '../Assets/Videos/Test.mp4'
const LandingSection = ({DarkMode}) => {
  
  return (  
    <div className={` ${DarkMode ? 'containerDark': 'containerLight'} container-fluid ` } style={{marginTop:"50px" }}>
      <div className='py-5 row d-flex justify-content-center '>
        <div className='col-12 col-lg-6 FirstColumn align-items-center justify-content-center' style={DarkMode ? {color:"#FFF"}:{color:"#000"}}>
            <h1 className='mt-4'>لغة البرمجة العربية (عرب)</h1>
            <p >لغة برمجة عربية بأيدي عربية لكل العرب</p>
            <p className='FirstSectionText pt-4'>لغة برمجة متكاملة بالعربية تمكن أي شخص يتحدث العربية من تعلم البرمجة وتطوير البرمجيات. كافة المصطلحات والقواعد باللغة العربية، فيسهل وصفها ودراستها بالعربية دون الحاجة لاستخدام مصطلحات غير عربية.</p>
            <p className='VersionText' style={DarkMode ? {color:"#0BDBDD"}:{color:"#000"}}>الإصدار 1 (ريحان) 🌺</p>
        </div>
        <div className='col-12 col-lg-6 d-flex align-items-center justify-content-center'>
        <iframe 
          src="https://www.youtube.com/embed/9ha0tiabs8w" 
          width="560" 
          height="315" 
          allowFullScreen>
        </iframe>
        </div>
      </div>
      <div className='row  justify-content-center align-content-center ' style={{paddingBottom:'100px'}} >
            <button  style={DarkMode? {backgroundColor:"#00D285" , color:"#000"} :{} } className='btn LandingPageBtn'>تسجيل دخول</button>
      </div>
    </div>
  );
}

export default LandingSection;
