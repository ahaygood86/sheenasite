import React, { Component } from 'react';
import styled from 'styled-components';
import PushMenuButtons from './PushMenuButtons';

const PushMenuStyles = styled.div`
    position: fixed;
    width: 96%;
    height: 98%;
    display: block;
    border-radius: 10px;
    transition: margin .5s ease-in;
    overflow: hidden;
    margin: 1vh 0 0 0;
    @media (max-width: 1024px) {
        &:not(.open) {
            margin: 1vh 0 0 -100vw;           
        }
        & .open {            
            z-index: 2;
            flex-direction: column;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
    @media (min-width: 1025px) {
        display: none;
    }
    background: yellow;
`;

class PushMenu extends Component {
    render() {
        const { pushMenuOpen, handlePushMenu } = this.props;
        return (
            <PushMenuStyles className={pushMenuOpen ? "open" : ""}>
                <PushMenuButtons handlePushMenu={handlePushMenu} />
            </PushMenuStyles>
        );
    }
}

export default PushMenu;