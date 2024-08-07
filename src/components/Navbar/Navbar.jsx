import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = React.useState(false)
  return(
 <nav className='app__navbar'>
<div className="app__navbar-logo">
  <img src={images.gericht} alt="logo" />
</div>
<ul className="app__navbar-links">
  <li className="p__opensans"><a href="#home">Home</a></li>
  <li className="p__opensans"><a href="#about">About</a></li>
  <li className="p__opensans"><a href="#Menu">Menu</a></li>
  <li className="p__opensans"><a href="#awards">Awards</a></li>
  <li className="p__opensans"><a href="#contact">Contact</a></li>
</ul>
<div className="app__navbar-login">
  <a href="#login" className='p__opensans'>Log in/Registration</a>
  <div/>
  <a href="/" className='p__opensans'>Book Table</a>
</div>
<div className="app__navabar-smallscreen">
  <GiHamburgerMenu fontSize={27} color = "#fff" onClick={()=>setToggleMenu(true)}/>
  {toggleMenu && (
<div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
  <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>setToggleMenu(false)}/>
  <ul className="app__navbar-smallscreen-links">
  <li className="p__opensans"><a href="#home">Home</a></li>
  <li className="p__opensans"><a href="#about">About</a></li>
  <li className="p__opensans"><a href="#Menu">Menu</a></li>
  <li className="p__opensans"><a href="#awards">Awards</a></li>
  <li className="p__opensans"><a href="#contact">Contact</a></li>
</ul>
</div>
  )}
</div>
 </nav>

)
}

export default Navbar;
