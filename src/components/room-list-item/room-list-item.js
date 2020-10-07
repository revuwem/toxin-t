import React from 'react';

import './room-list-item.scss';

const RoomListItem = ({room}) => {

    const {id, prestige, price, rating, tileImage, responses } = room;
    const responsesCount = responses.reduce((acc, idx) => acc+1, 0);

    return (
        <li className="room-list-item">
            <div className="room-list-item__tile">
                <img src={tileImage} alt="" />
            </div>
            <div className="room-list-item__wrapper">
                <div className="room-list-item__inner">
                    <h3>№ {id} <span>{prestige}</span></h3>
                    <p><span>{price} Р</span> в сутки</p>
                </div>
                <hr />
                <div className="room-list-item__inner">
                    <a href="" className="room-list-item__link">
                        <img src={`/images/rating/${rating}.png`} alt={`${rating} звезды`} />
                    </a>
                    <a href="#" className="room-list-item__link">
                        <p><span>{responsesCount}</span> отзывов</p>
                    </a>
                </div>
            </div>

        </li>
    );
}

export default RoomListItem;