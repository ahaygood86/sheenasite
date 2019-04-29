import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LinkStyles = styled.a`
  background: blue;
  flex-grow: .1;
  cursor: pointer;
  margin: 10px 5px;
  padding: 5px;
  border-radius: 10px;

  &:hover {
    background: grey;
  }
`;

const NavStyles = styled.div`
    display: flex;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
    @media (min-width: 1001px) {
        flex-direction: row;
    }
    background: yellow;
    & > .testCol {
        background: yellow;
    }
`;

class NavMenu extends Component {
    render() {
        return (
            <NavStyles>
                <Link className="testCol" href="/">
                    <LinkStyles>Home</LinkStyles>
                </Link>
                <Link className="testCol" href="/about">
                    <LinkStyles>About</LinkStyles>
                </Link>
                <Link className="testCol" href="/gallery">
                    <LinkStyles>Gallery</LinkStyles>
                </Link>
                <Link className="testCol" href="/blog">
                    <LinkStyles>Blog</LinkStyles>
                </Link>
                <Link className="testCol" href="/club">
                    <LinkStyles>Fan Club</LinkStyles>
                </Link>
                <Link className="testCol" href="/login">
                    <LinkStyles>Login</LinkStyles>
                </Link>
            </NavStyles>
        );
    }
}

export default NavMenu;