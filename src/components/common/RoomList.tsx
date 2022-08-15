import * as React from 'react';
import {rooms} from '../../data/rooms.js'; 
import IRoomProps from '../../models/IRoomProps.js';
import RoomCard from './RoomCard.js';

interface IProps{
    location: string,
    maximumSeat: number
};

const RoomList: React.FC<IProps> = React.memo(({location = 'Finland',maximumSeat = 12}: IProps) => {
    
    return (
      <div className='room-list'>
        <div className="room-list__header">
            <h2 className="room-list__header__location">Stays in {location}</h2>
            <h3 className="room-list__header__total-seat">{maximumSeat}+ stays</h3>
        </div>
        <div className="room-list__rooms">
            {rooms?.map((room: IRoomProps)=>{
                return (
                    <RoomCard 
                        id={room.id}
                        imgUrl={room.imgUrl} 
                        title={room.title} 
                        label={room.label} 
                        rating={room.rating} 
                        description={room.description}
                    />
                );
            })}
        </div>
      </div>
    );
});

export default RoomList;