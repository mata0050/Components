import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// logo
import logo from '../image/electric-car.png';

function Navbar() {
  return (
    <StyledNavbar>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='Tesla Logo' />
          <h4>Telsa</h4>
        </Link>
      </div>
      <ul>
        <li>
          <Link to='features'>Features</Link>
        </li>
        <li>
          <Link to='pricing'>Pricing</Link>
        </li>
        <li>
          <Link to='learn'>Learn</Link>
        </li>
        <li>
          <Link to='community'>Community</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.header``;

export default Navbar;
