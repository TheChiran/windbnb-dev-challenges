import * as React from 'react';
import searchIcon from './../../assets/images/icons/search_icon_white.svg';
import locationIcon from './../../assets/images/icons/location.svg';
import {locations} from './../../data/hotel-locations.js';
import { useState } from 'react';
import IGuestCounterProps from '../../models/IGuestCounterProps';

const GuestCounter: React.FunctionComponent<IGuestCounterProps> = ({title,subTitle,count,onIncrement,onDecrement}: IGuestCounterProps) => {
    return (
      <div className="guest-counter">
        <div className="guest-counter__contents">
            <h2 className="guest-counter__contents__title">{title}</h2>
            <h2 className="guest-counter__contents__sub-title">{subTitle}</h2>
        </div>
        <div className="guest-counter__count">
            <div className="guest-counter__count__decrement" onClick={onDecrement}></div>
            <div className="guest-counter__count__total">{count}</div>
            <div className="guest-counter__count__increment" onClick={onIncrement}></div>
        </div>
      </div>
    );
};

export default GuestCounter;