import React, { Component } from 'react';
import styled from 'styled-components';

const OpenPushButtonStyles = styled.div`
    flex-grow: 0;
    font-size: 1.25em;
    align-self: flex-start;
    margin: 20px 0 0 -5px;
    padding: 0px 5px;
    position: fixed;
    background: ${props => props.theme.backgroundColorNavLinks};
    border-radius: 10px;
    color: white;
    transform: rotate(90deg);
    z-index: 2;
    cursor: pointer;
    .hidden {
        display: none !important;
    }
    @media (min-width: ${props => props.theme.viewportSizeDesktopMin}) {
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
                <div 
                    className={pushMenuOpen ? "hidden" : ""} 
                    onClick={handlePushMenu}
                >
                    Menu
                </div>
            </OpenPushButtonStyles>    
        );
    }
}

export default OpenPushButton;