import * as React from 'react';
import searchIcon from './../../assets/images/icons/search_icon_white.svg';
import locationIcon from './../../assets/images/icons/location.svg';
import {locations} from './../../data/hotel-locations.js';
import { useState } from 'react';
import GuestCounter from './GuestCounter';
import { Callback } from '../../types/Callback';
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onClose: Callback
}

const SearchHotel: React.FunctionComponent<Props> = ({onClose}: Props) => {
    const [activeTab,setActiveTab] = useState('location');
    const [adultGuestCount,setAdultGuestCount] = useState(0);
    const [childrenGuestCount,setChildrenGuestCount] = useState(0);
    const [totalGuestCount,setTotalGuestCount] = useState(0);
    const [location,setLocation] = useState(0);

    const onAdultGuestCountIncrement = ()=>{
      let newAdultGuest = adultGuestCount + 1;
      let totalGuest = newAdultGuest + childrenGuestCount;
      setTotalGuestCount(totalGuest)
      setAdultGuestCount(newAdultGuest);
    };

    const onAdultGuestCountDecrement = ()=>{
      if(adultGuestCount === 0) return;
      setAdultGuestCount((prevState)=> prevState - 1);
      setTotalGuestCount((prevState)=> prevState - 1);
    };

    const onChildrenGuestCountIncrement = ()=>{
      let newChildrenGuest = childrenGuestCount + 1;
      let totalGuest = newChildrenGuest + adultGuestCount;
      setTotalGuestCount(totalGuest)
      setChildrenGuestCount(newChildrenGuest);
    };

    const onChildrenGuestCountDecrement = ()=>{
      if(childrenGuestCount === 0) return;
      setChildrenGuestCount((prevState)=> prevState - 1);
      setTotalGuestCount((prevState)=> prevState - 1);
    };

    return (
      <div className="search-hotel">
        <div className="search-hotel__header">
            <p>Edit your search</p>
            <div className="search-hotel__header__cross" onClick={onClose}></div>
          </div>
        <div className="contents">
          
          <div className={`contents__location ${activeTab === 'location' && 'active-tab'}`} onClick={()=> setActiveTab('location')}>
            {activeTab === 'location' && <motion.div transition={{ duration: 0.5 }}className="activity" layoutId="activity"/>}
            
            <h2 className="sub-title">Location</h2>
            <h2 className="title">{locations[location]}</h2>
          </div>

          <div className={`contents__guests ${activeTab === 'guest' && 'active-tab'}`} onClick={()=> setActiveTab('guest')}>
          {activeTab === 'guest' && <motion.div transition={{ duration: 0.5 }} className="activity" layoutId="activity"/>}

            <h2 className="sub-title">Guests</h2>
            <h2 className="title">
              {totalGuestCount === 0 ? 'Add guests': totalGuestCount > 1 ? `${totalGuestCount} guests` : `${totalGuestCount} guest`}
            </h2>
          </div>
          <div className="contents__search">
            <button onClick={onClose}>
              <img src={searchIcon} alt="" />
              Search
            </button>
          </div>
        </div>

        <div className="search-hotel-results">
          
          <div className={`search-hotel-results__location`}>
          
          {activeTab === 'location' && 
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={activeTab ? activeTab : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul>
                  {locations.map((location,index)=>{
                    return (
                      <li key={location.id} onClick={()=> setLocation(index)}><img src={locationIcon} alt="" /> {location}</li>
                    )
                  })}
                </ul>
              </motion.div>
            </AnimatePresence>
            }
          </div>

          
          <div className="search-hotel-results__guests">
          {activeTab === 'guest' && 
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={activeTab ? activeTab : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <GuestCounter 
                title='Adults' 
                subTitle='Ages 13 or above' 
                count={adultGuestCount}
                onIncrement={onAdultGuestCountIncrement}
                onDecrement={onAdultGuestCountDecrement}
                />

              <GuestCounter 
                title='Children' 
                subTitle='Ages 2-12' 
                count={childrenGuestCount}
                onIncrement={onChildrenGuestCountIncrement}
                onDecrement={onChildrenGuestCountDecrement}
                />
              </motion.div>
            </AnimatePresence>
          }
          </div>
          
          <div className="search-hotel-results__searchbar"></div>
        </div>

        <div className="search-mobile">
            <button onClick={onClose}>
              <img src={searchIcon} alt="" />
              Search
            </button>
          </div>
      </div>
    );
};

export default SearchHotel;