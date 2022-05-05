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
  const [isShow, setIsShow] = useState({
    isShowHome: false,
    isShowDashboard: false,
    isShowAnalytics: false,
    isShowCalendar: false,
    isShowProfile: false,
    isShowSettings: false,
  });

  const {
    isShowHome,
    isShowDashboard,
    isShowAnalytics,
    isShowCalendar,
    isShowProfile,
    isShowSettings,
  } = isShow;

  const styledIcon = {
    color: '#fff',
    fontSize: '1.6rem',
  };

  const handleOnMouseEnter = (showLink) =>
    setIsShow({ ...isShow, [showLink]: true });

  const handleOnMouseLeave = (showLink) =>
    setIsShow({ ...isShow, [showLink]: false });

  return (
    <StyledSideNavBar>
      <ul>
        <li>
          <Link
            to='/'
            onMouseEnter={() => handleOnMouseEnter('isShowHome')}
            onMouseLeave={() => handleOnMouseLeave('isShowHome')}
          >
            <BiHome style={styledIcon} />

            {isShowHome && <span>Home</span>}
          </Link>
        </li>

        <li>
          <Link
            to='..'
            onMouseEnter={() => handleOnMouseEnter('isShowDashboard')}
            onMouseLeave={() => handleOnMouseLeave('isShowDashboard')}
          >
            <MdSpaceDashboard style={styledIcon} />

            {isShowDashboard && <span>Dashboard</span>}
          </Link>
        </li>

        <li>
          <Link
            to='..'
            onMouseEnter={() => handleOnMouseEnter('isShowAnalytics')}
            onMouseLeave={() => handleOnMouseLeave('isShowAnalytics')}
          >
            <IoAnalytics style={styledIcon} />

            {isShowAnalytics && <span>Analytics</span>}
          </Link>
        </li>

        <li>
          <Link
            to='..'
            onMouseEnter={() => handleOnMouseEnter('isShowCalendar')}
            onMouseLeave={() => handleOnMouseLeave('isShowCalendar')}
          >
            <BsFillCalendarCheckFill style={styledIcon} />

            {isShowCalendar && <span>Calendar</span>}
          </Link>
        </li>

        <li>
          <Link
            to='..'
            onMouseEnter={() => handleOnMouseEnter('isShowProfile')}
            onMouseLeave={() => handleOnMouseLeave('isShowProfile')}
          >
            <CgProfile style={styledIcon} />

            {isShowProfile && <span>Profile</span>}
          </Link>
        </li>

        <li>
          <Link
            to='..'
            onMouseEnter={() => handleOnMouseEnter('isShowSettings')}
            onMouseLeave={() => handleOnMouseLeave('isShowSettings')}
          >
            <FiSettings style={styledIcon} />

            {isShowSettings && <span>Settings</span>}
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
