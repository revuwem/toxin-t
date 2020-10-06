import React from 'react';

import './responses-list.scss';

const ResponsesList = ({ responses }) => {

    const responsesItems = responses.map((item, idx) => (
        <ResponsesListItem key={idx} response={item} />
    ));

    return (
        <ul className="responses-list">
            {responsesItems}
        </ul>
    );
};

const ResponsesListItem = ({ response }) => {

    const { author, userpic, date, text, likes } = response;

    return (
        <li className="responses-list__item">
            <header>
                <div>
                    <img src={userpic} alt="" />
                </div>
                <div>
                    <h3>{author}</h3>
                    <span>{date}</span>
                </div> 
            </header>
            <p>{text}</p>
            <span>{likes} понравилось</span>
        </li>
    );
};

export default ResponsesList;