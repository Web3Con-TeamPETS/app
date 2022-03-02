import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
      <Navbar bg="light">
        <Container id="navbar">
          <Navbar.Brand className="header gradient-text">OurHouse DAO</Navbar.Brand>
        </Container>
      </Navbar>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
