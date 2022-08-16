import * as React from 'react';
import {rooms} from '../../data/rooms.js'; 
import IRoomProps from '../../models/IRoomProps.js';
import RoomCard from './RoomCard.js';
import { motion, AnimatePresence } from "framer-motion";
interface IProps{
    location: string,
    maximumSeat: number
};

const RoomList: React.FC<IProps> = React.memo(({location = 'Finland',maximumSeat = 12}: IProps) => {
    
    return (
      <div className='room-list'>
        <AnimatePresence exitBeforeEnter>
            <motion.div
            key={location ? location : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
            >
            <div className="room-list__header">
                <h2 className="room-list__header__location">Stays in {location}</h2>
                <h3 className="room-list__header__total-seat">{maximumSeat}+ stays</h3>
            </div>
            </motion.div>
        </AnimatePresence>
        
        <div className="room-list__rooms">
            {rooms?.map((room: IRoomProps, index)=>{
                return (
                    <RoomCard 
                        id={room.id}
                        imgUrl={room.imgUrl} 
                        title={room.title} 
                        label={room.label} 
                        rating={room.rating} 
                        description={room.description}
                        index={index+1}
                    />
                );
            })}
        </div>
      </div>
    );
});

export default RoomList;