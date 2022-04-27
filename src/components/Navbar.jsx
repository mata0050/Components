import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GrMenu, GrClose } from 'react-icons/gr';

// logo
import logo from '../image/electric-car.png';

function Navbar() {
  const [menuState, setMenuState] = useState(false);

  const openMenu = () => setMenuState((prevState) => !prevState);

  const menuIconStyle = {
    fontSize: '2rem',
    position: 'absolute',
    top: 10,
    right: 20,
  };

  return (
    <StyledNavbar>
      {menuState ? (
        <GrClose style={menuIconStyle} onClick={openMenu} />
      ) : (
        <GrMenu style={menuIconStyle} onClick={openMenu} />
      )}

      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='Tesla Logo' />
          <h4>Telsa</h4>
        </Link>
      </div>

      {menuState && (
        <ul>
          <li className='home-link'>
            <Link to='/' onClick={openMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to='features' onClick={openMenu}>
              Features
            </Link>
          </li>
          <li>
            <Link to='pricing' onClick={openMenu}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to='learn' onClick={openMenu}>
              Learn
            </Link>
          </li>
          <li>
            <Link to='community' onClick={openMenu}>
              Community
            </Link>
          </li>
        </ul>
      )}
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

  ul {
    margin: 50px 30px 0;
    li {
      list-style: none;
      margin-bottom: 10px;
      cursor: pointer;

      a {
        text-decoration: none;
        font-size: 1.1rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }
  /* @media only screen and (min-width: ${({ theme }) => theme.mobile.xSmall}) {
  } */
`;

export default Navbar;
