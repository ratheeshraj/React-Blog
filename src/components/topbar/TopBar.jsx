
import { Link } from "react-router-dom";
import "./topbar.css"
import img from './user.jpg'
export default function TopBar() {
    const user = true;
  return (
   <div className="top">
    <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
    <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
               <Link className="link" to='/'>Home</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to='/sidebar'>About</Link>
            
            </li>
            <li className="topListItem">
            <Link className="link" to='/settings'>{
             user && "Settings"
            
            }
             
             </Link>
            </li>
            <li className="topListItem">
            <Link className="link" to='/write'>Write</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to='/'>{user && "Logout"}</Link>
            </li>
        </ul>
   </div>

    <div className="topRight">
        {
            user ? (
                <img 
                className="topImg" 
                src={img} alt="Background" />
            ) :   ( 
                <ul className="topList">
                    <li className="topListItem"> 

                    <Link className="link" to="/login"> Login </Link>
                    </li>

                    <li className="topListItem"> 
                    <Link className="link" to="/register">Register</Link>
                    </li>

                </ul>
            )
        }
       
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    
    </div>
   </div>
  )
}
