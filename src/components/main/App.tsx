import * as React from 'react';
import { useState } from 'react';
import Header from '../common/Header';
import RoomList from '../common/RoomList';
import "./../../assets/styles/style.scss";
import Drawer from 'react-modern-drawer';

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import SearchHotel from '../common/SearchHotel';

const App: React.FC = () => {

    return (
      <div className='container'>
        <Header/>
        <RoomList location={'Finland'} maximumSeat={12}/>
        <footer>
        <p>Created by <a href="https://chirantonmoy.vercel.app/">chiranSWE</a> - devChallenges.io</p>
      </footer>
      </div>
    );
};

export default App;  