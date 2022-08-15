import React,{useState} from 'react';
import logo from "./../../assets/images/static/logo.svg";
import search from "./../../assets/images/icons/search_icon.svg";
// import Drawer from './Drawer';
import { Button, Drawer, Placeholder } from 'rsuite';
import SearchHotel from './SearchHotel';

const Header = () => {
    const [isOpen,setIsOpen] = useState(false);

    return (
      <header>
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo image" />
          </a>
        </div>
        <div className="search_section" onClick={()=> setIsOpen(true)}>
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

        
        <Drawer className='search-hotel-parent' backdrop placement={'top'} open={isOpen} onClose={() => setIsOpen(false)}>
          <SearchHotel/>
        </Drawer>
      </header>
    );
};

export default Header;