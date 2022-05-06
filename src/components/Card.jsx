import React from 'react';
import styled from 'styled-components';
import car from '../image/tesla-model-3.png';
import { BsFillPeopleFill, BsSpeedometer } from 'react-icons/bs';
import { GiGearStickPattern } from 'react-icons/gi';
import { BiGasPump } from 'react-icons/bi';

function Card() {
  return (
    <StyledCard>
      <img src={car} alt='Tesla Model 3' />
      <section>
        <div className='header'>
          <h3>Tesla Model S</h3>
          <p>Free recharge at any station</p>
        </div>

        <button>25% OFF</button>
      </section>

      <section>
        <h4>Basic Configuration</h4>

        <ul>
          <li>
            <BsFillPeopleFill />
            <span>4 passengers</span>
          </li>
          <li>
            <BsSpeedometer />
            <span>100 km/h in 4 seconds</span>
          </li>
          <li>
            <GiGearStickPattern />
            <span>Automatic gearbox</span>
          </li>
          <li>
            <BiGasPump />
            <span>Electric</span>
          </li>
        </ul>
      </section>

      <section>
        <div className='amount'>
          <p>$168.00</p>
          <span>per day</span>
        </div>

        <button>Rent now</button>
      </section>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  width: 370px;

  img {
    width: 350px;
  }

  section {
    display: flex;
    padding-bottom: 15px;
    border-bottom: 1px solid;
    justify-content: space-between;
    align-items: center;

    .header {
      margin-top: 15px;
      h3 {
        font-size: 1.1rem;
        font-weight: 600;
      }

      p {
        font-size: 0.8rem;
        opacity: 0.7;
      }
    }

    button {
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.blue};
      padding: 3px 15px;
      height: 25px;
      color: ${({ theme }) => theme.colors.blue};
      font-weight: 700;
      border-radius: 15px;
    }
  }

  section:nth-child(3) {
    flex-direction: column;
    align-items: flex-start;

    h4 {
      text-transform: uppercase;
      margin: 10px 0;
      font-size: 0.9rem;
      font-weight: 600;
      opacity: 0.6;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 10px;

      li {
        list-style-type: none;
        display: flex;
        opacity: 0.8;

        span {
          font-size: 0.75rem;
          margin-left: 10px;
        }
      }
    }
  }

  section:last-child {
    margin-top: 15px;
    border: none;
    .amount {
      p {
        font-size: 1.5rem;
        font-weight: 600;
      }
      span {
        display: block;
        margin-top: -8px;
        font-size: 0.8rem;
        font-weight: 600;
        opacity: 0.6;
      }
    }

    button {
      font-size: 1rem;
      height: 40px;
      padding: 5px 40px;
      border-radius: 20px;
      color: ${({ theme }) => theme.colors.white};
      border: none;
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile.xSmall}) {
    width: 290px;

    img {
      width: 265px;
    }
  }
`;

export default Card;
