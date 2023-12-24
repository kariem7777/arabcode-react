import React from 'react'

const Section5 = ({DarkMode}) => {
  return (
    <div className='container-fluid d-flex flex-column align-items-center justify-content-center' style={{backgroundColor: DarkMode? "#101014": "#FFF" , color:DarkMode?'white':'black'}}>
        <div className='row'>
            <h2 className='py-5' style={{textAlign:"center"}}>المساهمين من الوطن العربي</h2>
        </div>
        <div className='row d-flex flex-column align-items-center justify-content-center' >
            <p className='px-5 text-center' style={{ textAlign:'right',maxWidth:'700px' }}>تشجع بعض المساهمين من الوطن العربي للمساهمة بالفكر والجهد لإثراء المشروع. نبحث عن كل من لديه الرغبة في المساهمة سواء فنية أو لغوية أو إعلامية لاستكمال مسيرة الحلم العربي – لغة برمجة عربية بأيدي عربية تستخدم في كل المجالات. بادر وساهم معنا ليصبح اسمك في قائمة المساهمين في أول لغة برمجة عربية متكاملة.</p>
        </div>
        <button className='SignupButton btn my-2 mt-5' style={{color: DarkMode? "#00D285" : "#008E5A" , backgroundColor: DarkMode?"#101014":"#FFFFFF" , border:DarkMode?"1px solid #00D285" :"1px solid #008E5A" , width:"300px"}}>انشاء حساب</button>
        <button  className='btn LandingPageBtn my-2 mb-5' style={DarkMode? {backgroundColor:"#00D285" , color:"#000" ,width:"300px"} :{width:"300px"} } >
          ابدأ مشروعك الاول
        </button>
    </div>
  )
}

export default Section5