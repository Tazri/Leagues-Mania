import React from 'react';
import './MiniData.css'

const MiniData = props => {
    let {type,data,imgIcon} = props;
    return (
        <div className='mini-data'>
            <div className="img-icon">
                <img src={imgIcon} alt="gender" className="data-icon"/>
            </div>
            <h3>{type}: {data}</h3>
        </div>
    );
};

export default MiniData;