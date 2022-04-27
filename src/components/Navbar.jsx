import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GrMenu, GrClose } from 'react-icons/gr';

// logo
import logo from '../image/electric-car.png';

function Navbar() {
  const [menuState, setMenuState] = useState(false);

  const menuIconStyle = {
    fontSize: '2rem',
  };

  return (
    <StyledNavbar>
      {menuState ? (
        <GrClose style={menuIconStyle} />
      ) : (
        <GrMenu style={menuIconStyle} />
      )}

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

const StyledNavbar = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  height: 80px;
  z-index: 2;

  .logo {
    display: none;
  }

  ul{
    
  }
  /* @media only screen and (min-width: ${({ theme }) => theme.mobile.xSmall}) {
  } */
`;

export default Navbar;
