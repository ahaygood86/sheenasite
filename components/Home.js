import React, { Component } from 'react';
import styled from 'styled-components';

const HeroImage = styled.img`
    width: 100%;
    border: 1px solid black;
`;

const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    text-align: center;
`;

class Home extends Component {
    render() {
        return (
            <HomeContent>
                <HeroImage src="../static/hero.jpg" />
                <p>I am the Home component</p>
            </HomeContent>
        );
    }
}

export default Home;