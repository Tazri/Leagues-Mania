import React from 'react';
import './Footer.css';
import twitterIcon from './../../img/icon/twitter.png'
import facebookIcon from './../../img/icon/facebook.png'
import youtubeIcon from './../../img/icon/youtube.png'

const Footer = props => {
    const { facebook, twitter, youtube } = props;
    return (
        <footer>
            <a href={`https://${twitter}`} target="_blank"><img src={twitterIcon} alt="twitter"/></a>
            <a href={`https://${facebook}`} target="_blank"><img src={facebookIcon} alt="facebook"/></a>
            <a href={`https://${youtube}`} target="_blank"><img src={youtubeIcon} alt="youtube"/></a>
        </footer>
    );
};

export default Footer;