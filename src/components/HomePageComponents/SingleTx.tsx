import React, { FC } from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/themes/mediaQueries'

const Tx = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 1rem;
  border-bottom: 0.2px solid #77838f;
  width: auto;
  text-overflow: hidden ;

  ${mediaQueries.tabport} {
    grid-template-columns: 1fr;
  }
`

const TxLeft = styled.div`
display: flex;

  .blocktag {
    background-color: #f1f2f4;
    padding: 0.8rem 1rem;
    height: 3rem;
    border-radius: 50%;
    :after{
      content: "Tx"
    }
    ${mediaQueries.tabport} {
      background-color: white;
      font-weight: bold;
      padding:0;
      height: auto;
      :after {
        content: "Tx#";
      }
    }
  }

  ul {
    list-style: none;
    margin: 0 2rem 0 -1.5rem;

    ${mediaQueries.tabland} {
      margin: 0 0.5rem 0 -1.5rem;
    }

    .blockNumber {
      color: #3498db;
    }

    .time {
      font-size: 12px;
      color: #77838f;
      ${mediaQueries.tabport} {
        display: none;
        visibility: hidden;
      }
    }
  }
`

const TxRight = styled.div`
  display: flex;
  justify-content: space-between;
  ${mediaQueries.tabport} {
    flex-direction: column;
  }

  .from__to {
    font-size: 1rem;
    font-weight: 500;
    color: #1e2022;
    display: flex;
    flex-direction: column;
   
    ${mediaQueries.tabport} {
      flex-direction: row;

      span{
        display: flex;
      }
    }

    a {
      text-decoration: none;
      color: #3498db;
    }

    .timeTaken {
      font-size: 12px;
      color: #77838f;
    }
  }
}

`

const SingleTx: FC = () => {
  return (
    <Tx>
      <TxLeft>
        <span className="blocktag"></span>
        <ul>
          <li className="blockNumber">0x1c3d4169f1...</li>
          <li className="time">20 seconds ago</li>
        </ul>
      </TxLeft>

      <TxRight>
        <div className="from__to">
          <span>
            <span>From</span> <a href="#">0x1c3d4169f1c50ae.......</a>
          </span>
          <span>
           <span>To</span> <a href="#">0x1c3d4169f1c50ae...</a>
          </span>
        </div>
        <span className='amount'>2.03546</span>
      </TxRight>
    </Tx>
  )
}

export default SingleTx
