import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LinkStyles = styled.a`
  background: blue;
  flex-grow: 0;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  cursor: pointer;
  margin: 10px 5px;
  padding: 5px 5px 5px 5px;
  border-radius: 10px;
  
  &:hover {
    background: grey;
  }
`;

const NavStyles = styled.div`

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        height: 95vh;
        justify-content: space-around;
        align-items: stretch;
        padding: 15px;
        margin: 15px;
        border-radius: 10px;
    }
    @media (min-width: 1001px) {
        flex-direction: row;
        max-width: 80vw;
    }
    background: yellow;
`;

class NavMenu extends Component {
    render() {
        return (
            <NavStyles>
                <Link href="/">
                    <LinkStyles>Home</LinkStyles>
                </Link>
                <Link href="/about">
                    <LinkStyles>About</LinkStyles>
                </Link>
                <Link href="/gallery">
                    <LinkStyles>Gallery</LinkStyles>
                </Link>
                <Link href="/blog">
                    <LinkStyles>Blog</LinkStyles>
                </Link>
                <Link href="/club">
                    <LinkStyles>Fan Club</LinkStyles>
                </Link>
                <Link href="/login">
                    <LinkStyles>Login</LinkStyles>
                </Link>
            </NavStyles>
        );
    }
}

export default NavMenu;