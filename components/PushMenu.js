import React, { Component } from 'react';
import styled from 'styled-components';
import NavMenu from './NavMenu';

const PushMenuStyles = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    @media (max-width: 1000px) {
        &:not(.open) {
            display: none;            
        }
        & .open {
            display: block;
            z-index: 2;
            flex-direction: column;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
    @media (min-width: 1001px) {
        display: none;
    }
`;

class PushMenu extends Component {
    render() {
        return (
            <PushMenuStyles className="open">
              <NavMenu />
            </PushMenuStyles>
        );
    }
}

export default PushMenu;<p>Test</p>