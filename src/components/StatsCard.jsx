import React from 'react';
import styled from 'styled-components';

function StatsCard() {
  return (
    <StyledStats>
      <div className='stats'>
        <h2>Project tasks</h2>

        <div className='task'>
          <p>1887</p>
          <span>Completed</span>
        </div>

        <div className='remaining'>
          <div className='task'>
            <p>447</p>
            <span>Remaining</span>
          </div>

          <div className='task'>
            <p>76</p>
            <span>In progress</span>
          </div>
        </div>
      </div>

      <div className='percentage'>
        <div className='task'>
          <p>81%</p>
          <span>Completed</span>
        </div>
      </div>

      
    </StyledStats>
  );
}

const StyledStats = styled.div`
  margin-top: 60px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .task {
    margin-top: 10px;
    p {
      font-size: 1.2rem;
      font-weight: 700;
    }

    span {
      display: block;
      font-size: 0.7rem;
      margin-top: -5px;
      opacity: 0.7;
    }
  }

  .stats {
    h2 {
      font-size: 1.3rem;
      margin-bottom: 20px;
    }

    .remaining {
      margin-top: 15px;
      display: flex;
      width: 150px;
      justify-content: space-between;
    }
  }

  .percentage {
    height: 130px;
    width: 130px;
    border: 5px solid red;
    border-radius: 75px;
    display: flex;
    align-items: center;
    justify-content: center;

    .task {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default StatsCard;
