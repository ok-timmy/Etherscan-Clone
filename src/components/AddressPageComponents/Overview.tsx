import React, { FC } from 'react'
import { ChevronDown, CreditCard2BackFill } from 'react-bootstrap-icons'
import styled from 'styled-components'

const OverviewDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
  display: block;
  border-radius: 10px;
`

const OverViewHeader = styled.div`
  border-bottom: 1px solid black;
  padding: 0.5rem;
  font-weight: bold;
`

const OverviewContent = styled.div`
  padding: 0 0.5rem;
  height: auto;

  &:first-child {
    border-bottom: 1px solid black;
  }
`

const OverviewDetails = styled.div`
  display: flex;
  // border-bottom: 1px solid black;
  padding: 1rem 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;

  .name {
    flex: 4;
  }

  .balance {
    flex: 6;
  }

  .token__details {
    flex: 6;
    display: flex;
    justify-content: justify-content;
    width: 100%;

    .card {
      padding: 0.5rem 0.5rem;
      border: 1px #d5dae2 solid;
      align-self: center;
      cursor: pointer;
    }

    .token__options {
      display: flex;
      justify-content: space-between;
      width: 100%;
      border: 1px #d5dae2 solid;
      border-radius: 5px;
      margin-right: 4px;
      padding: 0.25rem 0.5rem;
      cursor: pointer;

      div {
        display: flex;
        justify-content: center;
        align-self: center;

        .blue__no {
          color: white;
          background: #3498db;
          margin-left: 0.5rem;
          height: 1.25rem;
          padding: 0 0.35rem;
          border-radius: 4px;
          font-size: 12px;
        }
      }
    }
  }
`

const Overview: FC = () => {
  return (
    <OverviewDiv>
      <OverViewHeader>Overview</OverViewHeader>
      <OverviewContent>
        <OverviewDetails>
          <span className="name">Balance:</span>
          <span className="balance">42.749768627950947782 Ether</span>
        </OverviewDetails>
        <OverviewDetails>
          <span className="name">Ether Value:</span>
          <span className="balance">$73,477.45 (@ $1,718.78/ETH)</span>
        </OverviewDetails>
        <OverviewDetails>
          <span className="name">Token:</span>
          <div className="token__details">
            <div className="token__options">
              <div>
                $13, 854, 73 <div className="blue__no">17</div>
              </div>{' '}
              <div>
                <ChevronDown fontSize={'12px'}/>
              </div>
            </div>
            <div className="card">
              <CreditCard2BackFill />
            </div>
          </div>
        </OverviewDetails>
      </OverviewContent>
    </OverviewDiv>
  )
}

export default Overview
