import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'

import './Card.css';

const Card = props => {
    let [url,setUrl]  = useState('');

    useEffect(()=>{
        const resUrl = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${props.id}`
        fetch(resUrl)
            .then(response => response.json())
            .then(data => setUrl(data.leagues[0].strBadge));
    },[]);

    let {
        name,
        id,
        type
    } = props;

    return (
        <div className="card">
            {url && <img src={url} alt={name}/>}
            <h2>{name}</h2>
            <p>Sports type: {type}</p>
            <Link to={`/leagues/${id}`}>
            <button><span>Explore</span> <FontAwesomeIcon icon={faArrowRight} /> 
            </button>
            </Link>
        </div>
    );
};

export default Card;