import React from 'react';

import './rules-list.scss';

const RulesList = ({rules}) => {
    
    const rulesItems = rules.map((item, idx)=>(
        <RulesListItem key={idx} rule={item} />
    ));
    
    return (
        <ul className="rules-list">
            {rulesItems}
        </ul>
    );
};

const RulesListItem = ({rule}) => {
    
    return (
        <li className="rules-list__item">
            {rule}
        </li>
    );
};

export default RulesList;

