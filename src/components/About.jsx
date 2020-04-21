import React from 'react';
import Social from './Social';
import styled from 'styled-components';

const AboutStyle = styled.div`
    text-align: center;
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: auto;
    height: 160px;
    border: 2px solid #E91E63;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;

const AboutName = styled.div`
    text-align: center;
`;

const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #C2185B;
`;

const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #C2185B;
`;

const AboutBio = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 300;
`;

const AboutLocation = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 400;
`;

//con styled-components
const About = ({ avatar, name, profession, bio, address, social }) => (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar className="About-avatar">
                <figure>
                    <AboutImg src="https://www.diariodequeretaro.com.mx/finanzas/tecnologia/97djo4-pikachu.jpg/ALTERNATES/LANDSCAPE_400/pikachu.jpg" alt={name} />
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2>{name}</AboutH2>
            </AboutName>
            <div className="About-profession">
                <AboutProfession>{profession}</AboutProfession>
            </div>
            <div className="About-desc">
                <AboutBio>{bio}</AboutBio>
            </div>
            <div className="About-location">
                <AboutLocation>{address}</AboutLocation>
            </div>
            <div className="About-social">
                <Social social={social}/>
            </div>
        </div>
    </AboutStyle>
);

//sin styled-components
/*
const About = ({ avatar, name, profession, bio, address, social }) => (
    <div className="About">
        <div className="About-container">
            <div className="About-avatar">
                <figure>
                    <img src="https://www.diariodequeretaro.com.mx/finanzas/tecnologia/97djo4-pikachu.jpg/ALTERNATES/LANDSCAPE_400/pikachu.jpg" alt={name} />
                </figure>
            </div>
            <div className="About-name">
                <h2>{name}</h2>
            </div>
            <div className="About-profession">
                <p>{profession}</p>
            </div>
            <div className="About-desc">
                <p>{bio}</p>
            </div>
            <div className="About-location">
                <p>{address}.</p>
            </div>
            <div className="About-social">
                <Social social={social}/>
            </div>
        </div>
    </div>
);
*/

export default About;

