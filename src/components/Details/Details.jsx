import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailCard from '../DetailCard/DetailCard';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import './Details.css'

const Details = () => {
    let [league,setLeague] = useState({});
    let {id} = useParams();

    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
        fetch(url)
            .then(res=>res.json())
            .then(data=>setLeague(data.leagues[0]));
    },[])
    console.log(league);
    return (
        <div className="details">
            <Header banner={league.strFanart2} icon={league.strBadge} />
            <div className="container">
                <DetailCard 
                    gender={league.strGender}
                    name={league.strLeague}
                    type={league.strSport}
                    founded={league.dateFirstEvent}
                    country={league.strCountry}
                    />

                <p>{league.strDescriptionEN}</p>
                <br />
                <p>{league.strDescriptionEN}</p>
                <Footer 
                    facebook={league.strFacebook}
                    twitter={league.strTwitter}
                    youtube={league.strYoutube}
                />
            </div>
        </div>
    );
};

export default Details;