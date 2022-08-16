import * as React from 'react';
import IRoomProps from '../../models/IRoomProps';
import Star from "./../../assets/images/icons/star.svg";
import { motion, AnimatePresence } from "framer-motion";

const RoomCard: React.FC<IRoomProps> = ({id,imgUrl,index, title, label = '',rating,description}: IRoomProps) => {
    return (
        <AnimatePresence exitBeforeEnter>
              <motion.div
                key={id ? id : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: index + 0.5 }}
              >
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
              </motion.div>
            </AnimatePresence>
      
    );
};

export default RoomCard;