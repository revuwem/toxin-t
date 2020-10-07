import React from 'react';

import { FilterForm } from '../../forms';
import RoomList from '../../room-list';

import './rooms-page.scss';
import RoomsService from '../../../services/rooms-service';


const RoomsPage = () => {

    const roomsService = new RoomsService();
    const rooms = roomsService.getData();

    return (
        <main className="page" id="rooms-page">
            <div className="page__wrapper">
                <aside>
                    <FilterForm />
                </aside>
                <section>
                    <h2>Номера, которые мы для вас подобрали</h2>
                    <RoomList rooms={rooms} />
                </section>
            </div>
        </main>

    );
}

export default RoomsPage;
