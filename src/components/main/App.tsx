import * as React from 'react';
import { useState } from 'react';
import Header from '../common/Header';
import RoomList from '../common/RoomList';
import "./../../assets/styles/style.scss";
import Drawer from 'react-modern-drawer';

//import styles 👇
import 'react-modern-drawer/dist/index.css'

const App: React.FC = () => {
    const [isOpen,setIsOpen] = useState(false);

    return (
      <div className='container'>
        <Header openDrawer={()=> setIsOpen(true)}/>
        <RoomList location={'Finland'} maximumSeat={12}/>
        <footer>
        <p>Created by <a href="https://chirantonmoy.vercel.app/">chiranSWE</a> - devChallenges.io</p>
      </footer>

      <Drawer
            open={isOpen}
            onClose={()=> setIsOpen(false)}
            direction='top'
            className='bla bla bla'
        >
            <div>Hello World</div>
        </Drawer>
      </div>
    );
};

export default App;  