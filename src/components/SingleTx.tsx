import React, { FC } from 'react'
import styled from 'styled-components'

const Tx = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 1rem;
  border-bottom: 0.2px solid #77838f;
`

const TxLeft = styled.div`
display: flex;

  .blocktag {
    background-color: #f1f2f4;
    padding: 0.8rem 1rem;
    height: 3rem;
    border-radius: 50%;
  }

  ul {
    list-style: none;
    margin: 0 2rem 0 -1.5rem;

    .blockNumber {
      color: #3498db;
    }

    .time {
      font-size: 12px;
      color: #77838f;
    }
  }
`

const TxRight = styled.div`
  display: flex;
  justify-content: space-between;

  .from__to {
    font-size: 1rem;
    font-weight: 500;
    color: #1e2022;
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      color: #3498db;
    }

    .timeTaken {
      font-size: 12px;
      color: #77838f;
    }
  }
`

const SingleTx: FC = () => {
  return (
    <Tx>
      <TxLeft>
        <span className="blocktag">Tx</span>
        <ul>
          <li className="blockNumber">0x1c3d4169f1...</li>
          <li className="time">20 seconds ago</li>
        </ul>
      </TxLeft>

      <TxRight>
        <div className="from__to">
          <span>
            From <a href="#">0x1c3d4169f1c50ae.......</a>
          </span>
          <span>
            To <a href="#">0x1c3d4169f1c50ae...</a>
          </span>
        </div>
        <span>2.03546</span>
      </TxRight>
    </Tx>
  )
}

export default SingleTx
