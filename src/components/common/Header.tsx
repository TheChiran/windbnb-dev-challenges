import React,{useState} from 'react';
import logo from "./../../assets/images/static/logo.svg";
import search from "./../../assets/images/icons/search_icon.svg";
import Drawer from './Drawer';
// import Drawer from 'react-modern-drawer';

// //import styles 👇
// import 'react-modern-drawer/dist/index.css'

const Header = ({openDrawer}) => {
    const [isOpen,setIsOpen] = useState(false);

    return (
      <header>
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo image" />
          </a>
        </div>
        <div className="search_section" onClick={openDrawer}>
          <div className="search_section__item">
            <p>Helsinki, Finland</p>
          </div>
          <div className="search_section__item">
            <p>Add Guests</p>
          </div>
          <div className="search_section__item">
            <img src={search} alt="" />
          </div>
        </div>
      </header>
    );
};

export default Header;