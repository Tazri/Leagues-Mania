import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import Header from '../Header/Header';

const Home = () => {
    const [teams,setTeams] = useState([]);
    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
            .then(response => response.json())
            .then(data =>setTeams(data.leagues.slice(0,24)));
    },[]);
    return (
        <div className="home">
            <Header />
            <Container teams={teams} />
        </div>
    );
};

export default Home;