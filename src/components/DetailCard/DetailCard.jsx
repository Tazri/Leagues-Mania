import React from 'react';
import male from './../../img/photo/male.png'
import female from './../../img/photo/female.png'
import './DetailCard.css'
import foundedIcon from './../../img/icon/founded.png';
import flag from './../../img/icon/flag.png';
import football from './../../img/icon/football.png';
import genderIcon from './../../img/icon/gender.png';
import MiniData from './MiniData/MiniData';

const DetailCard = props => {
    const { gender, name,type,country,founded } = props;


    return (
        <div className="detail-card">
            <div>
                <h1>{name}</h1>

                <MiniData type={'Founded'} data={founded} imgIcon={foundedIcon}/>
                <MiniData type={'Country'} data={country} imgIcon={flag} />
                <MiniData type={'Type'} data={type} imgIcon={football} />
                <MiniData type={'Gender'} data={gender} imgIcon={genderIcon} />
            </div>

            <div>
                <img src={gender === 'Male' ? male : female} alt=""/>
            </div>
        </div>
    );
};

export default DetailCard;