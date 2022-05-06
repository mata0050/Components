import React, { useState } from 'react';
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
    padding: '5px',
    position: 'absolute',
    top: 10,
    right: 25,
    background: 'white',
    borderRadius: '5px',
  };

  return (
    <StyledNavbar>
      <div className='mobile-buttons'>
        {menuState ? (
          <GrClose style={menuIconStyle} onClick={openMenu} />
        ) : (
          <GrMenu style={menuIconStyle} onClick={openMenu} />
        )}
      </div>

      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='Tesla Logo' />
          <h4>Tesla</h4>
        </Link>
      </div>

      <ul className={menuState ? 'show' : 'hide'}>
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
    </StyledNavbar>
  );
}

const StyledNavbar = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;

  .logo {
    display: none;
  }

  .hide {
    display: none;
  }

  .show {
    display: block;
  }

  ul {
    position: absolute;
    top: 60px;
    right: 25px;
    background-color: ${({ theme }) => theme.colors.black};
    padding: 20px;
    border-radius: 10px;
    li {
      list-style: none;
      margin-bottom: 10px;
      cursor: pointer;

      a {
        text-decoration: none;
        font-size: 1.1rem;
        color: ${({ theme }) => theme.colors.white};
      }
      &:hover {
        opacity: 0.6;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.mobile.medium}) {
    .mobile-buttons {
      display: none;
    }

    .logo {
      display: block;
      padding-top: 10px;
      margin-left: 20px;

      a {
        display: flex;
        align-items: center;
        text-decoration: none;

        img {
          background: white;
          width: 30px;
          border-radius: 5px;
          padding: 2px;
          margin-right: 10px;
        }

        h4 {
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }

    ul {
      top: 0;
      background-color: transparent;
      padding: 0;
      margin-top: 10px;

      li {
        margin: 0 10px;
      }
    }
    .hide,
    .show {
      display: block;
      display: flex;
    }
  }
`;

export default Navbar;
