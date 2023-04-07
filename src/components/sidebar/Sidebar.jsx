import "./sidebar.css"
import img from "./about.jpg"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Us</span>
        <img src={img} alt=""/>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div className="sidebarItem">
       <span className="sidebarTitle">Categories</span>
       <ul>
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sports</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cineman</li>
       </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarsocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    
    </div>
  )
}
