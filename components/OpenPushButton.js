import React, { Component } from 'react';
import styled from 'styled-components';

const OpenPushButtonStyles = styled.div`
    flex-grow: 0;
    font-size: 1.25em;
    align-self: flex-start;
    margin: 20px 0 0 -5px;
    padding: 0px 5px;
    position: fixed;
    background: blue;
    border-radius: 10px;
    color: white;
    transform: rotate(90deg);
    z-index: 2;
    .hidden {
        display: none !important;
    }
    @media (min-width: 1025px) {
        display: none;
    }
    &:hover {
        background: grey;
    }

`;

class OpenPushButton extends Component {
    render() {
        const { pushMenuOpen, handlePushMenu } = this.props;
        return (
            <OpenPushButtonStyles>
                <div className={pushMenuOpen ? "hidden" : ""} onClick={handlePushMenu}>Menu</div>
            </OpenPushButtonStyles>    
        );
    }
}

export default OpenPushButton;