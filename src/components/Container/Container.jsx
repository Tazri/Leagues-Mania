import React from 'react';
import Card from '../Card/Card';
import './Container.css'

const Container = props => {
    let { teams } = props;
    
    const cards = teams.map(team=>{
        let {
            idLeague,
            strLeague,
            strSport,
        } = team;

        return <Card key={idLeague} id={idLeague} name={strLeague} type={strSport} />
    });

    return (
        <main>
            {cards}        
        </main>
    );
};

export default Container;