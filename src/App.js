import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';

import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
