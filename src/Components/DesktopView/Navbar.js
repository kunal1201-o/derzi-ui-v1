import React,{useState} from 'react'
import { FaBars, FaMailBulk, FaPhoneAlt, FaSearch, FaUser, FaUserCircle, FaWhatsapp } from 'react-icons/fa'

import { SidebarData } from '../SidebarData';
import {Link, useHistory} from 'react-router-dom'
import './desktop.css'
const Navbar = () => {
    let history =useHistory();
    const [sidebar , setSidebar] = useState(false);
    const showSidebar =()=>setSidebar(!sidebar);
    return (
        <>
        <div className="nav-container">
           <div className="left">
            <FaBars onClick={showSidebar}/> <span>Darzi</span>
          </div> 
          <div className="middle">
           <input type="text" placeholder="Search for Products "  />
          </div>
          <div className="end">
           <FaUser/>
          </div>
        </div>
           <nav className={sidebar ? 'nav-menu active' :'nav-menu'}>
           <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                  
             <div className="menu">
             <h3>Darzi</h3>
             </div>
           
                 
            
                 
                  
              </li>
              <div className="profile" onClick={()=>{history.push('/Login')}} >
                 <div className="pic">
                     
                    <FaUserCircle  />
                 </div>
                 <div className="des">
                     <h6>Login and Register</h6>
                     <p>Please Login and create account for free</p>
                 </div>
             </div>
    
             {SidebarData.map((item,index)=>{
                 return(
                     <>
                     <li key={index} className={item.cName}>
                         <Link to={item.path}  >
                            <span className="iconic">{item.icon}</span> 
                             <span>{item.title}</span>
                         </Link>
                     
                     </li>
                     </>
                 );
             })}
             <div className="con">
{/* 
             <h4 className="text-dark"><FaWhatsapp/><a href="https://wa.me/8220064679 " target='_blank' rel="noreferrer" >8220064679</a></h4>
             <h4 className="text-dark"><FaPhoneAlt/><a href="tel:+918220064679">8220064679</a></h4>
             <h4 className="text-dark"><FaMailBulk/><a href="mailto:darzi0133@gmail.com">darzi0133@gmail.com</a></h4>
             */}
              </div>
             </ul>
              <div className="side-footer">
                  <div className="footer-box">
                  <h4 className="text-dark"><a href="https://wa.me/8220064679 " target='_blank' rel="noreferrer" ><FaWhatsapp/></a></h4>
                  </div>
                  <div className="footer-box">
                  <h4 className="text-dark"><a href="tel:+918220064679"><FaPhoneAlt/></a></h4>
                      </div>
                      <div className="footer-box">
                      <h4 className="text-dark"><a href="mailto:darzi0133@gmail.com"><FaMailBulk/></a></h4>
                      </div>
                      <div className="footer-box">
                      pdf
                      </div>
              </div>
             </nav>
             </>
    )
}

export default Navbar
