import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// logo
import Logo from './Logo';

function Footer() {
  return (
    <StyledFooter>
      <div className='footer'>
        <div className='container'>
          <Logo />
          <span>
            Build fully functional accessible web applications faster than ever
          </span>
        </div>

        <div className='inner-footer'>
          <div className='container'>
            <h3>About</h3>
            <ul>
              <li>
                <Link to='..'>Features</Link>
              </li>
              <li>
                <Link to='..'>Pricing</Link>
              </li>
              <li>
                <Link to='..'>Support</Link>
              </li>
              <li>
                <Link to='..'>Forums</Link>
              </li>
            </ul>
          </div>

          <div className='container'>
            <h3>Project</h3>
            <ul>
              <li>
                <Link to='..'>Contribute</Link>
              </li>
              <li>
                <Link to='..'>Media assets</Link>
              </li>
              <li>
                <Link to='..'>Changelog</Link>
              </li>
              <li>
                <Link to='..'>Releases</Link>
              </li>
            </ul>
          </div>

          <div className='container'>
            <h3>Community</h3>
            <ul>
              <li>
                <Link to='..'>Join Discord</Link>
              </li>
              <li>
                <Link to='..'>Follow on Twitter</Link>
              </li>
              <li>
                <Link to='..'>Email newsletter</Link>
              </li>
              <li>
                <Link to='..'>Github discussions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <span>© 2021 tesla All rights reserved.</span>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  width: calc(100vw - 80px);
  height: 300px;
  padding: 40px 100px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.lightGrey};

  .footer {
    column-gap: 40px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

    .inner-footer {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .container {
    span {
      margin-top: 10px;
      display: block;
      font-size: 0.8rem;
      max-width: 300px;
    }

    h3 {
      color: ${({ theme }) => theme.colors.white};
      font-weight: 500;
    }

    ul {
      list-style: none;
      cursor: pointer;
      li {
        a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.white};
          opacity: 0.6;
          font-size: 0.8rem;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  span {
    font-size: 0.8rem;
    margin-top: 15px;
    display: block;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile.large}) {
    height: 400px;
    padding: 40px;
    .footer {
      flex-direction: column;

      .inner-footer {
        margin-top: 20px;
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile.small}) {
    height: 680px;
    padding: 40px;
    .footer {
      flex-direction: column;

      .inner-footer {
        grid-template-columns: repeat(1, 1fr);
        row-gap: 20px;
      }
    }
  }
`;
export default Footer;
