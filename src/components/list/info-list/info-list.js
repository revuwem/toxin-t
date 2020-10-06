import React from 'react';

import './info-list.scss';

const InfoList = ({ info }) => {

    const infoItems = info.map((item, idx) => (
        <InfoListItem key={idx} info={item} />
    ));

    return (
        <ul className="info-list">
            {infoItems}
        </ul>
    );
};


const InfoListItem = ({ info }) => {
    const { icon, name, description } = info;

    return (
        <li className="info-list__item">
            <div>
                <img src={icon} alt="" />
            </div>
            <div>
                <p>
                    <span><b>{name}</b></span>
                    {description}
                </p>
            </div>

        </li>
    );
}

export default InfoList;