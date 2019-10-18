import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </header>
    </Container>
  );
}
