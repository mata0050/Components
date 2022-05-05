import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiHome } from 'react-icons/bi';
import { MdSpaceDashboard } from 'react-icons/md';
import { IoAnalytics } from 'react-icons/io5';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';

function SideNavBar() {
  const [show, setShow] = useState({
    showHome: false,
    showDashboard: false,
    showAnalytics: false,
    showCalendar: false,
    showProfile: false,
    showSettings: false,
  });

  const {
    showHome,
    showDashboard,
    showAnalytics,
    showCalendar,
    showProfile,
    showSettings,
  } = show;

  const styledIcon = {
    color: '#fff',
    fontSize: '1.6rem',
  };

  const handleOnMouseEnter = (showLink) =>
    setShow({ ...show, [showLink]: true });

  const handleOnMouseLeave = (showLink) =>
    setShow({
      showHome: false,
      showDashboard: false,
      showAnalytics: false,
      showCalendar: false,
      showProfile: false,
      showSettings: false,
    });

  return (
    <StyledSideNavBar>
      <ul>
        <li>
          <Link
            to='/'
            onMouseEnter={() => handleOnMouseEnter('showHome')}
            onMouseLeave={() => handleOnMouseLeave('showHome')}
          >
            <BiHome style={styledIcon} />

            {showHome && <span>Home</span>}
          </Link>
        </li>

        <li>
          <Link
            to='..'
            onMouseEnter={() => handleOnMouseEnter('showDashboard')}
            onMouseLeave={() => handleOnMouseLeave('showDashboard')}
          >
            <MdSpaceDashboard style={styledIcon} />

            {showDashboard && <span>Dashboard</span>}
          </Link>
        </li>

        <li>
          <Link
            to='..'
            onMouseEnter={() => handleOnMouseEnter('showAnalytics')}
            onMouseLeave={() => handleOnMouseLeave('showAnalytics')}
          >
            <IoAnalytics style={styledIcon} />

            {showAnalytics && <span>Analytics</span>}
          </Link>
        </li>

        <li>
          <Link
            to='..'
            onMouseEnter={() => handleOnMouseEnter('showCalendar')}
            onMouseLeave={() => handleOnMouseLeave('showCalendar')}
          >
            <BsFillCalendarCheckFill style={styledIcon} />

            {showCalendar && <span>Calendar</span>}
          </Link>
        </li>

        <li>
          <Link
            to='..'
            onMouseEnter={() => handleOnMouseEnter('showProfile')}
            onMouseLeave={() => handleOnMouseLeave('showProfile')}
          >
            <CgProfile style={styledIcon} />

            {showProfile && <span>Profile</span>}
          </Link>
        </li>

        <li>
          <Link
            to='..'
            onMouseEnter={() => handleOnMouseEnter('showSettings')}
            onMouseLeave={() => handleOnMouseLeave('showSettings')}
          >
            <FiSettings style={styledIcon} />

            {showSettings && <span>Settings</span>}
          </Link>
        </li>
      </ul>
    </StyledSideNavBar>
  );
}

const StyledSideNavBar = styled.nav`
  padding-top: 40px;
  position: absolute;
  top: 50px;
  min-width: 80px;
  height: calc(100vh - 50px);
  background-color: ${({ theme }) => theme.colors.black};

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  a {
    padding: 5px;
    border-radius: 5px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    position: relative;
    display: flex;

    &:hover {
      background-color: ${({ theme }) => theme.colors.blue};
    }

    span {
      font-size: 0.8rem;
      font-weight: 600;
      padding: 3px;
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 5px;
      position: absolute;
      top: 5px;
      left: 45px;
      z-index: 10;
    }
  }
`;

export default SideNavBar;
