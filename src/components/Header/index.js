import React from 'react';

import { Container } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <header>
        <img src={logo} alt="logo" />
      </header>
    </Container>
  );
}
