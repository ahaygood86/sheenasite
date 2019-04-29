import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LinkStyles = styled.div`
  background: blue;
  flex-grow: 0;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  cursor: pointer;
  margin: 10px 5px;
  padding: 10px 5px 5px 5px;
  border-radius: 10px;
  & p {
    @media (max-width: 1024px) {
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
    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        height: 95vh;
        justify-content: space-around;
        align-items: stretch;
        padding: 10px 15px;
        margin: 15px;
        border-radius: 10px;
    }
    @media (min-width: 1025px) {
        flex-direction: row;
        max-width: 80vw;
    }
`;

class PushMenuButtons extends Component {
    render() {
        return (
            <PushNavStyles>
                <Link href="/">
                    <LinkStyles><a>Home</a></LinkStyles>
                </Link>
                <Link href="/about">
                    <LinkStyles><a>About</a></LinkStyles>
                </Link>
                <Link href="/gallery">
                    <LinkStyles><a>Gallery</a></LinkStyles>
                </Link>
                <Link href="/blog">
                    <LinkStyles><a>Blog</a></LinkStyles>
                </Link>
                <Link href="/club">
                    <LinkStyles><a>Fan Club</a></LinkStyles>
                </Link>
                <Link href="/login">
                    <LinkStyles><a>Login</a></LinkStyles>
                </Link>
                <LinkStyles>
                    <p onClick={this.props.handlePushMenu}>Close</p>
                </LinkStyles>
            </PushNavStyles>
        );
    }
}

export default PushMenuButtons;