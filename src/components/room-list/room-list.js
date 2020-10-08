import React from 'react';

import RoomListItem from '../room-list-item';

import './room-list.scss';

const RoomList = ({rooms}) => {

    const roomsItems = rooms.map((item) => (
        <RoomListItem key={item.id} room={item} />
    ));

    return (
        <ul className="room-list">
            {roomsItems} 
        </ul>
    );
}

export default RoomList;