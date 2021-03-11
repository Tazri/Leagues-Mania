import React from 'react';

import './Header.css';
import background from './../../img/photo/banner.webp'

const Header = props => {
    let {banner,icon}=props;

    banner = banner ||  background;

    let hOne = <h1>Leagues Mania</h1>

    let style = {
        backgroundImage: `url("${banner}")`
    }
    return (
        <header style={style}>
            {icon ? <img src={icon} /> : hOne}
        </header>
    );
};

export default Header;