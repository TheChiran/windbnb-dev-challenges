import * as React from 'react';
import searchIcon from './../../assets/images/icons/search_icon_white.svg';
import locationIcon from './../../assets/images/icons/location.svg';
import {locations} from './../../data/hotel-locations.js';
import { useState } from 'react';
import GuestCounter from './GuestCounter';

const SearchHotel: React.FunctionComponent = ({}) => {
    const [activeTab,setActiveTab] = useState('location');
    const [adultGuestCount,setAdultGuestCount] = useState(0);
    const [childrenGuestCount,setChildrenGuestCount] = useState(0);
    const [totalGuestCount,setTotalGuestCount] = useState(0);

    const onAdultGuestCountIncrement = ()=>{
      let newAdultGuest = adultGuestCount + 1;
      let totalGuest = newAdultGuest + childrenGuestCount;
      setTotalGuestCount(totalGuest)
      setAdultGuestCount(newAdultGuest);
    };

    const onAdultGuestCountDecrement = ()=>{
      if(adultGuestCount === 0) return;
      setAdultGuestCount((prevState)=> prevState - 1);
    };

    const onChildrenGuestCountIncrement = ()=>{
      let newChildrenGuest = adultGuestCount + 1;
      let totalGuest = newChildrenGuest + childrenGuestCount;
      setTotalGuestCount(totalGuest)
      setChildrenGuestCount(newChildrenGuest);
    };

    const onChildrenGuestCountDecrement = ()=>{
      if(adultGuestCount === 0) return;
      setAdultGuestCount((prevState)=> prevState - 1);
    };

    return (
      <div className="search-hotel">
        <div className="contents">
          <div className="contents__location">
            <h2 className="contents__location__sub-title">Location</h2>
            <h2 className="contents__location__title">Helsinki, Finland</h2>
          </div>
          <div className="contents__guests">
            <h2 className="contents__guests__sub-title">Guests</h2>
            <h2 className="contents__guests__title">
              {totalGuestCount === 0 ? 'Add guests': totalGuestCount}
            </h2>
          </div>
          <div className="contents__search">
            <button>
              <img src={searchIcon} alt="" />
              Search
            </button>
          </div>
        </div>
        <div className="search-hotel-results">
          <div className="search-hotel-results__location">
            <ul>
              {locations.map((location)=>{
                return (
                  <li><img src={locationIcon} alt="" /> {location}</li>
                )
              })}
            </ul>
          </div>
          <div className="search-hotel-results__guests">
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
          </div>
          <div className="search-hotel-results__searchbar"></div>
        </div>
      </div>
    );
};

export default SearchHotel;