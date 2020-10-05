import React from 'react';

import './room-list-item.scss';

const RoomListItem = () => {
    return (
        <li className="room-list-item">
            <div className="room-list-item__gallery">
                <img src="/images/rooms/image.png" alt="Двухспальный номер с кондиционером" />
            </div>
            <div className="room-list-item__wrapper">
                <div className="room-list-item__inner">
                    <h3>№ 840</h3>
                    <p><span>9 900 Р</span> в сутки</p>
                </div>
                <hr />
                <div className="room-list-item__inner">
                    <a href="" className="room-list-item__link">
                        <img src="/images/rating/4.png" alt="4 звезды" />
                    </a>
                    <a href="#" className="room-list-item__link">
                        <p><span>65</span> отзывов</p>
                    </a>
                </div>
            </div>

        </li>
    );
}

export default RoomListItem;