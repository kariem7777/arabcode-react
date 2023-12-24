import './navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCloudMoon,faUserPlus,faBars } from '@fortawesome/free-solid-svg-icons';
import LogoLight from '../Assets/Images/Logo.png'
import LogoDark from '../Assets/Images/LogoDark.png'
import { useEffect } from 'react';
const Navbar = ({DarkMode , ToggleDarkMode}) => {

  
  return (
<>
<nav className={`fixed-top ${DarkMode ? 'navDarkMode' : 'navLightMode'} navbar navbar-expand-lg navbar-light bg-light  `}>
        <img className='img-fluid rounded LogoImg d-none d-lg-block' src={DarkMode? LogoDark: LogoLight}></img>
        {/* Button used to toggle the Navbar to  open and close it ; when the screen is minimized */}
        <button style={{backgroundColor :"inherit" , border:'0'}  } className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon  icon={faBars}  style={{color : DarkMode ? "#FFF":"green" , cursor:"pointer" ,fontSize:'30px'}}/>
        </button>
        <div className='d-flex d-block d-lg-none'>
                <FontAwesomeIcon  icon={faCloudMoon} onClick={ToggleDarkMode} style={{color : DarkMode ? "#FFF":"green" , cursor:"pointer" ,fontSize:'20px'}}/>
                <FontAwesomeIcon icon={faUserPlus} style={{color:DarkMode ? "white":"green" ,cursor:"pointer" , fontSize:'20px'}} className='mr-4' />
        </div>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <img className='img-fluid rounded LogoImg d-block d-lg-none mx-auto' src={DarkMode? LogoDark: LogoLight} style={{width:"150px" , hegiht:"150px"}}></img>
            <ul className={`${DarkMode? 'nav-Items-DarkMode': 'nav-Items-LightMode'} navbar-nav ml-auto p-0`} style={{textAlign:"right"}}>
                <li className="nav-item active ml-3">
                    <a className="nav-link" href="#">منصة التطوير </a>
                </li>
                <li className="nav-item active ml-3">
                    <a className="nav-link" href="#">أمثلة توضيحية</a>
                </li>
                <li className="nav-item active ml-3">
                    <a className="nav-link" href="#">بنية باستخدام (عرب)</a>
                </li>
                <li className="nav-item active ml-3">
                    <a className="nav-link " href="#">مرجع (عرب)</a>
                </li>
                <li className="nav-item active ml-3">
                    <a className="nav-link " href="#">التمارين</a>
                </li>
            </ul>
        
        </div>
        <div className='d-none d-lg-block'>
            <ul className={`${DarkMode? 'nav-Items-DarkMode': 'nav-Items-LightMode'} navbar-nav lastNav mt-2`}>
                <li className="nav-item my-auto  icon">
                    <FontAwesomeIcon  icon={faCloudMoon} onClick={ToggleDarkMode} style={{color  : DarkMode?"#FFF":"#000" , cursor:"pointer"}}/>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">تسجيل الدخول</a>
                </li>
                <li className="nav-item ">
                    <button className='SignupButton btn' style={DarkMode ? {color:"#FFF"}:{color:"#000"}}>انشاء حساب</button>
                </li>
            </ul>
        </div>
</nav>
    </>
  )
}

export default Navbar