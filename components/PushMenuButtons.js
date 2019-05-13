import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LinkStyles = styled.div`
  background: ${props => props.theme.backgroundColorNavLinks};
  flex-grow: 0;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  cursor: pointer;
  margin: 10px 5px;
  padding: 10px 5px 5px 5px;
  border-radius: 10px;
  & p {
    @media (max-width: ${props => props.theme.viewportSizeTabletMax}) {
        color: white;
        font-size: 1.5em;
        margin: 0 auto;
    }
  }
  &:hover {
    background: grey;
  }
`;

const PushNavStyles = styled.div`
    @media (max-width: ${props => props.theme.viewportSizeTabletMax}) {
        display: flex;
        flex-direction: column;
        height: 95vh;
        justify-content: space-around;
        align-items: stretch;
        padding: 10px 15px;
        margin: 15px;
        border-radius: 10px;
    }
    @media (min-width: ${props => props.theme.viewportSizeDesktopMin}) {
        flex-direction: row;
        max-width: 80vw;
    }
`;

class PushMenuButtons extends Component {
    render() {
        return (
            <PushNavStyles>
                <Link href="/">
                    <LinkStyles onClick={this.props.handlePushMenu}><a>Home</a></LinkStyles>
                </Link>
                <Link href="/about">
                    <LinkStyles onClick={this.props.handlePushMenu}><a>About</a></LinkStyles>
                </Link>
                <Link href="/gallery">
                    <LinkStyles onClick={this.props.handlePushMenu}><a>Gallery</a></LinkStyles>
                </Link>
                <Link href="/blog">
                    <LinkStyles onClick={this.props.handlePushMenu}><a>Blog</a></LinkStyles>
                </Link>
                <Link href="/club">
                    <LinkStyles onClick={this.props.handlePushMenu}><a>Fan Club</a></LinkStyles>
                </Link>
                <Link href="/login">
                    <LinkStyles onClick={this.props.handlePushMenu}><a>Login</a></LinkStyles>
                </Link>
                <LinkStyles onClick={this.props.handlePushMenu}>
                    <p>Close</p>
                </LinkStyles>
            </PushNavStyles>
        );
    }
}

export default PushMenuButtons;