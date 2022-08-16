import * as React from 'react';
import IRoomProps from '../../models/IRoomProps';
import Star from "./../../assets/images/icons/star.svg";

const RoomCard: React.FC<IRoomProps> = ({id,imgUrl,index, title, label = '',rating,description}: IRoomProps) => {
    return (
      <div className="room" key={id}>
        <div className="room__image-wrapper">
            <img src={imgUrl} alt={title} />
        </div>
        <div className="room__details">
            <div className="room__details__detail">
                <div className="room__details__detail__title">
                {label !== '' && <span className='room__details__detail__title__label'>{label}</span>}
                <h2>{title}</h2>
                </div>
                <div className="room__details__detail__rating">
                    <span>
                        <img src={Star} />
                    </span>
                    <span>{rating}</span>
                </div>
            </div>
            <h2 className="room__details__description">{description}</h2>
        </div>
      </div>
    );
};

export default RoomCard;