import React from 'react';
import { HashRouter, Link } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <header>
        <HashRouter>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </HashRouter>
      </header>
    </Container>
  );
}
