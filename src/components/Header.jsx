import { useState } from "react";
import "./header.css";
import logo from "../images/logo-color.svg";
import burger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

// const Header = () => {
//   const [menu, setMenu] = useState(false);

//   const links = ["Home", "About", "Contact", "Blog", "Careers"];

//   const changeMenu = () => {
//     setMenu(!menu);
//   };

//   return (
//     <>
//       <header className="menu desktop-links">
//         <img src={logo} alt="Logo" />
//         <nav>
//           <ul className="nav-links">
//             {links.map((link, index) => (
//               <li key={index} className="nav-link">
//                 {link}
//               </li>
//             ))}
//           </ul>
//         </nav>
//         <button className="request mobile-btn">Request Invite</button>
//       </header>

//       {menu ? (
//         <header className="menu mobile-links">
//           <img src={logo} alt="Logo" />
//           <nav>
//             <ul className="nav-links">
//               {links.map((link, index) => (
//                 <li key={index} className="nav-link">
//                   {link}
//                 </li>
//               ))}
//             </ul>
//           </nav>
//           <img
//             src={close}
//             alt="Close Button"
//             className="close-btn"
//             onClick={changeMenu}
//           />
//         </header>
//       ) : (
//         <header className="menu mobile-links">
//           <img src={logo} alt="Logo" />
//           <img
//             src={burger}
//             alt="Hamburger Menu Icon"
//             className="burger-btn"
//             onClick={changeMenu}
//           />
//         </header>
//       )}
//     </>
//   );
// };

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "About", "Contact", "Blog", "Careers"];

  return (
    <header className="header">
      <nav className="header-nav">
        <a href="/" className="header-logo">
          <img src={logo} alt="Logo" />
        </a>
        <div className="header-links">
          {links.map((link, index) => (
            <a href="#" key={index} className="header-link">
              {link}
            </a>
          ))}
        </div>
        <button className="request mobile-btn">Book a Free Consultation</button>
        <button onClick={() => setIsOpen(!isOpen)} className="btn">
          <img src={isOpen ? close : burger} alt="" className="btn-img" />
        </button>
        <div className={`header-mobile ${isOpen ? "show" : ""}`}>
          {links.map((link, index) => (
            <a href="#" key={index} className="header-link">
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
